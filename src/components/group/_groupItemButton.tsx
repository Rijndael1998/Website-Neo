"use client";

import { Button, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { GroupItemIconType } from "./_groupItem";

export type GroupItemButtonProps = {
    text: string,
    portfolioURL: string,
    Icon: GroupItemIconType,
}

export default function GroupItemButton({text, portfolioURL, Icon}: GroupItemButtonProps) {
    return <Button
        href={portfolioURL}
        aria-label={text}
        variant="contained"
        endIcon={<Icon fontSize="inherit" />}
    >
        {text}
    </Button>
}