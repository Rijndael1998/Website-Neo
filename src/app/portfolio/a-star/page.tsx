import AStarComponent from "@/components/algorithms/aStar/aStarComp";
import Lazy from "@/components/lazy/_lazy";

export const metadata = {
    title: "A* Algorithm",
    description: "A* is a popular pathfinding algorithm in computer science. It was introduced by Peter Hart, Nils Nilsson, and Bertram Raphael in 1968. A* forms the basis of many pathfinding algorithms used in video games and web-based maps.",
}

export default function A_Star() {
    return <Lazy doNothing>
        <h1 style={{ margin: "1em 0" }}>
            A Star Algorithm
        </h1>

        <AStarComponent />
    </Lazy>
}