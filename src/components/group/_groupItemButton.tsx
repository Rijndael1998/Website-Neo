"use client";

import { Button } from "@mui/material";
import { GroupItemIconType } from "./_groupItem";

export type GroupItemButtonProps = {
    text: string,
    portfolioURL: string,
    Icon: GroupItemIconType,
}

export default function GroupItemButton({ text, portfolioURL, Icon }: GroupItemButtonProps) {
    return <Button
        onClick={(e) => e.stopPropagation()}
        href={portfolioURL}
        aria-label={text}
        variant="contained"
        endIcon={<Icon fontSize="inherit" />}
    >
        {text}
    </Button>
}