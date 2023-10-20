export type GenericCallback = (() => void) | undefined;

export const Duplicate2DArray = <T>(array: Array<Array<T>>) => {
    return [...array.map((item) => [...item])];
}