export class V2 {
    public x: number;
    public y: number;

    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    new() {
        return new V2(this.x, this.y);
    }

    inv() {
        return this.mul(-1);
    }

    add(v: V2) {
        this.x += v.x;
        this.y += v.y;
        return this.new();
    }

    sub(v: V2) {
        this.x -= v.x;
        this.y -= v.y;
        return this.new();
    }

    mul(n: number) {
        this.x *= n;
        this.y *= n;
        return this.new();
    }

    div(n: number) {
        this.x /= n;
        this.y /= n;
        return this.new();
    }

    dis(v: V2) {
        const diff = v.new().sub(this);
        return Math.hypot(diff.x, diff.y);
    }

    toString() {
        return `${this.x}, ${this.y}`;
    }

    pow(exp: number) {
        this.x **= exp;
        this.y **= exp;
        return this.new();
    } 
}