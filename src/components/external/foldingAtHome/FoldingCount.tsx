"use server";

import ToolTip from "@/components/toolTip/_toolTip";

export default async function FoldingCount() {
    const formatter = new Intl.NumberFormat();
    function formatNumber(int: number) {
        return formatter.format(int);
    }

    const url = "https://api.foldingathome.org/user/rijn.dev";
    let users;
    let rank;
    let score;
    let wus;
    let dp;
    let p;

    try {
        const call = await fetch(url, {cache: "no-store"})
        const rijn = await call.json();
        users = rijn["users"];
        rank = rijn["rank"];
        score = rijn["score"];
        wus = rijn["wus"];
        dp = Math.pow(10, 2);
        p = Math.round(dp * 100 * rank / users) / dp;
    } catch {
        // if this fails, then the tooltip just won't show which is ok
    }

    return <>
        {p && users && rank && score && wus ?
            <ToolTip
                tip={`I'm placed ${formatNumber(rank)} out of ${formatNumber(users)}. I completed ${formatNumber(wus)} work units granting me a total of ${formatNumber(score)} points.`}>
                <>
                    {`I'm currently in the top ${p}% of contributors.`}
                </>
            </ToolTip> : <></>
        }
    </>
}