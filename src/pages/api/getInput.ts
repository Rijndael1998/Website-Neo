import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

export type FileRequest = {
    day: number,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    let fileContents: string;
    try {
        const request = Number((req.body as FileRequest).day);

        if(request > 25 || request < 0 || Number.isNaN(request) || !Number.isSafeInteger(request))
            throw Error("Request out of bounds");

        const filePath = `${process.cwd()}/src/pages/api/advent_of_code/inputs/${request}.txt`;

        fileContents = await fs.readFile(filePath, 'utf8');
    } catch (e) {
        res.status(500).send("No data or malformed request");
        return;
    }

    res.status(200).send(fileContents);
}