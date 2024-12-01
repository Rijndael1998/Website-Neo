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
    hasError: false,
} | {
    error: string,
    hasError: true,
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
    const request = req.body as AdventOfCodeRequest;

    let solution: string;
    try {
        solution = solutions[Number(request.day)](String(request.message));

    } catch (e) {
        res.status(500).json({ error: String(e), hasError: true });
        return;
    }

    res.status(200).json({ solution, hasError: false });
}