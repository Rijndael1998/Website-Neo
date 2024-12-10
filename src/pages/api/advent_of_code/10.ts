import { AdventOfCodeSolutionFunction } from "./solutions";
import { makeGridFromMultilineString, prettyPrint3d } from "./utils/utils";

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const map = makeGridFromMultilineString(input).map(v => v.map(v => Number(v)));
    console.log(prettyPrint3d(map));

    let searchNodes: Array<[x: number, y: number]> = [];

    // find the starts
    map.forEach((row, y) => row.forEach((v, x) => {
        if (v == 0)
            searchNodes.push([x, y]);
    }));

    for(let searchItem = 1; searchItem < 10; searchItem++) {
        
    }

    console.log(searchNodes);

    return {
        part_1,
        part_2,
    }
}

