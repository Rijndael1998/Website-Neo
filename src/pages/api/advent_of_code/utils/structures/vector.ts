export class Vector {
    constructor(public x: number, public y: number) { }

    distance(b: Vector) {
        return Math.hypot(this.x - b.x, this.y - b.y);
    }

    manhattanDistance(b: Vector) {
        return Math.abs(this.x - b.x) + Math.abs(this.y - b.y);
    }

    add(b: Vector) {
        return new Vector(this.x + b.x, this.y + b.y);
    }

    mul(b: Vector) {
        return new Vector(this.x * b.x, this.y * b.y);
    }

    toArray(): [x: number, y: number] {
        return [this.x, this.y];
    }
}