import { AdventOfCodeSolutionFunction } from "./solutions";
import { MakeEmptyGenericArray } from "./utils/utils";

const pretty_print = (disk: Array<number>) => disk.reduce<string>((prev, curr) => prev + (curr == -1 ? "." : curr), "");
const checksum = (disk: Array<number>) => disk.reduce<number>((prev, curr, index) => prev + (curr == -1 ? 0 : curr * index), 0);

const findSlice = (disk: Array<number>, id: number, startFrom?: number) => {
    const sectionStart = disk.indexOf(id, startFrom);

    if (sectionStart == -1)
        return [-1, -1];

    let sectionEnd = sectionStart;

    while (disk.length > ++sectionEnd && disk[sectionEnd] == id);

    return [sectionStart, sectionEnd];
}

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
    while (start < end) {
        if (fragmentedDisk[start] != -1) {
            start++;
            continue;
        }

        if (fragmentedDisk[end] == -1) {
            end--;
            continue;
        }

        // swap the values
        [fragmentedDisk[start], fragmentedDisk[end]] = [fragmentedDisk[end], fragmentedDisk[start]];

        start++;
        end--;
    }


    main: while (id-- > 0) {
        // find the section that has the file
        const [sectionStart, sectionEnd] = findSlice(disk, id); // this will never return -1
        const sectionLength = sectionEnd - sectionStart;

        // find any section that can fit the file
        let freeStart;
        let freeEnd = 0;
        let freeLength;
        do {
            [freeStart, freeEnd] = findSlice(disk, -1, freeEnd);

            // can't find any free spaces or too far right
            if (freeStart == -1 || freeStart > sectionStart)
                continue main;

            freeLength = freeEnd - freeStart;

        } while (freeLength < sectionLength);

        // switch places
        let i = 0;
        while(sectionStart + i < sectionEnd) {
            disk[freeStart + i] = id;
            disk[sectionStart + i] = -1;

            i++;
        }
    }


    // calculate the checksums
    return {
        part_1: checksum(fragmentedDisk),
        part_2: checksum(disk),
    }
}

