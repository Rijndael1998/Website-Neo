import { executeCommand } from "@/components/serverUtils";

export enum Status {
    INVALID = "Invalid Git",
    BEHIND = "Behind",
    CURRENT = "Current",
    UNSET = "Unset",
    DEV = "Dev",
}

export class GitStatus {
    lastUpdate!: number;
    gitHash?: string;
    gitHashShort?: string;
    status: Status = Status.UNSET;
    branchStatus?: [number, number];
    branch?: string;

    constructor() {
        this.Update();
    }

    async Update() {
        this.lastUpdate = Date.now();

        // get branch name
        this.branch = (await executeCommand("git branch | grep \\*") ?? " * !! unknown !!").replace(" *", "");

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

    ToColor(): string {
        switch (this.status) {
            case Status.UNSET:
            case Status.INVALID:
                return "#00o";

            case Status.CURRENT:
                return "#0f0";

            case Status.DEV:
                return "#66f";

            case Status.BEHIND:
                return "#f00";
        }
    }

    ToHashObject() {
        if (this.status == Status.UNSET)
            return { long: "Still working...", short: "..." };

        if (this.status == Status.INVALID)
            return { long: "Invalid repository", short: "Invalid" };

        return { long: this.gitHash!, short: this.gitHashShort! };
    }

    ToShort() {
        return this.ToHashObject().short;
    }

    ToLong() {
        return this.ToHashObject().long;
    }
}
