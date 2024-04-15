import Lazy from "@/components/lazy/_lazy";
import { deciderP1 } from "@/content/portfolio/decider/Decider";

export default function Decider() {
    return <Lazy>
        <h1>Decider</h1>
        <p>{deciderP1}</p>
    </Lazy>
}