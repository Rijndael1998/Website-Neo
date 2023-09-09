import { AStarStages } from "@/app/fun/a-star/page";
import { GridState } from "../../grid/gridState";
import { AStarStates } from "./a*states.enum";


export class AStarResult {
    constructor(
        public readonly gridState: GridState<AStarStates>,
        public readonly gridStage: AStarStages | undefined,
        public readonly canContinue: boolean,
        public readonly canContinueReason: string | undefined,
    ) { }
}