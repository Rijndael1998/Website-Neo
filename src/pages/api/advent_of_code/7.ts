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

const GenerateCombinationsMemo: Map<number, Map<Array<any>, Array<Array<any>>>> = new Map();

// GenerateCombinations(["+", "*"], 2) => [["+", "+"], ["+", "*"], ["*", "+"], ["*", "*"]]
function GenerateCombinations<T>(choices: Array<T>, length: number): Array<Array<T>> {
    // return early if cached
    const potentialCombination = GenerateCombinationsMemo.get(length)?.get(choices);
    if (potentialCombination)
        return potentialCombination;

    const states = MakeStateArray(length);
    const combinations: Array<Array<T>> = [];

    let done = false;
    while (!done) {
        combinations.push(MakeCombination(choices, states));
        done = IncrementState(states, choices.length)[1];
    }

    // memoize if not cached
    if (!GenerateCombinationsMemo.has(length))
        GenerateCombinationsMemo.set(length, new Map());

    const lengthMap = GenerateCombinationsMemo.get(length)!;

    if (!lengthMap.has(choices))
        lengthMap.set(choices, combinations);

    return combinations;
}

enum Op {
    MUL = "*",
    ADD = "+",
    CON = "|",
}

function concat(a: number, b: number){ 
    return a * (10 ** ((Math.floor(Math.log10(b))) + 1)) + b
}

function ApplyOp(a: number, b: number, op: Op): number {
    switch (op) {
        case Op.MUL:
            return a * b;
        case Op.ADD:
            return a + b;
        case Op.CON:
            return concat(a, b);
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

    // these will be single references which can be memoised
    const part1Ops = [Op.ADD, Op.MUL];
    const part2Ops = [Op.ADD, Op.MUL, Op.CON];

    for (let index = 0; index < numbers.length; index++) {
        const target = numbers[index].target;
        const numbs = numbers[index].numbers;

        const combinations = GenerateCombinations(part1Ops, numbs.length - 1);

        // part 1 calculations
        for (let combinationIndex = 0; combinationIndex < combinations.length; combinationIndex++) {
            const combination = combinations[combinationIndex];
            const result = ApplyOperatorsToNumbers(numbs, combination);
            if (result == target) {
                part_1 += result;
                break;
            }
        }

        const combinations2 = GenerateCombinations(part2Ops, numbs.length - 1);

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
        part_1, // 2314935962622
        part_2, // 401477450831495
    } // 1355ms
}

