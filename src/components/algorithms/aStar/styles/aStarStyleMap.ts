import { AStarStates } from "../utils/aStarStates.enum";
import styles from "./aStarStyleMap.module.scss";

export const AStarStyleMap: Map<AStarStates, string> = new Map();
AStarStyleMap.set(AStarStates.Node, styles.Node);
AStarStyleMap.set(AStarStates.Wall, styles.Wall);
AStarStyleMap.set(AStarStates.Start, styles.Start);
AStarStyleMap.set(AStarStates.End, styles.End);
AStarStyleMap.set(AStarStates.Path, styles.Path);
AStarStyleMap.set(AStarStates.Explored, styles.Explored);
AStarStyleMap.set(AStarStates.Removed, styles.Removed);
AStarStyleMap.set(AStarStates.d0, styles.d0);
AStarStyleMap.set(AStarStates.d1, styles.d1);
AStarStyleMap.set(AStarStates.d2, styles.d2);
AStarStyleMap.set(AStarStates.d3, styles.d3);