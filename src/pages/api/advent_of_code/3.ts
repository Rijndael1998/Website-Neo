import { AdventOfCodeSolutionFunction } from "./solutions";

export const solution_3: AdventOfCodeSolutionFunction = (input) => {
    const mul_regex = /mul\((\d+),(\d+)\)/g; // mul()
    const do_regex = /do\(\)/g;              // do()
    const do_not_regex = /don\'t\(\)/g;      // don't()

    const doLength = "do()".length;
    const doNotLength = "don't()".length;

    let input_copy = "" + input;
    let part_1 = 0;
    let part_2 = 0;
    let isEnabled = true;
    while (true) {
        const nextMul = input_copy.search(mul_regex);
        const nextDo = input_copy.search(do_regex);
        const nextDoNot = input_copy.search(do_not_regex);
        let pointer = Number.POSITIVE_INFINITY;

        // find the smallest while ignoring items that are not found
        if (nextMul != -1)
            pointer = Math.min(pointer, nextMul);

        if (nextDo != -1)
            pointer = Math.min(pointer, nextDo);

        if (nextDoNot != -1)
            pointer = Math.min(pointer, nextDoNot);

        // no matches
        if (pointer == Number.POSITIVE_INFINITY)
            break

        console.log(pointer, nextMul, nextDo, nextDoNot);

        // handle found command
        switch (pointer) {
            case nextDo: {
                pointer += doLength;
                isEnabled = true;
                break;
            }

            case nextDoNot: {
                pointer += doNotLength;
                isEnabled = false;
                break;
            }

            case nextMul: {
                const res = input_copy.matchAll(mul_regex).next().value;
                if (!res) {
                    // this should never happen but here's an escape hatch
                    throw Error("regex result is undefined or null");
                }

                // add the length of the whole capture to the pointer
                pointer += res[0].length;
                
                // multiply capture groups
                const comp = Number(res[1]) * Number(res[2]);

                // part 1 sum
                part_1 += comp;

                // part 2 sum
                if(isEnabled)
                    part_2 += comp;

                break;
            }
        }

        // shorten the start of the string
        input_copy = input_copy.slice(pointer);
    }

    return {
        part_1,
        part_2,
    };
}