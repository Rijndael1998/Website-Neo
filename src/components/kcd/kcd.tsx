"use client";

import { Stack } from "@mui/material";
import Dice, { DiceTypeValidSides } from "./dice";
import { useState } from "react";

export default function KCD() {
    const [side, setSide] = useState<DiceTypeValidSides>(1);

    return <Stack sx={{height: "100vh"}}>
        <Dice showSide={side}/>
    </Stack>
}