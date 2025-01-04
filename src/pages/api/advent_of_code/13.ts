import { AdventOfCodeSolutionFunction } from "./solutions";
import { Vector } from "./utils/structures/vector";
import { Memo1D } from "./utils/utils";

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
const CALIBRATION_VECTOR = new Vector(CALIBRATION, CALIBRATION)

class Machine {
    constructor(public buttonA: Vector, public buttonB: Vector, public prize: Vector) { }

    toCalibrated() {
        return new Machine(this.buttonA.duplicate(), this.buttonB.duplicate(), CALIBRATION_VECTOR.add(this.prize));
    }
}

const solve = (machine: Machine, bUpper?: number, bLower?: number) => {
    const target = machine.prize;

    // initial values
    bUpper ??= target.div(machine.buttonB).smaller();
    bLower ??= 0;

    const midpoint = Math.floor((bUpper - bLower) / 2);



    return Number.POSITIVE_INFINITY;
}

const reduceSum = (prev: number, curr: number) => prev + (curr == Number.POSITIVE_INFINITY ? 0 : curr);

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [a, b, target] = v.split("\n").map(getXY);
        const machine = new Machine(a, b, target);
        return machine;
    });

    const part_1 = machines.map(m => solve(m, MAX_PRESSES)).reduce(reduceSum);
    const part_2 = 0; // machines.map(m => solve(m.toCalibrated(), Number.POSITIVE_INFINITY)).reduce(reduceSum);

    return {
        // 37901
        part_1,
        part_2: ""
    }
}

