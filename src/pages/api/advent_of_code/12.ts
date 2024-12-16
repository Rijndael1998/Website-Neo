import { AdventOfCodeSolutionFunction } from "./solutions";
import { LinkedPoint, PointDirections } from "./utils/structures/linkedPoint";
import { Vector } from "./utils/structures/vector";
import { MakeEmpty2DArray, MakeEmptyArray, makeGridFromMultilineString } from "./utils/utils";

class Plot {
    points: Array<PlotPoint> = [];
    grid: Array<Array<PlotPoint>>;
    kind: string;

    minX = Number.POSITIVE_INFINITY;
    minY = Number.POSITIVE_INFINITY;
    maxX = Number.NEGATIVE_INFINITY;
    maxY = Number.NEGATIVE_INFINITY;

    pointsByNormal?: Map<Vector, Array<PlotPoint>>;

    constructor(kind: string, grid: Array<Array<PlotPoint>>) {
        this.kind = kind;
        this.grid = grid;
    }

    addPoint(point: PlotPoint) {
        // skip points that are not the right kind
        if (point.checked || point.item !== this.kind)
            return;

        this.points.push(point);
        point.checked = true; // deactivate point

        this.maxX = Math.max(point.pos.x, this.maxX);
        this.maxY = Math.max(point.pos.y, this.maxY);
        this.minX = Math.min(point.pos.x, this.minX);
        this.minY = Math.min(point.pos.y, this.minY);

        // flood fill
        point.lookAround().forEach(v => this.addPoint(v));
    }

    getArea() {
        return this.points.length;
    }

    getPerimeter() {
        return this.points.reduce<number>((prev, curr) => prev + curr.getPerimeter(), 0);
    }

    getPointsOnEdges() {
        return this.points.filter(v => v.getPerimeter() > 0);
    }

    getLines() {
        let lines = 0;

        const check: Array<[plot: PlotPoint, normal: Vector]> = [];

        this.getPointsOnEdges().forEach((plot) => {
            plot.getNormals().forEach(v => check.push([plot, v]))
        });

        for (let checkIndex = 0; checkIndex < check.length; checkIndex++) {
            lines++;
            const [point, normal] = check[checkIndex];
            // remove every plot
            point.walkAmongNormal(normal).forEach(plot => {
                // remove plot
                for (let findCheckIndex = 0; findCheckIndex < check.length; findCheckIndex++) {
                    if(check[findCheckIndex][0] == plot && check[findCheckIndex][1] == normal) {
                        check.splice(findCheckIndex, 1);
                        break;
                    }
                }
            })
        }

        return lines;
    }
}

class PlotPoint extends LinkedPoint<string, PlotPoint> {
    checked = false;
    private perimeterMemo?: number;

    getPerimeter() {
        if (this.perimeterMemo)
            return this.perimeterMemo;

        this.perimeterMemo = 4 - super.lookAround().filter((v) => v.item == this.item).length;
        return this.perimeterMemo;
    }

    getNormals() {
        return PointDirections.map((v) => {
            const otherPoint = this.look(v);

            if (!otherPoint)
                return v;

            if (otherPoint.item == this.item)
                return undefined;

            return v;
        }).filter((v) => v !== undefined);
    }

    walkAmongNormal(normal: Vector) {
        const left = normal.rotateLeft();
        const right = normal.rotateRight();

        let leftElement = this.look(left);
        let rightElement = this.look(right);
        const line: Array<PlotPoint> = [this];

        while (leftElement && leftElement.item == this.item && leftElement.look(normal)?.item !== this.item) {
            line.push(leftElement);
            leftElement = leftElement.look(left);
        }

        while (rightElement && rightElement.item == this.item && rightElement.look(normal)?.item !== this.item) {
            line.push(rightElement);
            rightElement = rightElement.look(right);
        }

        return line;
    }
}

const prettyPrint = (points: Array<Vector>) => {
    const minX = points.map(v => v.x).reduce((p, c) => Math.min(p, c), Number.POSITIVE_INFINITY);
    const minY = points.map(v => v.y).reduce((p, c) => Math.min(p, c), Number.POSITIVE_INFINITY);
    const maxX = points.map(v => v.x).reduce((p, c) => Math.max(p, c), Number.NEGATIVE_INFINITY);
    const maxY = points.map(v => v.y).reduce((p, c) => Math.max(p, c), Number.NEGATIVE_INFINITY);
    const xL = maxX - minX;
    const yL = maxY - minY;

    const grid = MakeEmpty2DArray(xL + 1, yL + 1).map(r => r.map(_ => " "));

    points.forEach((v) => {
        grid[v.y - minY][v.x - minX] = "█";
    });

    return grid.reduce((prev, curr) => `${prev}\n${curr.reduce((prev, curr) => `${prev}${curr}`, "")}`, "");
}

export const solution_12: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input).map((v, y) => v.map((v, x) => new PlotPoint(x, y, v, undefined!)));
    const flatGrid = grid.flat();
    flatGrid.map(v => v.grid = grid);

    const plots: Array<Plot> = [];
    flatGrid.forEach(v => {
        // skip deactivated item
        if (v.checked)
            return;

        const plot = new Plot(v.item, grid);
        plot.addPoint(v);
        plots.push(plot);
    });

    // console.log(plots[0]);

    plots.filter((_, i) => i == 0).forEach(plot => console.log("\n\n", plot.kind, prettyPrint(plot.points.map(v => v.pos))));

    const part_1 = plots.reduce<number>((prev, curr) => prev + curr.getArea() * curr.getPerimeter(), 0);

    plots[0].points.forEach(testItem => {
        console.log(testItem.item, testItem.pos, testItem.getNormals().reduce<string>((prev, curr) => prev + ` (${curr.x},${curr.y})`, ""));
    });

    return {
        part_1,
        part_2: plots[0].getLines(),
    }
}

