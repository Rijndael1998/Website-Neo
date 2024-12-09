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

    console.log(pretty_print(disk));

    // start moving elements on the disk
    let start = 0
    let end = disk.length - 1;
    while(start < end) {
        if(disk[start] != -1) {
            start++;
            continue;
        }

        if(disk[end] == -1) {
            end--;
            continue;
        }

        // swap the values
        [disk[start], disk[end]] = [disk[end], disk[start]];
        // console.log(pretty_print(disk), start, end);

        start++;
        end--;
    }

    console.log(pretty_print(disk));

    // calculate the checksum
    const part_1 = disk.filter((v) => v != -1).reduce<number>((prev, curr, index) => prev + curr * index, 0);

    return {
        part_1,
        part_2:  "Test: " + input,
    }
}

