import { AStarStages } from "@/app/fun/a-star/page";
import { StyledGridState } from "../grid/_grid";
import { GridState } from "../grid/gridState";

export enum AStarStates {
    Node,
    Wall,
    Start,
    End,
    Path,
}

class AStarNode {
    bestRoute?: AStarNode;
    cachedHCost?: number;

    // /**
    //  * Wether the node is set (can't get better)
    //  */
    // removed: boolean = false;

    /**
     * The distance from the starting node
     */
    get gCost(): number {
        if (!this.bestRoute)
            return Infinity;

        return this.bestRoute.gCost + this.distance(this.bestRoute);
    }

    /**
     * The distance from the end node
     */
    getHCost(): number {
        if (this.end === undefined)
            throw new Error("end is not defined");

        if (this.cachedHCost === undefined)
            this.cachedHCost = this.distance(this.end);

        return this.cachedHCost;
    }

    /**
     * Get the distance between this node and another
     * @param node 
     * @returns 
     */
    distance(node: AStarNode) {
        return Math.hypot(this.x - node.x, this.y - node.y);
    }

    /**
     * generates the sum of the costs (heuristic)
     */
    get fCost(): number {
        return this.gCost + this.fCost;
    }

    constructor(public x: number, public y: number, public end?: AStarNode) { }
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
        this.state.state[y][x] = state;
    }

    interaction(x: number, y: number, stage: AStarStages): AStarResult {
        console.log(stage)
        switch (stage) {
            case AStarStages.Wall: {
                return new AStarResult(this.toggleWall(x, y), stage, this.canContinue(),);
            }

            case AStarStages.Start: {
                return new AStarResult(this.clearAndSet(x, y, AStarStates.Start), AStarStages.End, this.canContinue(),);
            }

            case AStarStages.End: {
                return new AStarResult(this.clearAndSet(x, y, AStarStates.End), AStarStages.Wall, this.canContinue(),);
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

        this.generate();

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

        for(    let i = x == 0 ? x : x - 1; i <= x + 1 && i < this.all.length; i++)
            for(let j = y == 0 ? y : y - 1; j <= y + 1 && j < this.all[x].length; j++)
                if(!(x == i && y == j))
                    nodes.push(this.all[i][j]);

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

        // explore around
        const possibleNodes = this.getSurrounding(node.x, node.y);
        console.log(possibleNodes);
    }
}