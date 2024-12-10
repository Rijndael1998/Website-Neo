import { Vector } from "./vector";

export class Point<T> {
    pos: Vector;
    item: T;

    constructor(x: Vector["x"], y: Vector["y"], item: T) {
        this.pos = new Vector(x, y);
        this.item = item;
    }
}