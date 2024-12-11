import { check_coords, Grid } from "../grids";
import { Point } from "./point";
import { Vector } from "./vector";

export const PointDirectionsVectors = {
    UP: new Vector(0, -1),
    RIGHT: new Vector(1, 0),
    DOWN: new Vector(0, 1),
    LEFT: new Vector(-1, 0),
};

export const PointDirections = [
    PointDirectionsVectors.UP,
    PointDirectionsVectors.RIGHT,
    PointDirectionsVectors.DOWN,
    PointDirectionsVectors.LEFT,
];

export class LinkedPoint extends Point<number> {
    // next: Array<LinkedPoint> = [];
    grid: Grid<LinkedPoint>;

    constructor(x: number, y: number, val: number, grid: Grid<LinkedPoint>) {
        super(x, y, val);
        this.grid = grid;
    }

    lookAround() {
        // find elements around
        return PointDirections
            .map(v => this.look(v))
            .filter(v => v != undefined);
    }

    lookAroundValid() {
        return this.lookAround().filter(v => v.item == this.item + 1);
    }

    findAllValidPeaks(): Array<LinkedPoint> {
        if(this.item == 9)
            return [this];

        // filter for distinct references
        return [...(new Set(this.lookAroundValid().flatMap(v => v.findAllValidPeaks())))];
    }

    look(direction: Vector) {
        const [x, y] = direction.add(this.pos).toArray();
        if (check_coords(this.grid, x, y))
            return;

        return this.grid[y][x];
    }
}