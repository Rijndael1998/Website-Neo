"use server";

import { GitCopy } from "./gitCopy";
import { Box } from "@mui/material";
import { GitStatus, Status } from "./gitStatus";



let gitStatus: GitStatus;

export default async function Git() {
    gitStatus ??= new GitStatus();
    await gitStatus.ConsiderUpdate();

    const { long, short } = gitStatus.ToHashObject();

    if (gitStatus.status == Status.INVALID || gitStatus.status == Status.UNSET)
        return <></>;

    console.log(gitStatus)

    return <div>
        <Box sx={{
            borderRadius: "100%",
            backgroundColor: gitStatus.ToColor(),
            height: "1ch",
            aspectRatio: 1,
            margin: "auto 0.3em auto auto",
            display: "inline-block",
        }} />
        <GitCopy short={short} long={long} />
    </div>
}