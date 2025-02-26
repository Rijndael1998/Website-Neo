"use client";

import { Typography } from "@mui/material";
import { StringOrNull } from "./git";
import { CopyToClipboard } from "@/components/util";
import ToolTip from "@/components/toolTip/_toolTip";


export function GitCopy({ short, long }: { short: StringOrNull, long: StringOrNull }) {
    if (short == null || long == null)
        return <></>;

    return <ToolTip tip={long}>
        <Typography variant="caption" onClick={() => long ? CopyToClipboard(long) : undefined}>
            {short}
        </Typography>
    </ToolTip>
}