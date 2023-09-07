import { GridState } from "../grid/gridState";
import styles from "./a*.module.scss";

export enum AStarStates {
    Node,
    Wall,
    Start,
    End,
}

export const AStarStyleMap: Map<AStarStates,string> = new Map();
AStarStyleMap.set(AStarStates.Node, styles.Node);
AStarStyleMap.set(AStarStates.Wall, styles.Wall);
AStarStyleMap.set(AStarStates.Start, styles.Start);
AStarStyleMap.set(AStarStates.End, styles.End);

export default class AStar {
    constructor(public state: GridState<AStarStates>) {
    }

    static step() {}
}