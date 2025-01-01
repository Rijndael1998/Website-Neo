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

class Machine {
    constructor(public buttonA: Vector, public buttonB: Vector, public prize: Vector) { }

    toCalibrated() {
        const newPrize = new Vector(CALIBRATION, CALIBRATION).add(this.prize);
        return new Machine(this.buttonA.duplicate(), this.buttonB.duplicate(), newPrize);
    }
}

const fixArray = (v: Array<Vector>, dV: Vector) => {
    return v.map(V => V.add(dV));
}

type deriveABResult = Array<Vector>;
const deriveMemo = new Memo1D<number, deriveABResult>()
const deriveAB = (cost: number): deriveABResult => {
    const res = deriveMemo.getResult(cost);
    if (res !== undefined)
        return res;

    switch (cost) {
        case 0:
            return deriveMemo.setResult(cost, [new Vector(0, 0)]);

        case 1:
            return deriveMemo.setResult(cost, [new Vector(0, 1)]);

        case 2:
            return deriveMemo.setResult(cost, [new Vector(0, 2)]);

        case 3:
            return deriveMemo.setResult(cost, [new Vector(0, 3), new Vector(1, 0)]);
    }

    const possible = [
        ...deriveAB(cost - 1).map(v => v.add(new Vector(0, 1))),
        ...deriveAB(cost - 2).map(v => v.add(new Vector(0, 2))),
        ...deriveAB(cost - 3).map(v => v.add(new Vector(0, 3))),
        ...deriveAB(cost - 3).map(v => v.add(new Vector(1, 0))),
    ].map(v => v.toArray()).sort().map((v) => new Vector(...v)).map((vector, index, array) => {
        if(index == 0)
            return vector;

        if(array[index - 1].compare(vector))
            return undefined;

        return vector;
    }).filter(v => v !== undefined);


    return deriveMemo.setResult(cost, possible);
}

const ORIGIN = new Vector(0, 0);

const solve = (machine: Machine, limit: number) => {
    let cost: number;
    main: for (cost = 1; ; cost++) {
        // derive a & b
        const res = deriveAB(cost);
        if (!res)
            continue;

        for (let index = 0; index < res.length; index++) {
            const [a, b] = res[index].toArray();
            const aDistance = machine.buttonA.scale(a);
            const bDistance = machine.buttonB.scale(b);
            const distance = aDistance.add(bDistance);
            const diff = machine.prize.sub(distance);

            if(diff.compare(ORIGIN))
                return cost;

            if(a > limit || b > limit)
                break;

            if(diff.x < 0 || diff.y < 0)
                break main;
        }
    }

    return cost;
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

