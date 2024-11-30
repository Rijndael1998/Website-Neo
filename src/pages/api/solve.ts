import type { NextApiRequest, NextApiResponse } from 'next'
import { solutions } from './advent_of_code/solutions';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
    maxDuration: 2,
}

export type PuzzleSolution = {
    solution: string,
} | {
    error: string,
}

export type AdventOfCodeRequest = {
    day: number,
    message: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PuzzleSolution>
) {
    console.log(req.body);
    let request: AdventOfCodeRequest;
    try {
        request = JSON.parse(req.body) as AdventOfCodeRequest;

    } catch (e) {
        res.status(500).json({ error: `Parse error: ${String(e)}` });
        return;
    }

    let solution: string;
    try {
        console.log(request);

        request.day = Number(request.day);
        request.message = String(request.message);

        console.log(request);
        solution = solutions[request.day](request.message);

    } catch (e) {
        res.status(500).json({ error: String(e) });
        return;
    }

    res.status(200).json({ solution });
}