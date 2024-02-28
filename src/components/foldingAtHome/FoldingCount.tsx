"use client";

import { useEffect, useState } from "react";

export default function FoldingCount() {
    const [p, setP] = useState<number>();
    const [users, setUsers] = useState<number>();
    const [rank, setRank] = useState<number>();
    const [score, setScore] = useState<number>();
    const [wus, setWus] = useState<number>();

    const formatter = new Intl.NumberFormat();
    function formatNumber(int: number) {
        return formatter.format(int);
    }

    // TODO: Fix this hack
    useEffect(() => {
        (async () => {
            const url = "https://api.foldingathome.org/user/rijn.dev"
            const call = await fetch(url);
            const rijn = await call.json();
            setUsers(rijn["users"]);
            setRank(rijn["rank"]);
            setScore(rijn["score"]);
            setWus(rijn["wus"]);
        })()
    }, []);

    useEffect(() => {
        if (!users || !rank)
            return;

        const dp = Math.pow(10, 2);
        const percentage = Math.round(dp * 100 * rank / users) / dp;
        setP(percentage);
    }, [users, rank]);

    return <>
        {p && users && rank && score && wus ?
            <span
                className="help"
                title={`I'm placed ${formatNumber(rank)} out of ${formatNumber(users)}. I completed ${formatNumber(wus)} work units granting me a total of ${formatNumber(score)} points.`}>
                {`I'm currently in the top ${p}% of contributors.`}
            </span> : <></>
        }
    </>
}