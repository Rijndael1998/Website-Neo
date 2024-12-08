import { AdventOfCodeSolutionFunction } from "./solutions";
import { check_coords } from "./utils/grids";
import { MakeEmpty2DArray, MakeEmptyArray, makeGridFromMultilineString } from "./utils/utils";

type v2 = [x: number, y: number];

const Sub = (x1: number, y1: number, x2: number, y2: number): v2 => {
    return [x1 - x2, y1 - y2];
}

const Add = (x1: number, y1: number, x2: number, y2: number): v2 => {
    return [x1 + x2, y1 + y2];
}

export const solution_8: AdventOfCodeSolutionFunction = (input) => {
    let part_2 = 0;

    const grid = makeGridFromMultilineString(input);
    const nodes = new Map<string, Array<v2>>();
    const nodeKinds: Array<string> = [];
    const antinodeLocations = MakeEmpty2DArray(grid.length, grid[0].length);

    // find all the nodes
    grid.forEach((row, y) => row.forEach((item, x) => {
        if (item == ".")
            return;

        if (nodes.has(item))
            nodes.get(item)!.push([x, y]);

        else {
            nodes.set(item, [[x, y]]);
            nodeKinds.push(item);
        }
    }));

    console.log(nodes);

    nodeKinds.forEach((nodeKind) => {
        const nodesOfKind = nodes.get(nodeKind)!;
        for (let bunn = 0; bunn < nodesOfKind.length; bunn++) {
            const first = nodesOfKind[bunn];
            for (let tort = bunn + 1; tort < nodesOfKind.length; tort++) {
                // find antinode
                const second = nodesOfKind[tort];
                const diff = Sub(...first, ...second);
                const [x1, y1] = Add(...first, ...diff);
                const [x2, y2] = Sub(...second, ...diff);

                console.log([x1, y1], [x2, y2])

                if(!check_coords(antinodeLocations, x1, y1)) antinodeLocations[y1][x1]++;
                if(!check_coords(antinodeLocations, x2, y2)) antinodeLocations[x2][y2]++;
            }
        }
    });

    console.log(antinodeLocations);

    const part_1 = antinodeLocations.reduce<number>((prev, curr) => prev + curr.reduce((prev, curr) => prev + (curr > 0 ? 1 : 0), 0), 0)

    return {
        part_1,
        part_2,
    }
}

