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

        const filePath = `${process.cwd()}/src/pages/api/advent_of_code/inputs/${request}.txt`;
        console.log(`getting ${filePath}`);

        fileContents = await fs.readFile(filePath, 'utf8');
        console.log(fileContents);
    } catch (e) {
        res.status(500).send("No data or malformed request");
        return;
    }

    res.status(200).send(fileContents);
}