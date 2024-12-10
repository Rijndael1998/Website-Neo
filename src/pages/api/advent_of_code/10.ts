import { AdventOfCodeSolutionFunction } from "./solutions";
import { DirectDirections, Grid, search_direction } from "./utils/grids";
import { makeGridFromMultilineString, prettyPrint3d } from "./utils/utils";

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const map: Grid<number> = makeGridFromMultilineString(input).map(v => v.map(v => Number(v)));
    console.log(prettyPrint3d(map));

    type XYArray = Array<[x: number, y: number]>;
    let searchNodes: XYArray = [];

    // find the starts
    map.forEach((row, y) => row.forEach((v, x) => {
        if (v == 0)
            searchNodes.push([x, y]);
    }));

    console.log(searchNodes);

    for(let searchItem = 1; searchItem < 10; searchItem++) {
        const result: XYArray = [];

        for (let searchNodeIndex = 0; searchNodeIndex < searchNodes.length; searchNodeIndex++) {
            // location of search
            const [x, y] = searchNodes[searchNodeIndex];
            console.log(searchItem, x, y);

            // find new nodes
            DirectDirections.forEach((direction) => search_direction(map, x, y, direction, (v, itemX, itemY) => {
                console.log(v)
                if(v == searchItem)
                    result.push([itemX, itemY]);

                // we don't need to keep searching in any direction more than once
                return x == itemX && y == itemY;
            }));
            
        }

        console.log(searchNodes);

        searchNodes = result;
    }

    return {
        part_1: searchNodes.length,
        part_2,
    }
}

