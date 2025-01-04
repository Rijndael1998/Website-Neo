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

    sub(b: Vector) {
        return new Vector(this.x - b.x, this.y - b.y);
    }

    mul(b: Vector) {
        return new Vector(this.x * b.x, this.y * b.y);
    }

    div(b: Vector) {
        return new Vector(this.x / b.x, this.y / b.y);
    }

    mod(b: Vector) {
        return new Vector(this.x % b.x, this.y % b.y);
    }

    scale(n: number) {
        return this.mul(new Vector(n, n))
    }

    rotateRight() {
        return new Vector(this.y, -this.x);
    }

    rotateLeft() {
        // todo: fix this hack
        return this.rotateRight().rotateRight().rotateRight();
    }

    compare(b: Vector) {
        return this.x == b.x && this.y == b.y;
    }

    duplicate() {
        return new Vector(...this.toArray());
    }

    toArray(): [x: number, y: number] {
        return [this.x, this.y];
    }

    smaller() {
        return Math.min(...this.toArray())
    }

    bigger() {
        return Math.max(...this.toArray())
    }
}