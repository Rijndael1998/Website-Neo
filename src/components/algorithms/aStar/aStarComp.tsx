"use client";

import styles from "./styles/aStar.module.scss";
import colors from "./styles/aStarStyleMap.module.scss";
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
import GridItem from "../grid/gridItem/_gridItem";
import { Button, ButtonOwnProps, Card, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, Switch } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { default as MGrid } from '@mui/material/Unstable_Grid2';

function generateGridState(width: number, height: number) {
    return new GridState(width, height, AStarStyleMap, AStarStates.Node)
}

function buttonVariant(v: boolean): ButtonOwnProps["variant"] {
    return v ? "contained" : "outlined";
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
        setAuto(true);
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

    const mGridSpacing = 4;
    const mGridXS = 12 / 2;

    return <div>
        <MGrid container spacing={mGridSpacing}>
            <MGrid xs={mGridXS - 2}>
                <Stack spacing={1}>
                    <NumUpDown label="Width" start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputWidth(num)} />
                    <NumUpDown label="Height" start={initialSize} min={initialSize} max={maxSize} callback={(num) => setInputHeight(num)} />
                    <Button variant="contained"
                        onClick={() => {
                            const newAS = new AStar(generateGridState(InputWidth, InputHeight));
                            setAS(newAS);
                            setStage(AStarStages.Start);
                            setState(newAS.state);
                        }}>
                        New Grid
                    </Button>
                </Stack>
            </MGrid>
            <MGrid xs={mGridXS + 2}>
                <Stack spacing={1}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Tile Selection</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            defaultValue={AStarStages.Start}
                            onChange={(_, v) => setStage(Number.parseInt(v))}
                            value={stage}
                        >
                            <FormControlLabel value={AStarStages.Start} control={<Radio />} label="Start" />
                            <FormControlLabel value={AStarStages.End} control={<Radio />} label="End" />
                            <FormControlLabel value={AStarStages.Wall} control={<Radio />} label="Wall" />
                        </RadioGroup>
                    </FormControl>
                </Stack>
            </MGrid>
        </MGrid>

        <p>
            {canStepReason ?? "All ok"}
        </p>

        <div className={styles.gridWrapper}>
            <Grid className={styles.grid} state={state} callback={callback} />
        </div>

        <Stack direction="row" spacing={1}>
            <FormGroup>
                <FormControlLabel
                    label="Auto step"
                    control={
                        <Switch
                            checked={auto}
                            onClick={() => { setAuto(!auto); auto && AS && applyResult(AS.reset()) }}
                        />
                    } />
            </FormGroup>
            <Button
                variant={buttonVariant(canStep)}
                disabled={auto || canStepReason !== undefined}
                onClick={() => { refreshState() }}>
                Step
            </Button>
            <Button
                color="warning"
                disabled={auto}
                onClick={() => AS && applyResult(AS.reset())}>
                Reset Steps
            </Button>
        </Stack>

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