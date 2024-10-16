import { ReactNode } from "react";

export function ifTrue(condition: boolean, Item: ReactNode) {
    return ifTruthy(condition, Item);
}

export function ifTruthy(condition: any, Item: ReactNode) {
    if(condition)
        return Item;

    return <></>
}