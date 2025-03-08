"use server";

import fsPromises from 'fs/promises';
import path from 'path';
import { exec } from "child_process";
import { promisify } from "util";

// Fetching data from the JSON file
export async function getFile(getFilePath: string) {
    const filePath = path.join(process.cwd(), getFilePath);
    return (await fsPromises.readFile(filePath)).toString();
}

// execute a command on server
const execPromise = promisify(exec);
export async function executeCommand(command: string) {
    console.log("running command:", command);

    try {
        // Run the hardcoded shell command
        const { stdout, stderr } = await execPromise(command);

        if (stderr) {
            console.error("Error executing command:", stderr);
            return null;
        }

        // Return the standard output (success)
        const out = stdout.trim();
        console.log("got: ", out)
        return out;

    } catch (error) {
        console.error("Command execution failed:", error);
        return null;
    }
}