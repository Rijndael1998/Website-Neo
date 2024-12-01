import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

export type FileRequest = {
    day: number,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    console.log(req.body);

    let fileContents: string;
    try {
        const request = (req.body as FileRequest).day;

        if(![0, 1].includes(request))
            throw Error("Request out of bounds");

        fileContents = await fs.readFile(process.cwd() + `/advent_of_code/inputs/${request}.txt`, 'utf8');

    } catch (e) {
        res.status(500).send("No data or malformed request");
        return;
    }

    res.status(200).send(fileContents);
}