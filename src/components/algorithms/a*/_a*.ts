import { GridState } from "../grid/gridState";

export enum AStarStates {
    Node,
    Wall,
    Start,
    End,
}

export default class AStar {
    constructor(public state: GridState<AStarStates>) {
    }

    static step() {}
}