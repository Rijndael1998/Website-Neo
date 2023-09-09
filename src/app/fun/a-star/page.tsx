"use client";

import { useEffect, useState } from "react";
import { GridState } from "../../../components/algorithms/grid/gridState"
import Grid from "../../../components/algorithms/grid/_grid";
import AStar from "@/components/algorithms/a*/_a*";
import styles from "./a*.module.scss";
import GenericButton from "@/components/input/genericButton/_genericButton";
import NumUpDown from "@/components/input/numUpDown/_numUpDown";
import classNames from "classnames";
import { AStarResult } from "@/components/algorithms/a*/utils/a*result";
import { AStarStyleMap } from "@/components/algorithms/a*/styles/a*StyleMap";
import { AStarStates } from "@/components/algorithms/a*/utils/a*states.enum";
import { AStarStages } from "@/components/algorithms/a*/utils/a*stages.enum";

function generateGridState(width: number, height: number) {
    return new GridState(width, height, AStarStyleMap, AStarStates.Node)
}


export default function A_Star() {
    const initialSize = 10;
    const maxSize = 40;


    const [callback, setCallback] = useState<(x: number, y: number) => void>();
    const [AS, setAS] = useState<AStar>();

    const [state, setState] = useState<GridState<AStarStates>>(generateGridState(initialSize, initialSize));
    const [stage, setStage] = useState<AStarStages>(AStarStages.Start);
    const [canStep, setCanStep] = useState<boolean>(false);
    const [canStepReason, setCanStepReason] = useState<string>();
    const [auto, setAuto] = useState<boolean>(false);

    const [InputWidth, setInputWidth] = useState<number>(initialSize);
    const [InputHeight, setInputHeight] = useState<number>(initialSize);

    const applyResult = (result: AStarResult) => {
        console.log(result);

        if (result.gridStage !== undefined)
            setStage(result.gridStage);

        setState(result.gridState);
        setCanStep(result.canContinue);
        setCanStepReason(result.canContinueReason);
    }

    const refreshState = () => {
        const newState = AS?.step();
        if (newState)
            applyResult(newState);
    }

    useEffect(() => {
        setAS(new AStar(generateGridState(initialSize, initialSize)));
    }, []);

    useEffect(() => {
        if (!AS)
            return;

        const newCallback = (x: number, y: number) => {
            const result = AS.interaction(x, y, stage);
            console.log("cb", x, y);
            applyResult(result);
        }

        setCallback(() => newCallback);
    }, [AS, stage]);


    return <>
        <h1>
            A* Algorithm
        </h1>
        <div>
            Width: <NumUpDown start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputWidth(num)} />
            Height: <NumUpDown start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputHeight(num)} />
            <GenericButton className={classNames(styles.stageButton, styles.inline)} onClick={() => {
                const newAS = new AStar(generateGridState(InputWidth, InputHeight));
                setAS(newAS);
                setStage(AStarStages.Start);
                setState(newAS.state);
            }}>New Grid</GenericButton>
        </div>
        <div className={styles.stageButtons}>
            <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.Start)} selected={stage == AStarStages.Start}><p>Select start</p></GenericButton>
            <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.End)} selected={stage == AStarStages.End}><p>Select end</p></GenericButton>
            <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.Wall)} selected={stage == AStarStages.Wall}><p>Select walls</p></GenericButton>
        </div>
        <div className={styles.stageButtons}>
            <GenericButton className={styles.stageButton} onClick={() => {refreshState()}} selected={canStep} disabled={auto || canStepReason !== undefined}><p>Step</p></GenericButton>
            <GenericButton className={styles.stageButton} onClick={() => setAuto(!auto)} selected={auto}><p>Auto step</p></GenericButton>
        </div>
        <GenericButton className={styles.stageButton} onClick={() => AS && applyResult(AS.reset())} selected={true}><p>Reset Progress</p></GenericButton>
        <p>
            {canStepReason === undefined ? "All ok" : canStepReason}
        </p>
        <Grid className={styles.grid} state={state} callback={callback} />
    </>
}