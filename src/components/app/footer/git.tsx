"use server";

import { executeCommand } from "@/components/serverUtils";
import { GitCopy } from "./gitCopy";
import { Box } from "@mui/material";

enum Status {
    INVALID = "Invalid Git",
    BEHIND = "Behind",
    CURRENT = "Current",
    UNSET = "Unset",
    DEV = "Dev",
}

class GitStatus {
    lastUpdate!: number;
    gitHash?: string;
    gitHashShort?: string;
    status: Status = Status.UNSET;
    branchStatus!: [number, number];
    branch!: string;

    constructor() {
        this.Update();
    }

    async Update() {
        this.lastUpdate = Date.now();

        // get branch name
        this.branch = (await executeCommand("git branch | grep \*") ?? " * !! unknown !!").replace(" *", "");

        // update git repo
        await executeCommand("git fetch");

        // hash
        const hash = await executeCommand("git rev-parse HEAD");
        this.gitHash = hash ?? "";
        this.gitHashShort = this.gitHash.slice(0, 7);

        // check if the current branch is in dev
        if (this.branch != "main")
            return this.status = Status.DEV;

        // check if current commit is the last
        const branch = await executeCommand("git rev-list --left-right --count origin/$(git rev-parse --abbrev-ref HEAD)...HEAD");
        if (hash === null || branch === null)
            return this.status = Status.INVALID;

        const [behind, ahead] = branch.split(" ").filter(v => v.length > 0).map(v => Number.parseInt(v));
        this.branchStatus = [behind, ahead];

        if (behind > 0)
            return this.status = Status.BEHIND;

        return this.status = Status.CURRENT;
    }

    async ConsiderUpdate() {
        if (Date.now() - this.lastUpdate > 1000 * 60 * 60) // ms in sec * sec in min * min in hour
            await this.Update();
    }
}

function GitStatusToColor(status: Status): string {
    switch(status) {
        case Status.UNSET:
        case Status.INVALID:
            return "#606";

        case Status.CURRENT:
            return "#0f0";

        case Status.DEV:
            return "#00f";

        case Status.BEHIND:
            return "#f00";
    }
}

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