// imports
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator, { timelineSeparatorClasses } from '@mui/lab/TimelineSeparator';
import TimelineConnector, { timelineConnectorClasses } from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot, { timelineDotClasses } from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import { ifTrue } from "@/components/reactUtils";
import style from "./timeline.module.scss";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { Container } from "@mui/material";

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

export const metadata = {
    title: "Timeline",
    description: "Shows the rough outlines from the beginning of my life till now.",
}

export default function TimelinePage() {
    return <Container maxWidth="md">
        <h1>Timeline</h1>
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}`]: {
                    display: "grid",
                    gridTemplateColumns: "6ch 8ch auto",
                    gridTemplateRows: "1fr",
                },
                [`& .${timelineOppositeContentClasses.root}, & .${timelineContentClasses.root}`]: {
                    width: "100%",
                    height: "100%",
                },
                [`& .${timelineOppositeContentClasses.root} p`]: {
                    textAlign: "center",
                },
                [`& .${timelineOppositeContentClasses.root} p, & .${timelineContentClasses.root} p`]: {
                    display: "block",
                    background: "brick",
                    margin: "auto 0",
                },
                [`& .${timelineItemClasses.root}:before`]: {
                    display: "none",
                },
                [`& *`]: {
                    transition: "all 0.5s ease",
                },
                [`& .${timelineSeparatorClasses.root}`]: {
                    position: "relative",
                    padding: "0 1ch",
                    flex: "unset",
                    minWidth: `8ch`,
                    minHeight: `8ch`,
                },
                [`& .${timelineConnectorClasses.root}`]: {
                    background: color,
                    width: "0.5ex",
                },
                [`& .${timelineItemClasses.root} `]: {
                    position: "relative",
                },
                [`& .${timelineItemClasses.root} .${timelineDotClasses.root}`]: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,

                    background: "transparent",
                    border: "none",
                    margin: "auto",
                },
                [`& .${timelineItemClasses.root} .${timelineDotClasses.root}`]: {
                    margin: "auto",
                    // color: "black",
                    background: "transparent",
                    border: "0.5ex solid",
                    borderColor: color,
                    padding: "1.2ex",
                },
            }}
        >
            {
                timelineItems.map((item, index) => {
                    const [left, right, Dot] = item;
                    return <TimelineItem key={item[0] + item[1]} className={style.item}>
                        <TimelineOppositeContent className={style.left}>
                            <p>
                                {left}
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <Dot />
                            </TimelineDot>
                            {ifTrue(index < timelineItems.length - 1, <TimelineConnector />)}
                        </TimelineSeparator>
                        <TimelineContent>
                            <p>
                                {right}
                            </p>
                        </TimelineContent>
                    </TimelineItem>
                })
            }
        </Timeline>
    </Container >
}