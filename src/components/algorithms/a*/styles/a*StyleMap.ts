import { AStarStates } from "../utils/a*states.enum";
import styles from "./a*StyleMap.module.scss";

export const AStarStyleMap: Map<AStarStates, string> = new Map();
AStarStyleMap.set(AStarStates.Node, styles.Node);
AStarStyleMap.set(AStarStates.Wall, styles.Wall);
AStarStyleMap.set(AStarStates.Start, styles.Start);
AStarStyleMap.set(AStarStates.End, styles.End);
AStarStyleMap.set(AStarStates.Path, styles.Path);
AStarStyleMap.set(AStarStates.Explored, styles.Explored);
AStarStyleMap.set(AStarStates.Removed, styles.Removed);