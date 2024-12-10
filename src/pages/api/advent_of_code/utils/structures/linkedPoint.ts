import { Grid } from "../grids";
import { Point } from "./point";

export class LinkedPoint extends Point<number> {
    next: Array<LinkedPoint> = [];
    grid: Grid<LinkedPoint>;

    constructor(x: number, y: number, val: number, grid: Grid<LinkedPoint>) {
        super(x, y, val);
        this.grid = grid;
    }

    lookAround() {
        if(this.item == 9)
            return 1;

        const find = this.item + 1;
    }

    
}