import { Box } from "@mui/material"

export type DiceType = {
    showSide: number,
}

export default function Dice({ showSide }: DiceType) {
    return <Box>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
    </Box>
}