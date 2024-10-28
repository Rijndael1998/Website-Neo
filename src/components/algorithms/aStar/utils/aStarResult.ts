import { CSSProperties } from "react";
import { GridState } from "../../grid/gridState";
import { AStarStages } from "./aStarStages.enum";
import { AStarStates } from "./aStarStates.enum";
import { CanContinueReason } from "../_aStar";

export type CanContinueReasonType = [reason: CanContinueReason, distance?: number] | undefined;

export class AStarResult {
    constructor(
        public readonly gridState: GridState<AStarStates>,
        public readonly gridStage: AStarStages | undefined,
        public readonly canContinue: boolean,
        public readonly canContinueReason: CanContinueReasonType,
        public readonly gridExtraStyle: Array<Array<CSSProperties>>,
    ) { }
}