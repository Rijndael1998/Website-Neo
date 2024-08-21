import AStarComponent from "@/components/algorithms/aStar/aStarComp";
import Lazy from "@/components/lazy/_lazy";
import { AStarContent, AStarContent2 } from "@/content/portfolio/aStar/AStar";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function A_Star() {
    return <Lazy>
        <h1>
            A Star Algorithm
        </h1>

        <p>
            Tap the grid to start!
        </p>

        <AStarComponent />
    </Lazy>
}