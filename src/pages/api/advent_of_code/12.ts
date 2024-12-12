import { AdventOfCodeSolutionFunction } from "./solutions";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { makeGridFromMultilineString } from "./utils/utils";

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
}

class PlotPoint extends LinkedPoint<string, PlotPoint> { 
    checked = false;

    getPerimeter() {
        return 4 - super.lookAround().filter((v) => v.item == this.item).length;
    }
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

    const part_1 = plots.reduce<number>((prev, curr) => prev + curr.getArea() * curr.getPerimeter(), 0);

    return {
        part_1,
        part_2: "",
    }
}

