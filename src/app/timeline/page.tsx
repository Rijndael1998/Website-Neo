import Lazy from "@/components/lazy/_lazy";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator, { timelineSeparatorClasses } from '@mui/lab/TimelineSeparator';
import TimelineConnector, { timelineConnectorClasses } from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot, { timelineDotClasses } from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { ifTrue } from "@/components/reactUtils";

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
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TerminalIcon from '@mui/icons-material/Terminal';
import ComputerIcon from '@mui/icons-material/Computer';

import style from "./timeline.module.scss";

const timelineItems: Array<[string, any, React.ReactNode?]> = [
    [
        "2000", "Born in Poland.", <CakeIcon />
    ],
    [
        "2007", "I moved to the UK.", <FlightLandIcon />
    ],
    [
        "2011", "I got my first computer.", <ComputerIcon />
    ],
    [
        "2013", "I wrote my first computer program.", <TerminalIcon />
    ],
    [
        "2015", "I started running a volunteer relay for human rights.", <LanIcon />
    ],
    [
        "2016", "I started going to Thomas Rotherham College.", <SchoolOutlinedIcon />
    ],
    [
        "2016", "I started hosting for HAL Systems LTD.", <WorkOutlineIcon />
    ],
    [
        "2017", "I won the math contest bronze award.", <EmojiEventsOutlinedIcon />
    ],
    [
        "2018", "I was awarded the Bacon award for complex algorithms.", <EmojiEventsOutlinedIcon />
    ],
    [
        "2018", "I went to Leeds Beckett University and became a student representative for the student body.", <SchoolIcon />
    ],
    [
        "2019", "I wrote my own 2d physics engine. Used it to make Chalk.", <SportsEsportsIcon />
    ],
    [
        "2020", "I participated in supporting Folding @ Home.", <DeveloperBoardIcon />
    ],
    [
        "2021", "I graduated with a First in Cyber Security.", <GradeIcon />
    ],
    [
        "2021", "I started working for Shreem (my first 'real' job!).", <WorkIcon />
    ],
    [
        "2022", "I started working for IPF.", <WorkIcon />
    ],
    [
        "2023", "Developing on AWS certification.", <EmojiEventsIcon />
    ],
    [
        "2024", "Passed AWS Practitioner exam.", <EmojiEventsIcon /> // slight white lie: I didn't even start learning yet but given how long this is taking to merge into main, i probably will by the time I'm finished
    ],
];


export default function TimelinePage() {
    return <Lazy>
        <h1>Timeline</h1>
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
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
                    width: "0.5ex",
                },
                [`& .${timelineItemClasses.root} .${timelineDotClasses.root}`]: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: "transparent",
                    border: "unset",
                    margin: 0,
                    padding: 0,
                },
            }}
        >
            {
                timelineItems.map((item, index) => {
                    const [left, right, dot] = item;
                    return <TimelineItem key={item[0] + item[1]} className={style.item}>
                        <TimelineOppositeContent className={style.left}>
                            {left}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <div className={style.dot}>
                                    {dot}
                                </div>
                            </TimelineDot>
                            {ifTrue(index < timelineItems.length - 1, <TimelineConnector />)}
                        </TimelineSeparator>
                        <TimelineContent>
                            {right}
                        </TimelineContent>
                    </TimelineItem>
                })
            }
        </Timeline>
    </Lazy >
}