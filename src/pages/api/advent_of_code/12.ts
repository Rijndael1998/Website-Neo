import { AdventOfCodeSolutionFunction } from "./solutions";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { Point } from "./utils/structures/point";
import { makeGridFromMultilineString } from "./utils/utils";

class Plot {
    points: Array<Point<string>> = [];
    kind: string;

    constructor(kind: string) {
        this.kind = kind;
    }

    addPoint(point: PlotPoint) {
        // skip points that are not the right kind
        if(point.item !== this.kind)
            return;

        this.points.push(point);
        point.item = "."; // deactivate point

        // flood fill
        point.lookAround().forEach(v => this.addPoint(v));
    }

    getArea() {
        return this.points.length;
    }

    
}

class PlotPoint extends LinkedPoint<string, PlotPoint> {

}

export const solution_12: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input).map((v, y) => v.map((v, x) => new PlotPoint(x, y, v, undefined!)));
    const flatGrid = grid.flat();
    flatGrid.map(v => v.grid = grid);

    const plots: Array<Plot> = [];
    flatGrid.forEach(v => {
        // skip deactivated item
        if(v.item == ".")
            return;

        const plot = new Plot(v.item);
        plot.addPoint(v);
        plots.push(plot);
    });


    console.log(plots);
    
    const res = "Test: " + input;
    return {
        part_1: res,
        part_2: res,
    }
}

