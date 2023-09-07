"use client";

import { useEffect, useState } from "react";
import { GridState } from "../../../components/algorithms/grid/gridState"
import Grid from "../../../components/algorithms/grid/_grid";
import { AStarStates, AStarStyleMap } from "@/components/algorithms/a*/_a*";


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
        <Grid state={state} callback={callback} />
    </>
}