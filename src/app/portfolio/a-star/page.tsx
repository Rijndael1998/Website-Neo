import AStarComponent from "@/components/algorithms/aStar/aStarComp";
import Lazy from "@/components/lazy/_lazy";
import { AStarContent, AStarContent2 } from "@/content/portfolio/aStar/AStar";

export default function A_Star() {
    return <Lazy>
        <h1>
            A Star Algorithm
        </h1>

        <AStarComponent />

        <h2>What is A Star?</h2>

        {
            AStarContent.map((par, i) => {
                return <p key={i}>
                    {par}
                </p>
            })
        }

        <h2>{`Why I'm fascinated with A Star?`}</h2>

        <ol>
            {
                AStarContent2.map((par, i) => {
                    return <li key={i}>
                        {par}
                    </li>
                })
            }
        </ol>
    </Lazy>
}