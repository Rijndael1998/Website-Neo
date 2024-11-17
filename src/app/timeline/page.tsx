// imports
import * as React from 'react';
import { ifTrue } from "@/components/reactUtils";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { Container, Grid2, Stack, Typography } from "@mui/material";

// icons
import CakeIcon from '@mui/icons-material/Cake';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolIcon from '@mui/icons-material/School';
import GradeIcon from '@mui/icons-material/Grade';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LanIcon from '@mui/icons-material/Lan';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TerminalIcon from '@mui/icons-material/Terminal';
import ComputerIcon from '@mui/icons-material/Computer';


const timelineItems: Array<[year: string, desc: any, icon: OverridableComponent<SvgIconTypeMap> & { muiName: string }]> = [
    [
        "2000", "Born in Poland.", CakeIcon
    ],
    [
        "2007", "I moved to the UK.", FlightLandIcon
    ],
    [
        "2011", "I got my first computer.", ComputerIcon
    ],
    [
        "2013", "I wrote my first computer program.", TerminalIcon
    ],
    [
        "2015", "I started running a volunteer relay for human rights.", LanIcon
    ],
    [
        "2016", "I started going to Thomas Rotherham College.", SchoolOutlinedIcon
    ],
    [
        "2016", "I started hosting for HAL Systems LTD.", WorkOutlineIcon
    ],
    // [
    //     "2017", "I won the math contest bronze award.", EmojiEventsOutlinedIcon
    // ],
    // [
    //     "2018", "I was awarded the Bacon award for complex algorithms.", EmojiEventsOutlinedIcon
    // ],
    [
        "2018", "I went to Leeds Beckett University and became a student representative for the student body.", SchoolIcon
    ],
    [
        "2019", "I wrote my own 2d physics engine. Used it to make Chalk.", SportsEsportsIcon
    ],
    [
        "2020", "I participated in supporting Folding @ Home.", DeveloperBoardIcon
    ],
    [
        "2021", "I graduated with a First in Cyber Security.", GradeIcon
    ],
    [
        "2021", "I started working for Shreem (my first 'real' job!).", WorkIcon
    ],
    [
        "2022", "I started working for IPF.", WorkIcon
    ],
    [
        "2023", "Developing on AWS certification.", EmojiEventsIcon
    ],
    // [
    //     "2024", "Passed AWS Practitioner exam.", EmojiEventsIcon // slight white lie: I didn't even start learning yet but given how long this is taking to merge into main, i probably will by the time I'm finished
    // ],
];

const color = "#ababab";
const yearW = 1;
const iconW = 1;

export const metadata = {
    title: "Timeline",
    description: "Shows the rough outlines from the beginning of my life till now.",
}

export default function TimelinePage() {
    return <Container maxWidth="md" disableGutters>
        <h1>Timeline</h1>
        <Stack>
            {
                timelineItems.map((item, index) => {
                    const [year, desc, Icon] = item;
                    return <>
                        <Grid2 container>
                            <Grid2 size={yearW}>
                                <Typography variant='overline'>
                                    {year}
                                </Typography>
                            </Grid2>

                            <Grid2 size={iconW}>
                                <Icon />
                            </Grid2>

                            <Grid2 size={12 - yearW - iconW}>
                                <Typography>
                                    {desc}
                                </Typography>
                            </Grid2>
                            {
                                ifTrue(
                                    index + 1 != timelineItems.length,
                                    <>
                                        <Grid2 size={yearW} sx={{ height: "1ch" }} />
                                        <Grid2 size={iconW} sx={{ height: "1ch" }} />
                                    </>
                                )
                            }
                        </Grid2>
                    </>
                })
            }
        </Stack>
    </Container >
}