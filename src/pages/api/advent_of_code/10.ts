import { AdventOfCodeSolutionFunction } from "./solutions";
import { DirectDirections, Grid, search_direction } from "./utils/grids";
import { Duplicate2DArray, makeGridFromMultilineString, prettyPrint3d } from "./utils/utils";

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const map: Grid<number> = makeGridFromMultilineString(input).map(v => v.map(v => v != "." ? Number(v) : -1));
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
        console.log("searching for", searchItem);

        for (let searchNodeIndex = 0; searchNodeIndex < searchNodes.length; searchNodeIndex++) {
            // location of search
            const [x, y] = searchNodes[searchNodeIndex];
            // console.log(searchItem, x, y);

            const mapView = Duplicate2DArray(map);
            mapView[y][x] = -2;
            console.log(x, y, searchItem, prettyPrint3d(mapView));

            // find new nodes
            DirectDirections.forEach((direction) => search_direction(map, x, y, direction, (v, itemX, itemY) => {
                // we don't need to keep searching in any direction more than once
                if(x == itemX && y == itemY)
                    return true;

                if(v == searchItem)
                    result.push([itemX, itemY]);

                return false;
            }));
            
        }

        searchNodes = [...result];
    }

    console.log(searchNodes);

    return {
        part_1: searchNodes.length,
        part_2,
    }
}

