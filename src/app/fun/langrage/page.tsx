import LagrangeCanvas from "@/components/algorithms/lagrangeCanvas/_lagrangeCanvas";
import YoutubeEmbed from "@/components/external/youtube/_embed";
import Lazy from "@/components/lazy/_lazy";
import { points, ps1, ps2 } from "@/content/fun/hobbies/lagrange/Lagrange";

export default function Langrage() {
    return <Lazy>
        <h1>Langrage</h1>

        <LagrangeCanvas/>

        <h2>Secret sharing</h2>
        {
            ps1.map((p, i) => <p key={i}>{p}</p>)
        }

        <ol>
            {
                points.map((p, i) => <li key={i}>{p}</li>)
            }
        </ol>

        {
            ps2.map((p, i) => <p key={i}>{p}</p>)
        }

        <h4>{`Here's a video that explains the above`}</h4>
        <YoutubeEmbed videoID={"K54ildEW9-Q"}/>
    </Lazy>
}