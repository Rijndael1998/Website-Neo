import AStarComponent from "@/components/algorithms/aStar/aStarComp";
import Lazy from "@/components/lazy/_lazy";

export default function A_Star() {
    return <Lazy doNothing>
        <h1 style={{ margin: "1em 0" }}>
            A Star Algorithm
        </h1>

        <AStarComponent />
    </Lazy>
}