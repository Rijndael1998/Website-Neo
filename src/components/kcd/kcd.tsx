"use client";

import { Button, Stack } from "@mui/material";
import Dice, { DiceTypeValidSides } from "./dice";
import { useState } from "react";

export default function KCD() {
    const [side, setSide] = useState<DiceTypeValidSides>(1);

    const setSideFn = () => {
        if (side >= 6)
            return setSide(1);

        setSide(side + 1);
    };

    return <>
        <Stack>
            <Dice showSide={side} />
            <Dice showSide={side} />
            <Dice showSide={side} />
        </Stack>

        <Button onClick={setSideFn}>
            Add
        </Button>
    </>
}