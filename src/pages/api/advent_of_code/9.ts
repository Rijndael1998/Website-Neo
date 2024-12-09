import { AdventOfCodeSolutionFunction } from "./solutions";
import { MakeEmptyGenericArray } from "./utils/utils";

const pretty_print = (disk: Array<number>) => disk.reduce<string>((prev, curr) => prev + (curr == -1 ? "." : curr), "")

export const solution_9: AdventOfCodeSolutionFunction = (input) => {
    let isFile = false;
    let id = 0;

    // make the disk
    const disk = input.split("").flatMap((v) => {
        isFile = !isFile;
        const count = Number(v);

        if (isFile) {
            id++;
            return MakeEmptyGenericArray(count, () => id - 1);
        }

        return MakeEmptyGenericArray(count, () => -1);
    });

    // make a copy of the disk
    const fragmentedDisk = [...disk];

    // start moving elements on the disk
    let start = 0
    let end = fragmentedDisk.length - 1;
    while(start < end) {
        if(fragmentedDisk[start] != -1) {
            start++;
            continue;
        }

        if(fragmentedDisk[end] == -1) {
            end--;
            continue;
        }

        // swap the values
        [fragmentedDisk[start], fragmentedDisk[end]] = [fragmentedDisk[end], fragmentedDisk[start]];

        start++;
        end--;
    }

    

    // calculate the checksums
    const part_1 = fragmentedDisk.filter((v) => v != -1).reduce<number>((prev, curr, index) => prev + curr * index, 0);

    return {
        part_1,
        part_2: -1,
    }
}

