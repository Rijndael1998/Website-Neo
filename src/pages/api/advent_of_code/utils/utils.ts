export const makeGridFromMultilineString =
    (input: string) => input.split("\n").map(st => st.trim()).map(v => v.split(""));

export const Duplicate2DArray = <T>(array: Array<Array<T>>) => {
    return [...array.map((item) => [...item])];
}

