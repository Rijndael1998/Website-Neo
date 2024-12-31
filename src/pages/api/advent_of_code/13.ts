import { AdventOfCodeSolutionFunction } from "./solutions";
import { Vector } from "./utils/structures/vector";

const find = /X.(\d+), Y.(\d+)/;
const getXY = (input: string) => {
    const res = input.match(find);
    const x = Number.parseFloat(res![1]);
    const y = Number.parseFloat(res![2]);
    return new Vector(x, y);
}

const MAX_PRESSES = 100;
const A_COST = 3;
const B_COST = 1;
const CALIBRATION = 10000000000000;

class Machine {
    constructor(public buttonA: Vector, public buttonB: Vector, public prize: Vector) {}

    toCalibrated() {
        const newPrize = new Vector(CALIBRATION, CALIBRATION).add(this.prize);
        return new Machine(this.buttonA.duplicate(), this.buttonB.duplicate(), newPrize);
    }
}

const solve = (machine: Machine, limit: number) => {
    let cheapestSolution: number = Number.POSITIVE_INFINITY;



    return cheapestSolution;
}

const reduceSum = (prev: number, curr: number) => prev + (curr == Number.POSITIVE_INFINITY ? 0 : curr);

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [a, b, target] = v.split("\n").map(getXY);
        const machine = new Machine(a, b, target);
        return machine;
    });

    const part_1 = machines.map(m => solve(m, MAX_PRESSES)).reduce(reduceSum);
    const part_2 = machines.map(m => solve(m.toCalibrated(), Number.POSITIVE_INFINITY)).reduce(reduceSum);

    return {
        // 37901
        part_1,
        part_2: ""
    }
}

