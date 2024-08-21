"use client";

import styles from "./styles/aStar.module.scss";
import colors from "./styles/aStarStyleMap.module.scss";
import NumUpDown from "@/components/input/numUpDown/_numUpDown";
import Grid from "../grid/_grid";
import { useEffect, useState } from "react";
import { GridState } from "../grid/gridState"
import AStar from "@/components/algorithms/aStar/_aStar";

import { AStarResult } from "@/components/algorithms/aStar/utils/aStarResult";
import { AStarStyleMap } from "@/components/algorithms/aStar/styles/aStarStyleMap";
import { AStarStates } from "@/components/algorithms/aStar/utils/aStarStates.enum";
import { AStarStages } from "@/components/algorithms/aStar/utils/aStarStages.enum";
import GridItem from "../grid/gridItem/_gridItem";
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonOwnProps, Card, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, Switch } from "@mui/material";
import * as React from 'react';
import { default as MGrid } from '@mui/material/Unstable_Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AStarContent, AStarContent2 } from "@/content/portfolio/aStar/AStar";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";

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

    const t = {
        xs: 6,
        sm: 1.65,
        alignContent: "center",
        justifyItems: "center",
    }

    return <div>
        <MGrid container spacing={mGridSpacing}>
            <MGrid xs={mGridXS}>
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

        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {"Settings and info"}
                </AccordionSummary>
                <AccordionDetails>
                    <h3>Key:</h3>
                    <MGrid
                        container
                        spacing={{ xs: 0.5, md: 1 }}
                        marginBottom={1}
                    >
                        <MGrid {...t} style={{[`@>*`]: {margin: "auto"}}}>
                            <GridItem item={colors.Node} />
                            <div>Node</div>
                        </MGrid>
                        <MGrid {...t}>
                            <GridItem item={colors.Wall} />
                            <div>Wall</div>
                        </MGrid>
                        <MGrid {...t}>
                            <GridItem item={colors.Start} />
                            <div>Start</div>
                        </MGrid>
                        <MGrid {...t}>
                            <GridItem item={colors.End} />
                            <div>End</div>
                        </MGrid>
                        <MGrid {...t}>
                            <GridItem item={colors.Path} />
                            <div>Path</div>
                        </MGrid>
                        <MGrid {...t}>
                            <GridItem item={colors.Explored} />
                            <div>Explored</div>
                        </MGrid>
                        <MGrid {...t}>
                            <GridItem item={colors.Removed} />
                            <div>Removed</div>
                        </MGrid>
                    </MGrid>
                    <MGrid
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ md: 4 }}
                    >
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
                    </MGrid>
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
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    {`What is A Star??`}
                </AccordionSummary>
                <AccordionDetails>
                    {
                        AStarContent.map((par, i) => {
                            return <p key={i}>
                                {par}
                            </p>
                        })
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {`Why I'm fascinated with A Star?`}
                </AccordionSummary>
                <AccordionDetails>
                    <ol>
                        {
                            AStarContent2.map((par, i) => {
                                return <li style={{ margin: "1em" }} key={i}>
                                    {par}
                                </li>
                            })
                        }
                    </ol>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
}