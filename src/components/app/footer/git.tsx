"use server";

import { executeCommand } from "@/components/serverUtils";
import { GitCopy } from "./gitCopy";
import { Box } from "@mui/material";

class GitStatus {
    lastUpdate!: number;
    gitHash?: string;
    gitHashShort?: string;
    status: "Invalid Git" | "Behind" | "Current" | "Unset" = "Unset";
    branchStatus!: [number, number];

    constructor() {
        this.Update();
    }

    async Update() {
        // update git repo
        await executeCommand("git fetch");

        this.lastUpdate = Date.now();

        // hash
        const hash = await executeCommand("git rev-parse HEAD");
        this.gitHash = hash ?? "";
        this.gitHashShort = this.gitHash.slice(0, 7);

        // check if current commit is the last
        const branch = await executeCommand("git rev-list --left-right --count origin/$(git rev-parse --abbrev-ref HEAD)...HEAD");
        if (hash === null || branch === null)
            return this.status = "Invalid Git";

        const [behind, ahead] = branch.split(" ").filter(v => v.length > 0).map(v => Number.parseInt(v));
        this.branchStatus = [behind, ahead];

        if (behind > 0)
            return this.status = "Behind";

        this.status = "Current";
    }

    async ConsiderUpdate() {
        if (Date.now() - this.lastUpdate > 1000 * 60 * 60) // ms in sec * sec in min * min in hour
            await this.Update();
    }
}

let gitStatus = new GitStatus();

export default async function Git() {
    await gitStatus.ConsiderUpdate();

    if (gitStatus.status == "Invalid Git" || gitStatus.status == "Unset")
        return <></>;

    return <div>
        <Box sx={{
            borderRadius: "100%",
            backgroundColor: gitStatus.status == "Behind" ? "#f00" : "#0f0",
            height: "1ch",
            aspectRatio: 1,
            margin: "auto 0.3em auto auto",
            display: "inline-block",
        }} />
        <GitCopy short={gitStatus.gitHashShort} long={gitStatus.gitHash} />
    </div>
}