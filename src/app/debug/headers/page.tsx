import { Container } from "@mui/material";
import { headers } from "next/headers";

export const metadata = {
    title: "So, no head?",
    description: "💢📱🪃💥 🛹🦵💥"
}

export default async function Headers() {
    const headersList = headers();
    const pairs: Array<[key: string, value: string]> = [];

    (await headersList).forEach((value, key) => {
        if (key != "x-forwarded-for")
            pairs.push([key, value]);
        else
            pairs.push([key, "redacted"]);
    });

    const pairStrings = pairs.sort().reduce<string>((prev, curr) => {
        return `${prev}\n${curr[0]}: ${curr[1]}`;
    }, "");

    return <Container>
        <h1>Headers</h1>
        <code>
            {pairStrings}
        </code>
    </Container>
}