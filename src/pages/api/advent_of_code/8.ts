import { AdventOfCodeSolutionFunction } from "./solutions";
import { check_coords } from "./utils/stringGrids";
import { MakeEmpty2DArray, makeGridFromMultilineString } from "./utils/utils";

type v2 = [x: number, y: number];

const Sub = (x1: number, y1: number, x2: number, y2: number): v2 => {
    return [x1 - x2, y1 - y2];
}

const Add = (x1: number, y1: number, x2: number, y2: number): v2 => {
    return [x1 + x2, y1 + y2];
}

export const solution_8: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input);
    const nodes = new Map<string, Array<v2>>();
    const nodeKinds: Array<string> = [];
    const singleAntinodeLocations = MakeEmpty2DArray(grid.length, grid[0].length);
    const resonantAntinodeLocations = MakeEmpty2DArray(grid.length, grid[0].length);

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

                if(!check_coords(singleAntinodeLocations, x1, y1)) singleAntinodeLocations[y1][x1]++;
                if(!check_coords(singleAntinodeLocations, x2, y2)) singleAntinodeLocations[y2][x2]++;

                // find all resonances
                // starting
                resonantAntinodeLocations[first[1]][first[0]]++;
                resonantAntinodeLocations[second[1]][second[0]]++;

                // go forward
                let newFirst = [x1, y1] as v2;
                while(!check_coords(resonantAntinodeLocations, ...newFirst)) {
                    let [x, y] = newFirst;
                    resonantAntinodeLocations[y][x]++;
                    newFirst = Add(...newFirst, ...diff);
                }

                // go back
                newFirst = [x2, y2] as v2;
                while(!check_coords(resonantAntinodeLocations, ...newFirst)) {
                    let [x, y] = newFirst;
                    resonantAntinodeLocations[y][x]++;
                    newFirst = Sub(...newFirst, ...diff);
                }
            }
        }
    });

    const antinodeCount = (prev: number, curr: Array<number>) => prev + curr.reduce((prev, curr) => prev + (curr > 0 ? 1 : 0), 0);
    const part_1 = singleAntinodeLocations.reduce<number>(antinodeCount, 0);
    const part_2 = resonantAntinodeLocations.reduce<number>(antinodeCount, 0);

    return {
        part_1, //390
        part_2, //1246
    }
}

