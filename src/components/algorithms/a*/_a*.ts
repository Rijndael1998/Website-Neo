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
        if(!this.bestRoute) 
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
    }

    generate() {
        for(let y = 0; y < this.state.state.length; y++) {
            this.all.push([]);

            for(let x = 0; x < this.state.state.length; x++) {
                const item: AStarStates = this.state.state[x][y];
                const node: AStarNode = new AStarNode(x, y);

                this.all[y].push(node);

                if(item == AStarStates.Start)
                    this.start = node;

                if(item == AStarStates.End)
                    this.end = node;
            }
        }

        // something's wrong
        if(this.canContinue() === undefined)
            return;
        
        this.open.push(this.start)
    }

    canContinue() {
        if(this.start === undefined)
            return "Start is not defined";

        if(this.end === undefined)
            return "End is not defined";

        if(this.start == this.end)
            return "The start can't be the same as the end";
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

    toggleWall(x: number, y: number) {
        if(this.canChange(this.getElementState(x, y)))
            this.setElementState(x, y, this.getElementState(x, y) === AStarStates.Node ? AStarStates.Wall : AStarStates.Node);

        return this.state.new();
    }

    step() {

    }
}