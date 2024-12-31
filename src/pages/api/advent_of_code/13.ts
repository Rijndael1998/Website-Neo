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

type findAnswerReturn = false | {
    aCount: number,
    bCount: number,
}

//                               aButton, bButton
type findAnswerMemoType = Memo2D<number, number, findAnswerReturn>;

const findAnswer = (aCount: number, bCount: number, machine: Machine, memo: findAnswerMemoType): findAnswerReturn => {
    // speedup from memo
    const memoRes = memo.getResult(aCount, bCount);
    if(memoRes !== undefined)
        return memoRes;

    if (aCount + bCount > 100)
        return memo.setResult(aCount, bCount, false);

    if (machine.buttonA.scale(aCount).add(machine.buttonB.scale(bCount)).compare(machine.prize))
        return memo.setResult(aCount, bCount, { aCount, bCount });

    const resB = findAnswer(aCount, bCount + 1, machine, memo);

    if (resB === false) {
        const resA = findAnswer(aCount + 1, bCount, machine, memo);
        return memo.setResult(aCount, bCount, resA);
    }

    return memo.setResult(aCount, bCount, resB);
}

const A_COST = 3;
const B_COST = 1;

export const solution_13: AdventOfCodeSolutionFunction = (input) => {
    const machines = input.split("\n\n").map((v) => {
        const [a, b, target] = v.split("\n").map(getXY);
        return new Machine(a, b, target);
    }).map(m => {
        return findAnswer(0, 0, m, new Memo2D());
    });

    console.log(machines);

    return {
        part_1: "",
        part_2: ""
    }
}

