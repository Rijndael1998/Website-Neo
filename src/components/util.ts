export type GenericCallback = (() => void) | undefined;

export const Duplicate2DArray = <T>(array: Array<Array<T>>) => {
    return [...array.map((item) => [...item])];
}

export const CopyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
}

export const ChooseRandomElement = <T>(array: Array<T>) => {
    return array[Math.floor(Math.random() * array.length)];
}