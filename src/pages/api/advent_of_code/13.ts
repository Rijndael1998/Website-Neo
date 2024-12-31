import { AdventOfCodeSolutionFunction } from "./solutions";
import { Vector } from "./utils/structures/vector";

const find = /X.(\d+), Y.(\d+)/;
const getXY = (input: string) => {
    const res = input.match(find);
    const x = Number.parseFloat(res![1]);
    const y = Number.parseFloat(res![2]);
    return new Vector(x, y);
}

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [buttonA, buttonB, Prize] = v.split("\n").map(getXY)
        return { buttonA, buttonB, Prize };
    });

    console.log(machines);

    return {
        part_1: "",
        part_2: ""
    }
}

