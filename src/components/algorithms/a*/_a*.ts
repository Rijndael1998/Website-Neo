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
    /**
     * Wether the node is set (can't get better)
     */
    removed: boolean = false;

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
    hCost: number = Infinity;

    bestRoute?: AStarNode;

    constructor(public x: number, public y: number) { }

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
    start!: AStarNode;
    end!: AStarNode;

    constructor(state: GridState<AStarStates>) {
        this.state = state;

        this.generate();
    }

    generate() {
        for (let y = 0; y < this.state.state.length; y++) {
            this.all.push([]);

            for (let x = 0; x < this.state.state.length; x++) {
                const item: AStarStates = this.state.state[x][y];
                const node: AStarNode = new AStarNode(x, y);

                this.all[y].push(node);

                if (item == AStarStates.Start)
                    this.start = node;

                if (item == AStarStates.End)
                    this.end = node;
            }
        }

        // something's wrong
        if (!this.canContinue())
            return;

        this.open.push(this.start)
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
                return new AStarResult(this.toggleWall(x, y), stage, this.canContinue(), );
            }

            case AStarStages.Start: {
                return new AStarResult(this.clearAndSet(x, y, AStarStates.Start), AStarStages.End, this.canContinue(), );
            }

            case AStarStages.End: {
                return new AStarResult(this.clearAndSet(x, y, AStarStates.End), AStarStages.Wall, this.canContinue(), );
            }
        }
    }

    private clearAndSet(x: number, y: number, state: AStarStates) {
        // find old start
        this.state.state = this.state.state.map((col) => col.map(item => item == state ? AStarStates.Node : item));
        this.setElementState(x, y, state);
        
        if(state === AStarStates.Start)
            this.start = this.all[x][y];

        if(state === AStarStates.End)
            this.end = this.all[x][y];

        return this.state.new();
    }

    private toggleWall(x: number, y: number) {
        if (this.canChange(this.getElementState(x, y)))
            this.setElementState(x, y, this.getElementState(x, y) === AStarStates.Node ? AStarStates.Wall : AStarStates.Node);

        return this.state.new();
    }

    step() {

    }
}