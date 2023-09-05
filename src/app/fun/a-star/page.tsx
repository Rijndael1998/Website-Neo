"use client";

import { useEffect, useState } from "react";
import { GridItemState, GridState } from "../../../components/algorithms/grid/gridState"
import Grid from "../../../components/algorithms/grid/_grid";


function chooseState() {
    return Math.random() > 0.5 ? GridItemState.ON : GridItemState.OFF;
}

const makeGrid = () => {
    const state: Array<Array<GridItemState>> = [];
    for(let i = 0; i < 4; i++) {
        state.push([]);
        for(let _ = 0; _ < 4; _++) {
            state[i].push(chooseState());
        }
    }

    return state;
}

export default function A_Star() {
    const [state, setState] = useState<GridState>([]);

    useEffect(() => {
        setState(makeGrid());
    }, []);

    const callback = (x: number, y: number) => {
        console.log("cb", x, y);
    }

    return <>
        <h1>
            A* Algorithm
        </h1>
        <Grid state={state} callback={callback}/>
    </>
}