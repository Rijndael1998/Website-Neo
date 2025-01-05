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
    cost: number,
} | undefined;

const solve = (machine: Machine, pressLimit?: number, bUpper?: number, bLower: number = 0,): solution => {
    const target = machine.prize;

    // initial values
    pressLimit ??= Number.POSITIVE_INFINITY;
    bUpper ??= Math.floor(target.div(machine.buttonB).smaller());

    bUpper = Math.min(pressLimit, bUpper);

    if (bUpper < bLower)
        return;

    const midpoint = Math.floor((bUpper + bLower) / 2); // midpoint

    // check the midpoint bValue
    const bPressDistance = machine.buttonB.scale(midpoint);
    const deltaDistance = machine.prize.sub(bPressDistance);
    const aPresses = Math.floor(Math.min(pressLimit, deltaDistance.div(machine.buttonA).smaller()));
    const countedAPresses = machine.buttonA.scale(aPresses);
    const distanceNotCovered = deltaDistance.sub(countedAPresses);
    const foundSolution = distanceNotCovered.x + distanceNotCovered.y == 0;

    // console.log("\n\n\nmachine", machine);
    // console.log(bUpper, bLower, midpoint);
    // console.log(bPressDistance, deltaDistance)
    // console.log(aPresses, countedAPresses, distanceNotCovered, foundSolution);

    let bestSolution = !foundSolution ? undefined : {
        aPresses,
        bPresses: midpoint,
        cost: aPresses * A_COST + bUpper * B_COST,
    };

    const solUpper = solve(machine, pressLimit, bUpper, midpoint + 1);
    if(solUpper)
        return solUpper;

    if(bestSolution)
        return bestSolution;

    const solLower = solve(machine, pressLimit, bLower - 1, midpoint);
    return solLower;
}

const reduceSum = (prev: number, curr: number) => prev + (curr == Number.POSITIVE_INFINITY ? 0 : curr);

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [a, b, target] = v.split("\n").map(getXY);
        const machine = new Machine(a, b, target);
        return machine;
    });

    const part_1 = machines.map(m => solve(m, MAX_PRESSES)).map(v => console.log(v));
    const part_2 = 0; // machines.map(m => solve(m.toCalibrated(), Number.POSITIVE_INFINITY)).reduce(reduceSum);

    return {
        // 37901
        part_1: "",
        part_2: ""
    }
}

