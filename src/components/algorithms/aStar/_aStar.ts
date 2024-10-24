import { StyledGridState } from "../grid/_grid";
import { GridState } from "../grid/gridState";
import { AStarNode } from "./aStarNode";
import { AStarResult } from "./utils/aStarResult";
import { AStarStages } from "./utils/aStarStages.enum";
import { AStarStates } from "./utils/aStarStates.enum";

export default class AStar {
    state: GridState<AStarStates>;
    originalState: GridState<AStarStates>;
    all: Array<Array<AStarNode>> = [];
    open: Array<AStarNode> = [];
    closed: Array<AStarNode> = [];
    start?: AStarNode;
    end?: AStarNode;

    steps: number = 0;
    foundEnd: boolean = false;
    inProgress: boolean = false;
    private auto: boolean = false;

    constructor(state: GridState<AStarStates>) {
        this.originalState = this.state = state;
        this.generate();
    }

    private generate() {
        this.all = [];
        this.open = [];
        this.closed = [];
        this.start = undefined;
        this.end = undefined;
        this.steps = 0;

        for (let y = 0; y < this.state.state.length; y++) {
            this.all.push([]);

            for (let x = 0; x < this.state.state[y].length; x++) {
                const item: AStarStates = this.getElementState(x, y);
                const node: AStarNode = new AStarNode(x, y);

                if (item == AStarStates.Wall)
                    node.removed = true;

                this.all[y].push(node);

                if (item == AStarStates.Start) {
                    this.start = node;
                }

                if (item == AStarStates.End)
                    this.end = node;
            }
        }

        if (this.start) {
            this.open.push(this.start);
            this.start.isStart = true;
        }

        // something's wrong
        if (!this.canContinue())
            return;
    }

    setAuto(auto: boolean) {
        this.auto = auto;
        return this.postInteraction(this.originalState.new());
    }

    canContinueReason() {
        if (this.start === undefined)
            return "Start is not defined";

        if (this.end === undefined)
            return "End is not defined";

        if (this.start == this.end)
            return "The start can't be the same as the end";

        if (this.foundEnd)
            return `Path was found. Distance ${this.end!.gCost != Infinity ? Math.round(this.end!.gCost * 10) / 10 : "Unknown-"}u`;

        if (this.open.length == 0)
            return "Impossible pathing."
    }

    canContinue() {
        return this.canContinueReason() === undefined;
    }

    // This isn't getting used at all.
    getStyledGridState(): string[][] {
        const state = this.state.getStyledGridState();

        this.all.forEach((nodes, y) => nodes.forEach((node, x) => {
            if (node.i != undefined) {
                // get the number here
                state[x][y] = `${state[x][y]} d${node.i}`;
            }
        }))
        return state;
    }

    private canChange(node: AStarStates) {
        return node !== AStarStates.End && node !== AStarStates.Start;
    }

    private getElementState(x: number, y: number) {
        return this.state.state[y][x];
    }

    private setElementState(x: number, y: number, state: AStarStates) {
        const node = this.state.state[y][x];
        if (
            (
                state == AStarStates.Explored ||
                state == AStarStates.Removed
            ) && (
                node == AStarStates.Start ||
                node == AStarStates.End
            )
        ) return;

        this.state.state[y][x] = state;
    }

    reset() {
        this.state = this.originalState.new();
        this.inProgress = false;
        this.foundEnd = false;
        this.generate();
        return new AStarResult(this.state, undefined, this.canContinue(), this.canContinueReason());
    }

    private postInteraction(res: GridState<AStarStates>, nextStage?: AStarStages) {
        this.generate();
        this.originalState = res.new();

        if (this.auto)
            this.run();

        return new AStarResult(this.state.new(), nextStage, this.canContinue(), this.canContinueReason());
    }

    interaction(x: number, y: number, stage: AStarStages): AStarResult {
        if (this.inProgress)
            this.reset();

        switch (stage) {
            case AStarStages.Wall: {
                return this.postInteraction(this.toggleWall(x, y), stage);
            }

            case AStarStages.Start: {
                return this.postInteraction(this.clearAndSet(x, y, AStarStates.Start), AStarStages.End);
            }

            case AStarStages.End: {
                return this.postInteraction(this.clearAndSet(x, y, AStarStates.End), AStarStages.Wall);
            }
        }
    }

    private clearAndSet(x: number, y: number, state: AStarStates) {
        // find old start
        this.state.state = this.state.state.map((col) => col.map(item => item == state ? AStarStates.Node : item));
        this.setElementState(x, y, state);

        if (state === AStarStates.Start)
            this.start = this.all[y][x];

        if (state === AStarStates.End)
            this.end = this.all[y][x];

        return this.state.new();
    }

    private toggleWall(x: number, y: number) {
        if (this.canChange(this.getElementState(x, y)))
            this.setElementState(x, y, this.getElementState(x, y) === AStarStates.Node ? AStarStates.Wall : AStarStates.Node);

        return this.state.new();
    }

    public getSurrounding(x: number, y: number) {
        // check on x file
        const nodes = [];

        // will result in 8 elements or less...
        const xStart = Math.max(x - 1, 0);
        const xEnd = Math.min(x + 2, this.all[0].length);

        const yStart = Math.max(y - 1, 0);
        const yEnd = Math.min(y + 2, this.all.length);

        for (let i = xStart; i < xEnd; i++)
            for (let j = yStart; j < yEnd; j++)
                if (!(x == i && y == j)) {
                    const node = this.all[j][i];
                    if (!node.removed)
                        nodes.push(node);
                }


        return nodes;
    }

    step(): AStarResult {
        this.inProgress = true;
        if (!this.canContinue())
            return new AStarResult(this.state.new(), AStarStages.Wall, this.canContinue(), this.canContinueReason());

        // find the lowest element
        const node =
            this.open.reduce(
                (prev, curr) =>
                    prev === undefined ? curr :
                        prev.fCost > curr.fCost ? curr : prev
            );

        // explore around // filter removed cells
        const possibleNodes = this.getSurrounding(node.x, node.y).filter((cell) => {
            return !cell.removed;
        });

        // saturate the cells
        possibleNodes.forEach((cell) => {
            cell.end = this!.end;

            if (cell.bestRoute === undefined || cell.gCost > node.gCost + cell.distance(node))
                cell.bestRoute = node;


            this.setElementState(cell.x, cell.y, AStarStates.Explored);

            if (cell == this.end)
                this.foundEnd = true;

            // remove them from the open list if they are found
            const index = this.open.indexOf(cell);
            if (index != -1)
                this.open.splice(index, 1);
        });

        node.removed = true;
        this.setElementState(node.x, node.y, AStarStates.Removed);

        this.open.splice(this.open.indexOf(node), 1, ...possibleNodes);

        if (this.foundEnd) {
            let i = 0;
            let cell = this.end!.bestRoute!;
            while (cell != this.start || !cell) {
                this.setElementState(cell.x, cell.y, AStarStates.Path);
                cell.i = i++;

                cell = cell.bestRoute!;
            }
        }

        this.steps++;

        return new AStarResult(this.state.new(), AStarStages.Wall, this.canContinue(), this.canContinueReason());
    }

    run(): AStarResult {
        let res: AStarResult;
        if (this.auto && this.canContinue())
            while (this.canContinue())
                res = this.step();

        else
            res = this.step();

        return res!;
    }
}