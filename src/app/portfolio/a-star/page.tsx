import AStarComponent from "@/components/algorithms/aStar/aStarComp";
import Lazy from "@/components/lazy/_lazy";

export default function A_Star() {
    return <Lazy>
        <h1>
            A Star Algorithm
        </h1>

        <AStarComponent />
    </Lazy>
}