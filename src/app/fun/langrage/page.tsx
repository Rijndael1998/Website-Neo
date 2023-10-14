import YoutubeEmbed from "@/components/external/youtube/_embed";
import Lazy from "@/components/lazy/_lazy";
import { points, ps1, ps2 } from "@/content/fun/hobbies/lagrange/Lagrange";
import Link from "next/link";

export default function Langrage() {
    return <Lazy>
        <h1>Langrage</h1>

        <h2>Demo</h2>
        <p>
            The interactive, full screen demo is <Link href="/fun/hobbies/lagrenge/index.html">here</Link>
        </p>

        <p>Tap to create new points. Drag to move existing points.</p>

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
        <YoutubeEmbed videoID={"K54ildEW9-Q"} />
    </Lazy>
}