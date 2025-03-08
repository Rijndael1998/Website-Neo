"use client";

import { GroupPreviewContent } from "./_groupTypes";
import { Grid2 } from "@mui/material";

export default function GroupItemWrapper({ children, portfolio }: { children: React.ReactNode, portfolio: GroupPreviewContent }) {
    return <Grid2
        size={{
            xs: 12 / 1,
            sm: 12 / 2,
            md: 12 / 3,
            lg: 12 / 4,
            xl: 12 / 5,
        }}

        onClick={(e) => console.log(e)}
    >

        {children}
    </Grid2>
}