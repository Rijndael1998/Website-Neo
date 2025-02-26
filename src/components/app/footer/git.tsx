import { executeCommand } from "@/components/serverUtils";
import ToolTip from "@/components/toolTip/_toolTip";
import { Typography } from "@mui/material";


let short: string | null;
let long: string | null;

export default async function Git() {
    short ??= await executeCommand("git rev-parse --short HEAD");
    long ??= await executeCommand("git rev-parse HEAD");

    if (short == null || long == null)
        return <></>;

    return <ToolTip tip={long}>
        <Typography variant="caption">
            {short}
        </Typography>
    </ToolTip>
}