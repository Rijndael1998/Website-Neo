import { ReactNode } from "react";

export function ifTrue(condition: boolean, Item: ReactNode) {
    return ifTruthy(condition, Item);
}

export function ifTruthy(condition: any, Item: ReactNode) {
    return ifTruthyElse(condition, Item, <></>);
}

export function ifTruthyElse(condition: any, ItemA: ReactNode, ItemB: ReactNode) {
    if (condition)
        return ItemA;

    return ItemB;
}