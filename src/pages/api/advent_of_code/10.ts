import { AdventOfCodeSolutionFunction } from "./solutions";
import { Grid } from "./utils/grids";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { makeGridFromMultilineString, SumArray } from "./utils/utils";

class TrailPoint extends LinkedPoint<number, TrailPoint> {
    constructor(x: number, y: number, item: number, grid: Grid<TrailPoint>) {
        super(x, y, item, grid);
    }

    lookAroundValid(): Array<TrailPoint> {
        return this.lookAround().filter(v => v.item == this.item + 1);
    }

    findAllValidPeaks(): Array<TrailPoint> {
        if (this.item == 9)
            return [this];

        // filter for distinct references (this theoretically saves time)
        return [...(new Set(this.lookAroundValid().flatMap(v => v.findAllValidPeaks())))];
    }

    findAllValidPeaksWithReps(): Array<TrailPoint> {
        if (this.item == 9)
            return [this];

        // don't filter
        return this.lookAroundValid().flatMap(v => v.findAllValidPeaksWithReps());
    }
}

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    const map: Grid<TrailPoint> =
        makeGridFromMultilineString(input)
            .map((row) => row.map((item) => item != "." ? Number(item) : -1))
            .map((row, y) => row.map((item, x) => new TrailPoint(x, y, item, undefined!)));

    map.flat().forEach((v) => v.grid = map); // promise is a promise

    const startNodes: Array<TrailPoint> = map.flat().filter(v => v.item == 0);

    const part_1 = SumArray(startNodes.map(v => v.findAllValidPeaks().length));
    const part_2 = SumArray(startNodes.map(v => v.findAllValidPeaksWithReps().length));

    return {
        part_1, // 557
        part_2, // 1062
    }
}

