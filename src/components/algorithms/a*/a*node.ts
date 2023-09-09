export class AStarNode {
    bestRoute?: AStarNode;
    cachedHCost?: number;

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