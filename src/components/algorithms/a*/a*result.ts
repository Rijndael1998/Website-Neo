import { AStarStages } from "@/app/fun/a-star/page";
import { GridState } from "../grid/gridState";
import { AStarStates } from "./_a*";

export class AStarResult {
    constructor(
        public readonly gridState: GridState<AStarStates>,
        public readonly gridStage: AStarStages,
        public readonly canContinue: boolean,
    ) { }
}