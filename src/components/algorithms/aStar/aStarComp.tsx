"use client";

import styles from "./styles/aStar.module.scss";
import colors from "./styles/aStarStyleMap.module.scss";
import NumUpDown from "@/components/input/numUpDown/_numUpDown";
import Grid from "../grid/_grid";
import { useEffect, useState } from "react";
import { GridState } from "../grid/gridState"
import AStar, { CanContinueReason } from "@/components/algorithms/aStar/_aStar";

import { AStarResult } from "@/components/algorithms/aStar/utils/aStarResult";
import { AStarStyleMap } from "@/components/algorithms/aStar/styles/aStarStyleMap";
import { AStarStates } from "@/components/algorithms/aStar/utils/aStarStates.enum";
import { AStarStages } from "@/components/algorithms/aStar/utils/aStarStages.enum";
import GridItem from "../grid/gridItem/_gridItem";
import { Accordion, AccordionDetails, AccordionSummary, Alert, Button, ButtonOwnProps, Card, CardProps, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Stack, Switch, Typography } from "@mui/material";
import * as React from 'react';
import { default as MGrid } from '@mui/material/Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ifTrue } from "@/components/reactUtils";
import ToolTip from "@/components/toolTip/_toolTip";
import { elementPropsType } from "../sudoku/sudokuConstants";

import AStarText from "./aStarText.mdx";

function generateGridState(width: number, height: number) {
    return new GridState(width, height, AStarStyleMap, AStarStates.Node)
}

function buttonVariant(v: boolean): ButtonOwnProps["variant"] {
    return v ? "contained" : "outlined";
}

const containerProps: elementPropsType["container"] = {
    sx: {
        padding: "1em 0",
        overflowX: "auto",
        maxWidth: "calc(100vw - 9em)",
        width: "max-content",
        margin: "auto",
    },
};

const paperProps: elementPropsType["paper"] = {
    elevation: 1,
};

export default function AStarComponent() {
    const initialSize = 20;
    const maxSize = 22;

    const [callback, setCallback] = useState<(x: number, y: number) => void>();
    const [AS, setAS] = useState<AStar>();

    const [state, setState] = useState<GridState<AStarStates>>();
    const [stage, setStage] = useState<AStarStages>(AStarStages.Start);
    const [canStep, setCanStep] = useState<boolean>(false);
    const [canStepReason, setCanStepReason] = useState<AStarResult["canContinueReason"]>();
    const [extraStyle, setExtraStyle] = useState<AStarResult["gridExtraStyle"]>();
    const [auto, setAuto] = useState<boolean>(false);

    const [InputWidth, setInputWidth] = useState<number>(initialSize);
    const [InputHeight, setInputHeight] = useState<number>(initialSize);

    const applyResult = (result: AStarResult) => {
        if (result.gridStage !== undefined)
            setStage(result.gridStage);

        setState(result.gridState);
        setCanStep(result.canContinue);
        setCanStepReason(result.canContinueReason);
        setExtraStyle(result.gridExtraStyle);
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

    const mGridProps = {
        sx: { "*": { margin: "auto", textAlign: "center" } },
        size: {
            xs: 6,
            sm: 1.65,
        },
        alignContent: "center",
        justifyItems: "center",
    }

    const defaultCardProps: CardProps = {
        sx: {
            "&": { padding: "0.5ch", marginTop: "1ex", marginBottom: "1ex" },
            "&>*": { margin: "0" },
            "&>*:first-of-type": { marginLeft: "1ch", marginBottom: "0.5ex" }
        },
        variant: "outlined",
    }

    const smoothOperator = { "&, *": { transition: "all 0.5s ease" } };
    const reason = (canStepReason && canStepReason[0]) ?? "All ok! Ready to step."
    const preciseDistance = (canStepReason && canStepReason.length > 1) ? canStepReason[1] : undefined;
    const distance = preciseDistance !== undefined ? Math.round(preciseDistance * 10) / 10 : undefined;

    return <div>
        {/* This could do with better and more specific tweaking */}
        <FormControl sx={smoothOperator}>
            <FormLabel id="demo-radio-buttons-group-label">Tile Selection</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue={AStarStages.Start}
                onChange={(_, v) => setStage(Number.parseInt(v))}
                value={stage}
            >
                <Stack spacing={1} direction={"row"} width={"100%"}>
                    <FormControlLabel value={AStarStages.Start} control={<Radio />} label="Start" />
                    <FormControlLabel value={AStarStages.End} control={<Radio />} label="End" />
                    <FormControlLabel value={AStarStages.Wall} control={<Radio />} label="Wall" />
                </Stack>
            </RadioGroup>
        </FormControl>

        <Alert sx={smoothOperator} severity={canStepReason ? (canStepReason[0] == CanContinueReason.FOUND ? "success" : "warning") : "info"}>
            {reason}
            {
                ifTrue(
                    distance !== undefined,
                    <>
                        {" Distance: "}
                        <ToolTip tip={`Exactly ${preciseDistance} squares`}>
                            <span>
                                {`${distance} squares.`}
                            </span>
                        </ToolTip>
                    </>
                )
            }
        </Alert>

        <Container {...containerProps}>
            <Paper {...paperProps}>
                <Grid className={styles.grid} state={state} callback={callback} />
            </Paper>
        </Container>

        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Settings and info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card {...defaultCardProps}>
                        <h3>Key</h3>
                        <MGrid
                            container
                            spacing={{ xs: 0.5, md: 1 }}
                            marginBottom={1}
                        >
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.Node} />
                                <div>Node</div>
                            </MGrid>
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.Wall} />
                                <div>Wall</div>
                            </MGrid>
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.Start} />
                                <div>Start</div>
                            </MGrid>
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.End} />
                                <div>End</div>
                            </MGrid>
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.Path} />
                                <div>Path</div>
                            </MGrid>
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.Explored} />
                                <div>Explored</div>
                            </MGrid>
                            <MGrid {...mGridProps}>
                                <GridItem item={colors.Removed} />
                                <div>Removed</div>
                            </MGrid>
                        </MGrid>
                    </Card>
                    <Card {...defaultCardProps}>
                        <h3>Make a new grid</h3>
                        <MGrid
                            sx={{ "&": { margin: "2ex auto" } }}
                            container
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 2 }}
                        >
                            <MGrid size={{ sm: 3 }} sx={{ "*": { height: "100%", width: "100%" } }}>
                                <NumUpDown
                                    label="Width"
                                    start={initialSize}
                                    min={initialSize}
                                    max={maxSize}
                                    callback={(num) => setInputWidth(num)}
                                />
                            </MGrid>
                            <MGrid size={{ sm: 3 }} sx={{ "*": { height: "100%", width: "100%" } }}>
                                <NumUpDown
                                    label="Height"
                                    start={initialSize}
                                    min={initialSize}
                                    max={maxSize}
                                    callback={(num) => setInputHeight(num)}
                                />
                            </MGrid>
                            <MGrid size={{ sm: 6 }} sx={{ "*": { display: "block !important", height: "100%", marginLeft: "auto !important" } }}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        const newAS = new AStar(generateGridState(InputWidth, InputHeight));
                                        setAS(newAS);
                                        setStage(AStarStages.Start);
                                        setState(newAS.state);
                                    }}>
                                    New Grid
                                </Button>
                            </MGrid>
                        </MGrid>
                    </Card>
                    <Card {...defaultCardProps}>
                        <h3>Execute algorithm step by step</h3>
                        <MGrid
                            container
                            spacing={2}
                            sx={{ "&": { textAlign: "center" } }}
                        >
                            <MGrid size={{ xs: 12, sm: 4 }}>
                                <FormControlLabel
                                    label="Auto step"
                                    control={
                                        <Switch
                                            checked={auto}
                                            onClick={() => { setAuto(!auto); auto && AS && applyResult(AS.reset()) }}
                                        />
                                    } />

                            </MGrid>
                            <MGrid size={{ xs: 12, sm: 4 }}>
                                <Button
                                    variant={buttonVariant(canStep)}
                                    disabled={auto || canStepReason !== undefined}
                                    onClick={() => { refreshState() }}>
                                    Step
                                </Button>
                            </MGrid>
                            <MGrid size={{ xs: 12, sm: 4 }}>
                                <Button
                                    color="warning"
                                    disabled={auto}
                                    onClick={() => AS && applyResult(AS.reset())}>
                                    Reset Steps
                                </Button>
                            </MGrid>
                        </MGrid>
                    </Card>
                </AccordionDetails>
            </Accordion>
            <AStarText />
        </div>
    </div>
}