import { AdventOfCodeSolutionFunction } from "./solutions";

type RulesType = Map<number, Array<number>>;

const ReduceMiddleNumbers = (p: number, v: Array<number>) => p + v[(v.length - 1) / 2];

const CheckPages = (pages: Array<number>, rules: RulesType): [true] | [false, number, number] => {
    for (let index = 0; index < pages.length; index++) {
        const page = pages[index]; // [97,61,53,29,13] => 97
        const elementRules = rules.get(page);

        // there are no rules for this number
        if (elementRules === undefined)
            continue;

        for (let ruleIndex = 0; ruleIndex < elementRules.length; ruleIndex++) {
            const rule = elementRules[ruleIndex];
            const rulePos = pages.indexOf(rule);

            // the number specified in the rule doesn't exist in our page
            if (rulePos == -1)
                continue;

            // the number came before our current index, meaning it's bad.
            if (index > rulePos) 
                return [false, index, rulePos];
        }
    }

    return [true];
}


const Reposition = (pages: Array<number>, rules: RulesType) => {
    const newPages = [...pages];
    let res = CheckPages(newPages, rules);
    let i = 0; 
    // this will be public facing api and it's possible to create inf loops so, 10k limit
    while(!res[0] && i++ < 10000) {
        // yes I know the trick, but tricks < semantics
        const moveThisRight = newPages[res[1]];
        const moveThisLeft = newPages[res[2]];
        newPages[res[1]] = moveThisLeft;
        newPages[res[2]] = moveThisRight;

        res = CheckPages(newPages, rules);
    }

    return [...newPages];
}

export const solution_5: AdventOfCodeSolutionFunction = (input) => {
    const [rules_input, content_input] = input.split("\n\n").map(v => v.trim());

    const rules: RulesType = new Map();

    rules_input.split("\n").map(v => v.split("|").map(v => Number(v))).forEach((rule) => {
        const [k, v] = rule;
        if (rules.has(k))
            rules.get(k)!.push(v);
        else
            rules.set(k, [v]);
    });

    const correctArray: Array<Array<number>> = [];
    const incorrectArray: Array<Array<number>> = [];

    content_input.split("\n").map(v => v.split(",").map(v => Number(v))).forEach(pages => {
        if(CheckPages(pages, rules)[0])
            correctArray.push(pages);
        else
            incorrectArray.push(pages);
    });

    const part_1 = correctArray.reduce<number>(ReduceMiddleNumbers, 0);
    const part_2 = incorrectArray.map((v) => Reposition([...v], rules)).reduce<number>(ReduceMiddleNumbers, 0);

    return {
        part_1,
        part_2,
    }
}

