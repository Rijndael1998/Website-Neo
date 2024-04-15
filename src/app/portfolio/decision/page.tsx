import Lazy from "@/components/lazy/_lazy";
import { deciderP1, questions } from "@/content/portfolio/decider/Decider";

export default function Decider() {
    return <Lazy>
        <h1>Decision</h1>
        <p>{deciderP1}</p>

        <h3>Questions</h3>
        
    </Lazy>
}