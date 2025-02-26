"use server";

import { executeCommand } from "@/components/serverUtils";
import { GitCopy } from "./gitCopy";

export type StringOrNull = string | null;

let short: StringOrNull;
let long: StringOrNull;

export default async function Git() {
    short ??= await executeCommand("git rev-parse --short HEAD");
    long ??= await executeCommand("git rev-parse HEAD");

    if (short == null || long == null)
        return <></>;

    return <GitCopy short={short} long={long} />
}