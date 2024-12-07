export const makeGridFromMultilineString =
    (input: string) => input.split("\n").map(st => st.trim()).map(v => v.split(""));

export const Duplicate2DArray = <T>(array: Array<Array<T>>) => {
    return [...array.map((item) => [...item])];
}

export const MakeEmptyGenericArray = <T>(length: number, fn: (index: number) => T) => {
    const newArray = [];
    let i = 0;
    while (i++ < length)
        newArray.push(fn(i));

    return newArray;
}

export const MakeEmptyArray = (length: number) => MakeEmptyGenericArray(length, () => 0);
export const MakeEmpty2DArray = (x: number, y: number) => MakeEmptyArray(y).map(() => MakeEmptyArray(x));
