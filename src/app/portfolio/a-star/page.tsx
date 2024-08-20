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

        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    {`What is A Star??`}
                </AccordionSummary>
                <AccordionDetails>
                    {
                        AStarContent.map((par, i) => {
                            return <p key={i}>
                                {par}
                            </p>
                        })
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {`Why I'm fascinated with A Star?`}
                </AccordionSummary>
                <AccordionDetails>
                    <ol>
                        {
                            AStarContent2.map((par, i) => {
                                return <li style={{ margin: "1em" }} key={i}>
                                    {par}
                                </li>
                            })
                        }
                    </ol>
                </AccordionDetails>
            </Accordion>
        </div>
    </Lazy>
}