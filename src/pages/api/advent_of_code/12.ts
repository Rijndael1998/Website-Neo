import { AdventOfCodeSolutionFunction } from "./solutions";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { Vector } from "./utils/structures/vector";
import { MakeEmpty2DArray, makeGridFromMultilineString } from "./utils/utils";

class Plot {
    points: Array<PlotPoint> = [];
    kind: string;

    constructor(kind: string) {
        this.kind = kind;
    }

    addPoint(point: PlotPoint) {
        // skip points that are not the right kind
        if (point.checked || point.item !== this.kind)
            return;

        this.points.push(point);
        point.checked = true; // deactivate point

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
}

class PlotPoint extends LinkedPoint<string, PlotPoint> { 
    checked = false;

    getPerimeter() {
        return 4 - super.lookAround().filter((v) => v.item == this.item).length;
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
        grid[v.y - minY][v.x - minX] = "*";
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

        const plot = new Plot(v.item);
        plot.addPoint(v);
        plots.push(plot);
    });

    plots.forEach(plot => console.log(plot.kind, prettyPrint(plot.getPointsOnEdges().map(v => v.pos))));

    const part_1 = plots.reduce<number>((prev, curr) => prev + curr.getArea() * curr.getPerimeter(), 0);

    return {
        part_1,
        part_2: "",
    }
}

