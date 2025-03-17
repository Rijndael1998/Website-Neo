"use client";

import { Button, Stack } from "@mui/material";
import Dice, { DiceType, DiceTypeValidSides } from "./dice";
import { useState } from "react";

export default function KCD() {
    const [side, setSide] = useState<DiceTypeValidSides>(1);
    const [size, setSize] = useState<DiceType["size"]>();

    const setSideFn = () => {
        if (side >= 6)
            return setSide(1);

        setSide(side + 1);
    };

    const setSizeFn = () => {
        if(size)
            return setSize(undefined);

        setSize("small")
    }

    const sx = { margin: "auto", overflowX: "scroll", overflowY: "visible" };

    return <>

        <Dice showSide={side} size={size} />

        <Stack direction={"row"} gap={1}>
            <Button onClick={setSideFn} variant="contained">
                Add
            </Button>

            <Button onClick={setSizeFn} variant="contained">
                Size: {size ?? "default"}
            </Button>
        </Stack>
    </>
}