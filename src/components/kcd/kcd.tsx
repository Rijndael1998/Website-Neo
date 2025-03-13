"use client";

import { Stack } from "@mui/material";
import Dice from "./dice";

export default function KCD() {
    return <Stack>
        <Dice showSide={1}/>
    </Stack>
}