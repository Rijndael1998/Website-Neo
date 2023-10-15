import AStarComponent from "@/components/algorithms/a*/a*Comp";
import Lazy from "@/components/lazy/_lazy";
import { AStarContent, AStarContent2 } from "@/content/fun/a*/A*";

export default function A_Star() {
    return <Lazy>
        <h1>
            A* Algorithm
        </h1>

        <AStarComponent />

        <h2>What is A*?</h2>

        {
            AStarContent.map((par, i) => {
                return <p key={i}>
                    {par}
                </p>
            })
        }

        <h2>{`Why I'm fascinated with A*?`}</h2>

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