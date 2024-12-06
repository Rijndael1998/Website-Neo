export const makeGridFromMultilineString = 
    (input: string) => input.split("\n").map(st => st.trim()).map(v => v.split(""));
