import { GridState } from "../../grid/gridState";
import { AStarStages } from "./aStarStages.enum";
import { AStarStates } from "./aStarStates.enum";


export class AStarResult {
    constructor(
        public readonly gridState: GridState<AStarStates>,
        public readonly gridStage: AStarStages | undefined,
        public readonly canContinue: boolean,
        public readonly canContinueReason: string | undefined,
    ) { }
}