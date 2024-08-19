import { ReactNode } from "react";

export function ifTrue(condition: boolean, Item: ReactNode) {
    if(condition)
        return Item;

    return <></>
}