"use client";

import { useEffect, useState } from "react";
import { GridState } from "../../../components/algorithms/grid/gridState"
import Grid from "../../../components/algorithms/grid/_grid";
import { AStarStates } from "@/components/algorithms/a*/_a*";
import styles from "./a*.module.scss";

export const AStarStyleMap: Map<AStarStates,string> = new Map();
AStarStyleMap.set(AStarStates.Node, styles.Node);
AStarStyleMap.set(AStarStates.Wall, styles.Wall);
AStarStyleMap.set(AStarStates.Start, styles.Start);
AStarStyleMap.set(AStarStates.End, styles.End);


export default function A_Star() {
    const [state, setState] = useState<GridState<AStarStates>>(new GridState(4, 4, AStarStyleMap, AStarStates.Node));
    const [callback, setCallback] = useState<(x: number, y: number) => void>();

    useEffect(() => {
        const newState = state.new();
        const newCallback = (x: number, y: number) => {
            newState.setState(x, y, AStarStates.Wall);
            console.log("cb", x, y);
            setState(newState);
        }

        setCallback(() => newCallback);
    }, [state]);

    return <>
        <h1>
            A* Algorithm
        </h1>
        <div>
            <div>Select start</div>
            <div>Select end</div>
            <div>Select walls</div>
        </div>
        <Grid state={state} callback={callback} />
    </>
}