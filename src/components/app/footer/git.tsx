"use server";

import { GitCopy } from "./gitCopy";
import { Box } from "@mui/material";
import { GitStatus, GitStatusToColor, Status } from "./gitStatus";



let gitStatus: GitStatus;

export default async function Git() {
    gitStatus ??= new GitStatus();
    await gitStatus.ConsiderUpdate();

    const short = gitStatus.gitHashShort ?? gitStatus.status == Status.INVALID ? "invalid" : "unset";
    const long = gitStatus.gitHash ?? gitStatus.status == Status.INVALID ? "this is not a valid git repository" : "this repository hasn't been set yet";

    if (gitStatus.status == Status.INVALID || gitStatus.status == Status.UNSET)
        return <></>;

    return <div>
        <Box sx={{
            borderRadius: "100%",
            backgroundColor: GitStatusToColor(gitStatus.status),
            height: "1ch",
            aspectRatio: 1,
            margin: "auto 0.3em auto auto",
            display: "inline-block",
        }} />
        <GitCopy short={short} long={long} />
    </div>
}