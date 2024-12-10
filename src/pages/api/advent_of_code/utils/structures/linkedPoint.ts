import { check_coords, Grid } from "../grids";
import { Point } from "./point";
import { Vector } from "./vector";

export const PointDirections = {
    UP: new Vector(0, -1),
    RIGHT: new Vector(1, 0),
    DOWN: new Vector(0, 1),
    LEFT: new Vector(-1, 0),
}

export class LinkedPoint extends Point<number> {
    next: Array<LinkedPoint> = [];
    grid: Grid<LinkedPoint>;

    constructor(x: number, y: number, val: number, grid: Grid<LinkedPoint>) {
        super(x, y, val);
        this.grid = grid;
    }

    lookAround() {
        if (this.item == 9)
            return 1;

        const find = this.item + 1;
        
    }

    look(direction: Vector) {
        const [x, y] = direction.add(this.pos).toArray();
        if (!check_coords(this.grid, x, y))
            return;

        return this.grid[y][x];
    }
}