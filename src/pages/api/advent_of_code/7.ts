import { AdventOfCodeSolutionFunction } from "./solutions";

function MakeCombination<T>(choices: Array<T>, state: Array<number>): Array<T> {
    return state.map((v) => choices[v]);
}

function MakeStateArray(length: number) {
    const newArray = [];
    while (length-- > 0)
        newArray.push(0);

    return newArray;
}

function IncrementState(state: Array<number>, max: number): [state: Array<number>, overflow: boolean] {
    state[0]++;
    for (let index = 0; index < state.length; index++) {
        if (state[index] == max) {
            state[index] = 0;

            if (index + 1 == state.length)
                return [state, true];

            state[index + 1]++;
        }
    }

    return [state, false];
}

function GenerateCombinations<T>(choices: Array<T>, length: number): Array<Array<T>> {
    const states = MakeStateArray(length);
    const combinations: Array<Array<T>> = [];

    let done = false
    while (!done) {
        combinations.push(MakeCombination(choices, states));
        done = IncrementState(states, choices.length)[1];
    }


    return combinations;
}

enum Op {
    MUL = "*",
    ADD = "+",
    CON = "|",
}

function ApplyOp(a: number, b: number, op: Op): number {
    switch (op) {
        case Op.MUL:
            return a * b;
        case Op.ADD:
            return a + b;
        case Op.CON:
            return Number(`${a}${b}`);
    }
}

function ApplyOperatorsToNumbers(numbers: Array<number>, ops: Array<Op>): number {
    let prev = ApplyOp(numbers[0], numbers[1], ops[0]);

    for (let index = 2; index < numbers.length; index++) {
        prev = ApplyOp(prev, numbers[index], ops[index - 1])
    }

    return prev;
}

export const solution_7: AdventOfCodeSolutionFunction = (input) => {
    const numbers = // [{target: 123, numbers: [1, 2, 3, ...]}, ...]
        input.split("\n")
            .map(
                (v) => v.trim()
                    .split(":")
                    .map(v => v.trim().split(" ").map(v => Number(v)))
            ).map(
                (v) => {
                    return { target: v[0][0], numbers: v[1] }
                }
            );

    let part_1 = 0;
    let part_2 = 0;

    for (let index = 0; index < numbers.length; index++) {
        const target = numbers[index].target;
        const numbs = numbers[index].numbers;

        // GenerateCombinations(["+", "*"], 2) => [["+", "+"], ["+", "*"], ["*", "+"], ["*", "*"]]
        const combinations = GenerateCombinations([Op.ADD, Op.MUL], numbs.length - 1); 

        // part 1 calculations
        for (let combinationIndex = 0; combinationIndex < combinations.length; combinationIndex++) {
            const combination = combinations[combinationIndex];
            const result = ApplyOperatorsToNumbers(numbs, combination);
            if (result == target) {
                part_1 += result;
                break;
            }
        }

        const combinations2 = GenerateCombinations([Op.ADD, Op.MUL, Op.CON], numbs.length - 1);

        // part 2 calculations
        for (let combinationIndex = 0; combinationIndex < combinations2.length; combinationIndex++) {
            const combination = combinations2[combinationIndex];
            const result = ApplyOperatorsToNumbers(numbs, combination);
            if (result == target) {
                part_2 += result;
                break;
            }
        }

    }

    return {
        part_1,
        part_2,
    }
}

