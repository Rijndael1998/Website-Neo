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

export class LinkedPoint<T> extends Point<T> {
    grid: Grid<LinkedPoint<T>>;

    constructor(x: number, y: number, val: T, grid: Grid<LinkedPoint<T>>) {
        super(x, y, val);
        this.grid = grid;
    }

    lookAround() {
        // find elements around
        return PointDirections
            .map(v => this.look(v))
            .filter(v => v != undefined);
    }

    look(direction: Vector) {
        const [x, y] = direction.add(this.pos).toArray();
        if (check_coords(this.grid, x, y))
            return;

        return this.grid[y][x];
    }
}