"use client";

import styles from "./styles/aStar.module.scss";
import button from "./../../input/genericButton/genericButton.module.scss";
import colors from "./styles/aStarStyleMap.module.scss";
import GenericButton from "@/components/input/genericButton/_genericButton";
import NumUpDown from "@/components/input/numUpDown/_numUpDown";
import classNames from "classnames";
import Grid from "../grid/_grid";
import { useEffect, useState } from "react";
import { GridState } from "../grid/gridState"
import AStar from "@/components/algorithms/aStar/_aStar";

import { AStarResult } from "@/components/algorithms/aStar/utils/aStarResult";
import { AStarStyleMap } from "@/components/algorithms/aStar/styles/aStarStyleMap";
import { AStarStates } from "@/components/algorithms/aStar/utils/aStarStates.enum";
import { AStarStages } from "@/components/algorithms/aStar/utils/aStarStages.enum";
import ColorSquare from "@/components/colorSquare/_colorSquare";
import GridItem from "../grid/gridItem/_gridItem";

function generateGridState(width: number, height: number) {
    return new GridState(width, height, AStarStyleMap, AStarStates.Node)
}

export default function AStarComponent() {
    const initialSize = 10;
    const maxSize = 22;

    const [callback, setCallback] = useState<(x: number, y: number) => void>();
    const [AS, setAS] = useState<AStar>();

    const [state, setState] = useState<GridState<AStarStates>>();
    const [stage, setStage] = useState<AStarStages>(AStarStages.Start);
    const [canStep, setCanStep] = useState<boolean>(false);
    const [canStepReason, setCanStepReason] = useState<string>();
    const [auto, setAuto] = useState<boolean>(false);

    const [InputWidth, setInputWidth] = useState<number>(initialSize);
    const [InputHeight, setInputHeight] = useState<number>(initialSize);

    const applyResult = (result: AStarResult) => {
        if (result.gridStage !== undefined)
            setStage(result.gridStage);

        setState(result.gridState);
        setCanStep(result.canContinue);
        setCanStepReason(result.canContinueReason);
    }

    const refreshState = () => {
        const newState = AS?.run();
        if (newState)
            applyResult(newState);
    }

    useEffect(() => {
        const as = new AStar(generateGridState(initialSize, initialSize));
        setAS(as);
        setState(as.state);
    }, []);

    useEffect(() => {
        if (!AS)
            return;

        const newCallback = (x: number, y: number) => {
            const result = AS.interaction(x, y, stage);
            applyResult(result);
        }

        setCallback(() => newCallback);
    }, [AS, stage]);

    useEffect(() => {
        if (AS)
            applyResult(AS.setAuto(auto));
    }, [AS, auto]);

    return <div>
        <div className={styles.options}>
            <div className={styles.newGridOptionsWrapper}>
                <div className={styles.widthHeightOptions}>
                    <div>Width</div>
                    <div><NumUpDown start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputWidth(num)} /></div>
                    <div>Height</div>
                    <div><NumUpDown start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputHeight(num)} /></div>
                </div>
                <GenericButton className={classNames(styles.newGridButton, button.medButton)} onClick={() => {
                    const newAS = new AStar(generateGridState(InputWidth, InputHeight));
                    setAS(newAS);
                    setStage(AStarStages.Start);
                    setState(newAS.state);
                }}><p>New Grid</p></GenericButton>
            </div>

            <div className={classNames(styles.tileSelection, styles.stageButtons)}>
                <div>Tile Selection:</div>
                <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.Start)} selected={stage == AStarStages.Start}><p>Select start</p></GenericButton>
                <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.End)} selected={stage == AStarStages.End}><p>Select end</p></GenericButton>
                <GenericButton className={styles.stageButton} onClick={() => setStage(AStarStages.Wall)} selected={stage == AStarStages.Wall}><p>Select walls</p></GenericButton>
            </div>

            <div className={classNames(styles.stepSelection, styles.stageButtons)}>
                <GenericButton className={styles.stageButton} onClick={() => {setAuto(!auto); auto && AS && applyResult(AS.reset())}} selected={auto}><p>Auto step: {auto ? "Enabled" : "Disabled"}</p></GenericButton>
                <GenericButton className={styles.stageButton} onClick={() => { refreshState() }} selected={canStep} disabled={auto || canStepReason !== undefined}><p>Step</p></GenericButton>
                <GenericButton className={styles.stageButton} onClick={() => AS && applyResult(AS.reset())} selected={true} disabled={auto}><p>Reset Steps</p></GenericButton>
            </div>
        </div>
        <p>
            {canStepReason ?? "All ok"}
        </p>

        <div className={styles.gridWrapper}>
            <Grid className={styles.grid} state={state} callback={callback} />
        </div>

        <div className={styles.key}>
            <h3>Key:</h3>
            <div>
                <GridItem item={colors.Node} />
                <div>Node</div>
            </div>
            <div>
                <GridItem item={colors.Wall} />
                <div>Wall</div>
            </div>
            <div>
                <GridItem item={colors.Start} />
                <div>Start</div>
            </div>
            <div>
                <GridItem item={colors.End} />
                <div>End</div>
            </div>
            <div>
                <GridItem item={colors.Path} />
                <div>Path</div>
            </div>
            <div>
                <GridItem item={colors.Explored} />
                <div>Explored</div>
            </div>
            <div>
                <GridItem item={colors.Removed} />
                <div>Removed</div>
            </div>
        </div>
    </div>
}