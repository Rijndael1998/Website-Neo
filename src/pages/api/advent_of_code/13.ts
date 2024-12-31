import { AdventOfCodeSolutionFunction } from "./solutions";
import { Vector } from "./utils/structures/vector";
import { Memo2D } from "./utils/utils";

const find = /X.(\d+), Y.(\d+)/;
const getXY = (input: string) => {
    const res = input.match(find);
    const x = Number.parseFloat(res![1]);
    const y = Number.parseFloat(res![2]);
    return new Vector(x, y);
}

class Machine {
    constructor(public buttonA: Vector, public buttonB: Vector, public prize: Vector) { }
}

const MAX_PRESSES = 100;
const A_COST = 3;
const B_COST = 1;
const CALIBRATION = 10000000000000;

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [a, b, target] = v.split("\n").map(getXY);
        return new Machine(a, b, target);
    });

    const part_1 = machines.map(machine => {
        let cheapestSolution: number = Number.POSITIVE_INFINITY;

        aCountLoop: for (let aCount = 0; aCount < MAX_PRESSES; aCount++) {
            for (let bCount = 0; bCount < MAX_PRESSES; bCount++) {
                const aDistance = machine.buttonA.scale(aCount);
                const bDistance = machine.buttonB.scale(bCount);
                const distance = aDistance.add(bDistance);

                const difference = machine.prize.sub(distance);
                if (difference.x < 0 || difference.y < 0)
                    continue aCountLoop;

                if (distance.compare(machine.prize)) {
                    // found solution
                    const cost = aCount * A_COST + bCount * B_COST;
                    cheapestSolution = Math.min(cheapestSolution, cost);
                }
            }
        }

        return cheapestSolution;
    }).reduce((prev, curr) => prev + (curr == Number.POSITIVE_INFINITY ? 0 : curr));



    return {
        // 37901
        part_1,
        part_2: ""
    }
}

