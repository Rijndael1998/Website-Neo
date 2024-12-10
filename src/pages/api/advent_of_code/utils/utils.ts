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

export const prettyPrintMap = new Map<number, string>();
prettyPrintMap.set(-1, ".");
prettyPrintMap.set(-2, "*");

export const prettyPrint = (disk: Array<number>) => disk.reduce<string>((prev, curr) => prev + (prettyPrintMap.get(curr) ?? `${curr}`), "");
export const prettyPrint2d = (disk: Array<Array<number>>) => {
    if(disk.length == 0) 
        return "";

    let top = "  ";
    for (let index = 0; index < disk.length; index++) {
        const element = index % 10;
        top += element;
    }

    let pp = disk.reduce<string>((prev, curr, i) => `${prev}${i} ${prettyPrint(curr)}${i < curr.length - 1 ? "\n" : ""}`, "");


    return `${top}\n${pp}`;
};