import { AdventOfCodeSolutionFunction } from "./solutions";

const ReduceMiddleNumbers = (p: number, v: Array<number>) => p + v[(v.length - 1) / 2];

export const solution_5: AdventOfCodeSolutionFunction = (input) => {
    const [rules_input, content_input] = input.split("\n\n").map(v => v.trim());

    const rules = new Map<number, Array<number>>();

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
                if (index > rulePos) {
                    incorrectArray.push(pages);
                    return;
                }
            }
        }

        correctArray.push(pages);
    });
    
    const part_1 = correctArray.reduce<number>(ReduceMiddleNumbers, 0);

    return {
        part_1,
        part_2: content_input,
    }
}

