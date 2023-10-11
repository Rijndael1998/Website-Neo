type nullZeroType = number | undefined
const nullZero = (item: nullZeroType) => item == 0 ? null : item;
const nullZero2d = (items: Array<nullZeroType>) => items.map(nullZero);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// into
// [1, 2, 3, null, 4, 5, 6, null, 7, 8, 9]
export function get3<T>(arr: Array<T>): Array<T | null> {
    const newArr: Array<T | null> = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);

        if((i + 1) % 3 == 0 && i + 1 < arr.length)
            newArr.push(null);
    }
    
    return newArr;
}

function repeat<T>(arr: Array<T>, times: number) {
    let newArr: Array<T> = [];
    for (let index = 0; index < times; index++) {
        newArr = [...newArr, ...arr]
    }
    return newArr;
}

function get3_2d<T>(arr: Array<Array<T>>, rep=9) {
    return get3(arr.map(item => get3(item))).map(items => items == null ? repeat([null], 11) : items);
}

export const easyGrid = get3_2d([
    [2, 3, 0,  4, 1, 5,  0, 6, 8],
    [0, 8, 0,  2, 3, 6,  5, 1, 9],
    [1, 6, 0,  9, 8, 7,  2, 3, 4],

    [3, 1, 7,  0, 9, 4,  0, 2, 5],
    [4, 5, 8,  1, 2, 0,  6, 9, 7],
    [9, 2, 6,  0, 5, 8,  3, 0, 1],

    [0, 0, 0,  5, 0, 0,  1, 0, 2],
    [0, 0, 0,  8, 4, 2,  9, 0, 3],
    [5, 9, 2,  3, 7, 1,  4, 8, 6],
].map(nullZero2d));

export const easyGridSnippet = [
    [2, 3, 0],
    [0, 8, 0],
    [1, 6, 0],
].map(nullZero2d);

export const easyGridSnippet2 = [
    [2, 3, 0,  4, 1, 5,  0, 6, 8]
].map(nullZero2d);

export const easyGridSnippet3 = [
    [0],
    [0],
    [0],

    [7],
    [8],
    [6],

    [0],
    [0],
    [2],
].map(nullZero2d);

