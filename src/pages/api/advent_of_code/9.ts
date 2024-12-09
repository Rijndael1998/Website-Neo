import { AdventOfCodeSolutionFunction } from "./solutions";
import { MakeEmptyGenericArray } from "./utils/utils";

const pretty_print = (disk: Array<number>) => disk.reduce<string>((prev, curr) => prev + (curr == -1 ? "." : curr), "")

export const solution_9: AdventOfCodeSolutionFunction = (input) => {
    let isFile = false;
    let id = 0;
    const disk = input.split("").flatMap((v) => {
        isFile = !isFile;
        const count = Number(v);

        if (isFile) {
            id++;
            return MakeEmptyGenericArray(count, () => id - 1);
        }

        return MakeEmptyGenericArray(count, () => -1);
    });

    // start moving elements on the disk
    

    console.log(pretty_print(disk));

    const res = "Test: " + input;
    return {
        part_1: res,
        part_2: res,
    }
}

