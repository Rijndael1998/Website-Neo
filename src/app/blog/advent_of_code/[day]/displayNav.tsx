import { ifTruthyElse } from "@/components/reactUtils";
import { Divider, Stack, Typography } from "@mui/material";
import { DAY } from "../day";
import Link from "next/link";

export default function DisplayNav({ day }: { day: number }) {
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
                    day - 1 > 0,
                    <Link href={`./${day - 1}`}>Previous</Link>,
                    "Previous"
                )}
            </Typography>
            <Typography>
                <Link href={"."}>Return to list</Link>
            </Typography>
            <Typography>
                {ifTruthyElse(
                    day + 1 <= DAY,
                    <Link href={`./${day + 1}`}>Next</Link>,
                    "Next"
                )}
            </Typography>
        </Stack>
        <Divider orientation="horizontal" />
    </>
}