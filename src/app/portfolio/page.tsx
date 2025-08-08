import GroupPage from "@/components/group/groupPage/_groupPage";
import { GroupViewArray } from "@/components/group/_groupTypes";
import { chalk } from "./chalk/page.preview";
import { IPF } from "./ipf/page.preview";
import { LBU } from "./lbu/page.preview";
import { Shreem } from "./shreem/page.preview";
import { FAH } from "./fah/page.preview";
import { RAI } from "./R-AI/page.preview";
import { oldWebsite } from "./oldWebsite/page.preview";
import { Nomad } from "./passwordManager/page.preview";
import { THIS } from "./websiteNeo/page.preview";
import { HAL } from "./hal/page.preview";
import { OSM } from "./osm/page.preview";
import { Drawing } from "./drawingProgram/page.preview";
import { ToDo } from "./toDo/page.preview";
import { AS } from "./a-star/page.preview";
import { Sudoku } from "./sudoku/page.preview";
import { Langrage } from "./langrage/page.preview";
import { Penumbra } from "./penumbra/page.preview";


export const metadata = {
    title: "Portfolio",
}

const irlContent: GroupViewArray = [
    IPF,
    Shreem,
    HAL,
];

const volunteering: GroupViewArray = [
    FAH,
    LBU,
    OSM,
];

const personalProjects: GroupViewArray = [
    RAI,
    oldWebsite,
    THIS,
];

const collegeWork: GroupViewArray = [
    Nomad,
    Drawing,
    ToDo,
];

const demos: GroupViewArray = [
    AS,
    Sudoku,
    Langrage,
];

const games: GroupViewArray = [
    Penumbra,
    chalk,
];

export default function Portfolio() {
    return <GroupPage
        title={"Portfolio"}
        groups={
            [
                {
                    title: "Previous Work",
                    subtitle: "Places I worked at",
                    groups: irlContent,
                },
                {
                    title: "Volunteering",
                    subtitle: "My volunteer experiences and initiatives",
                    groups: volunteering,
                },
                {
                    title: "Demos and Games",
                    subtitle: "Interactive pages",
                    groups: [...games, ...demos],
                },
                {
                    title: "Personal Projects",
                    subtitle: "Projects I did in my spare time",
                    groups: personalProjects,
                },
                {
                    title: "University Projects",
                    subtitle: "Things I made at university",
                    groups: collegeWork,
                },
            ]
        }
    />
}