import { ContainerTypeMap } from "@mui/material";
import { PaperTypeMap } from "@mui/material/Paper/Paper";

export type elementPropsType = {
    paper: Partial<PaperTypeMap["props"]>,
    container: Partial<ContainerTypeMap["props"]>,
};

export const elementProps: elementPropsType = {
    paper: {
        elevation: 3,
        sx: {
            padding: "1em",
            margin: "0",
        },
    },
    container: {
        maxWidth: "sm",
        sx: {
            padding: "0",
            fontSize: "0.75rem",
        }
    },
};