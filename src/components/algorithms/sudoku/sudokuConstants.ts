import { PaperTypeMap } from "@mui/material/Paper/Paper";

export const paperProps: Partial<PaperTypeMap["props"]> = {
    elevation: 3,
    sx: {
        padding: "1em",
        margin: "1em",
    },
};