import { ifTruthyElse } from "@/components/reactUtils";
import { Divider, Stack, Typography } from "@mui/material";
import { DAY } from "../day";
import Link from "next/link";

export default function DisplayNav({ day }: { day: number }) {
    const enable = day <= DAY && day > 0;
    const enablePrev = enable && day - 1 > 0;
    const enableNext = enable && day + 1 <= DAY;

    return <>
        <Divider orientation="horizontal" /><Stack
            direction={"row"}
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Typography>
                {ifTruthyElse(
                    enablePrev,
                    <Link href={`./${day - 1}`}>Previous</Link>,
                    "Previous"
                )}
            </Typography>
            <Typography>
                <Link href={"."}>Return to list</Link>
            </Typography>
            <Typography>
                {ifTruthyElse(
                    enableNext,
                    <Link href={`./${day + 1}`}>Next</Link>,
                    "Next"
                )}
            </Typography>
        </Stack>
        <Divider orientation="horizontal" />
    </>
}