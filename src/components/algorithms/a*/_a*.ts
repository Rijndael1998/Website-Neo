import { AStarStages } from "@/app/fun/a-star/page";
import { StyledGridState } from "../grid/_grid";
import { GridState } from "../grid/gridState";
import { AStarNode } from "./a*node";

export enum AStarStates {
    Node,
    Wall,
    Start,
    End,
    Path,
    Explored,
}

export class AStarResult {
    constructor(
        public readonly gridState: GridState<AStarStates>,
        public readonly gridStage: AStarStages,
        public readonly canContinue: boolean,
    ) { }
}

export default class AStar implements StyledGridState {

    state: GridState<AStarStates>
    // arrays is x, y
    all: Array<Array<AStarNode>> = [];
    open: Array<AStarNode> = [];
    closed: Array<AStarNode> = [];
    start?: AStarNode;
    end?: AStarNode;

    steps: number = 0;

    constructor(state: GridState<AStarStates>) {
        this.state = state;
        this.generate();
    }

    private generate() {
        console.log("pregen", this);
        console.log("generated");
        this.all = [];
        this.open = [];
        this.closed = [];
        this.start = undefined;
        this.end = undefined;

        for (let y = 0; y < this.state.state.length; y++) {
            this.all.push([]);

            for (let x = 0; x < this.state.state.length; x++) {
                const item: AStarStates = this.getElementState(x, y);
                const node: AStarNode = new AStarNode(x, y);

                console.log(item, node)

                if (item == AStarStates.Wall)
                    node.removed = true;

                // console.log(item, node);

                this.all[y].push(node);

                if (item == AStarStates.Start)
                    this.start = node;

                if (item == AStarStates.End)
                    this.end = node;
            }
        }

        console.log("postgen", this);

        // something's wrong
        if (!this.canContinue())
            return;

        if (this.start)
            this.open.push(this.start);
    }

    canContinueReason() {
        if (this.start === undefined)
            return "Start is not defined";

        if (this.end === undefined)
            return "End is not defined";

        if (this.start == this.end)
            return "The start can't be the same as the end";
    }

    canContinue() {
        return this.canContinueReason() === undefined;
    }

    getStyledGridState(): string[][] {
        return this.state.getStyledGridState();
    }

    private canChange(node: AStarStates) {
        return node !== AStarStates.End && node !== AStarStates.Start;
    }

    private getElementState(x: number, y: number) {
        return this.state.state[y][x];
    }

    private setElementState(x: number, y: number, state: AStarStates) {
        const node = this.state.state[y][x];
        if (state == AStarStates.Explored && (
            node == AStarStates.Start
            || node == AStarStates.End)
        ) return;

        this.state.state[y][x] = state;
    }

    interaction(x: number, y: number, stage: AStarStages): AStarResult {
        console.log(stage)
        switch (stage) {
            case AStarStages.Wall: {
                const res = this.toggleWall(x, y);
                this.generate();
                return new AStarResult(res, stage, this.canContinue(),);
            }

            case AStarStages.Start: {
                const res = this.clearAndSet(x, y, AStarStates.Start);
                this.generate();
                return new AStarResult(res, AStarStages.End, this.canContinue(),);
            }

            case AStarStages.End: {
                const res = this.clearAndSet(x, y, AStarStates.End);
                this.generate();
                return new AStarResult(res, AStarStages.Wall, this.canContinue(),);
            }
        }
    }

    private clearAndSet(x: number, y: number, state: AStarStates) {
        // find old start
        this.state.state = this.state.state.map((col) => col.map(item => item == state ? AStarStates.Node : item));
        this.setElementState(x, y, state);

        if (state === AStarStates.Start)
            this.start = this.all[x][y];

        if (state === AStarStates.End)
            this.end = this.all[x][y];

        return this.state.new();
    }

    private toggleWall(x: number, y: number) {
        if (this.canChange(this.getElementState(x, y)))
            this.setElementState(x, y, this.getElementState(x, y) === AStarStates.Node ? AStarStates.Wall : AStarStates.Node);

        const newState = this.state.new();
        console.log("state compare", this.state, newState);
        return newState;
    }

    public getSurrounding(x: number, y: number) {
        // check on x file
        const nodes = [];
        console.log("surrounding", x, y);

        // will result in 8 elements or less...
        const xStart = Math.max(x - 1, 0);
        const xEnd = Math.min(x + 2, this.all.length);

        const yStart = Math.max(y - 1, 0);
        const yEnd = Math.min(y + 2, this.all[xStart].length);


        for (let i = xStart; i < xEnd; i++)
            for (let j = yStart; j < yEnd; j++)
                if (!(x == i && y == j)) {
                    const node = this.all[j][i];
                    if (!node.removed)
                        nodes.push(node);
                }


        return nodes;
    }

    step() {
        console.log(this);
        if (!this.canContinue())
            return;

        // find the lowest element
        const node =
            this.open.reduce(
                (prev, curr) =>
                    prev === undefined ? curr :
                        prev.getHCost() > curr.getHCost() ? curr : prev
            );

        // explore around // filter removed cells
        const possibleNodes = this.getSurrounding(node.x, node.y).filter((cell) => {
            return !cell.removed;
        });
        console.log(possibleNodes);

        let foundEnd = false;

        // saturate the cells
        possibleNodes.forEach((cell) => {
            cell.end = this!.end;
            cell.bestRoute = node;
            this.setElementState(cell.x, cell.y, AStarStates.Explored);

            if(cell == this.end)
                foundEnd = true;
        });

        node.removed = true;

        this.open.splice(this.open.indexOf(node), 1, ...possibleNodes);

        if(foundEnd) {
            let cell = this.end!.bestRoute!;
            while(cell != this.start || !cell) {
                this.setElementState(cell.x, cell.y, AStarStates.Path);
                cell = cell.bestRoute!;
            }
        }

        return this.state.new();
    }
}