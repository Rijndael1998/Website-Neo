import AStarComponent from "@/components/algorithms/a*/a*Comp";
import Lazy from "@/components/lazy/_lazy";
import { AStarContent } from "@/content/fun/a*/A*";

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
    </Lazy>
}