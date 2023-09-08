"use client";

import { useEffect, useState } from "react";
import { GridState } from "../../../components/algorithms/grid/gridState"
import Grid from "../../../components/algorithms/grid/_grid";
import AStar, { AStarStates } from "@/components/algorithms/a*/_a*";
import styles from "./a*.module.scss";
import GenericButton from "@/components/input/genericButton/_genericButton";
import NumUpDown from "@/components/input/numUpDown/_numUpDown";
import classNames from "classnames";

export const AStarStyleMap: Map<AStarStates, string> = new Map();
AStarStyleMap.set(AStarStates.Node, styles.Node);
AStarStyleMap.set(AStarStates.Wall, styles.Wall);
AStarStyleMap.set(AStarStates.Start, styles.Start);
AStarStyleMap.set(AStarStates.End, styles.End);

export enum AStarStages {
    Start,
    End,
    Wall,
}

function generateGridState(width: number, height: number) {
    return new GridState(width, height, AStarStyleMap, AStarStates.Node)
}


export default function A_Star() {
    const initialSize = 10;
    const maxSize = 40;

    const [state, setState] = useState<GridState<AStarStates>>(generateGridState(initialSize, initialSize));
    const [stage, setStage] = useState<AStarStages>(AStarStages.Start);
    const [callback, setCallback] = useState<(x: number, y: number) => void>();
    const [AS, setAS] = useState<AStar>(new AStar(state));

    const [InputWidth, setInputWidth] = useState<number>(initialSize);
    const [InputHeight, setInputHeight] = useState<number>(initialSize);

    useEffect(() => {
        const newCallback = (x: number, y: number) => {
            const [newState, newStage] = AS.interaction(x, y, stage);
            console.log("cb", x, y);
            setState(newState);
            setStage(newStage);
        }

        setCallback(() => newCallback);
    }, [AS, stage]);

    useEffect(() => {
        console.log("state changed");
        setAS(new AStar(state))
    }, [state]);

    return <>
        <h1>
            A* Algorithm
        </h1>
        <div>
            Width: <NumUpDown start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputWidth(num)} />
            Height: <NumUpDown start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputHeight(num)} />
            <GenericButton className={classNames(styles.stageButton, styles.inline)} onClick={() => {
                setState(generateGridState(InputWidth, InputHeight));
                setStage(AStarStages.Start);
            }}>New Grid</GenericButton>
        </div>
        <div className={styles.stageButtons}>
            <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.Start)} selected={stage == AStarStages.Start}><p>Select start</p></GenericButton>
            <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.End)} selected={stage == AStarStages.End}><p>Select end</p></GenericButton>
            <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.Wall)} selected={stage == AStarStages.Wall}><p>Select walls</p></GenericButton>
        </div>
        <Grid className={styles.grid} state={AS} callback={callback} />
    </>
}