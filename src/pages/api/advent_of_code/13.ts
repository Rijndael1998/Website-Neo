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

type solution = {
    aPresses: number,
    bPresses: number,
} | undefined;

const solve = (machine: Machine, pressLimit?: number, bUpper?: number, bLower: number = 0, ): solution => {
    const target = machine.prize;

    // initial values
    pressLimit ??= Number.POSITIVE_INFINITY;
    bUpper ??= target.div(machine.buttonB).smaller();

    bUpper = Math.min(pressLimit, bUpper);

    if(bUpper < bLower)
        return;

    const midpoint = Math.floor((bUpper - bLower) / 2); // midpoint

    // check the upmost bValue
    const bPressDistance = machine.buttonB.scale(bUpper);
    const deltaDistance = machine.prize.sub(bPressDistance);
    const aPresses = Math.min(pressLimit, deltaDistance.div(machine.buttonA).smaller());
    const countedAPresses = machine.buttonA.scale(aPresses);
    const distanceNotCovered = deltaDistance.sub(countedAPresses);
    const foundSolution = distanceNotCovered.x + distanceNotCovered.y == 0;

    console.log("\n\n\nmachine", machine);
    console.log(bUpper, bLower, midpoint);
    console.log(bPressDistance, deltaDistance)
    console.log(aPresses, countedAPresses, distanceNotCovered, foundSolution);

    let bestSolution: solution;

    // exit conditions
    if(foundSolution)
        bestSolution = {
            aPresses,
            bPresses: midpoint,
        };

    

}

const reduceSum = (prev: number, curr: number) => prev + (curr == Number.POSITIVE_INFINITY ? 0 : curr);

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [a, b, target] = v.split("\n").map(getXY);
        const machine = new Machine(a, b, target);
        return machine;
    });

    const part_1 = machines.map(m => solve(m, MAX_PRESSES));
    const part_2 = 0; // machines.map(m => solve(m.toCalibrated(), Number.POSITIVE_INFINITY)).reduce(reduceSum);

    return {
        // 37901
        part_1: "",
        part_2: ""
    }
}

