import YoutubeEmbed from "@/components/external/youtube/_embed";
import GalleryImage from "@/components/imageGallery/galleryImage";
import Lazy from "@/components/lazy/_lazy";
import { points, ps1, ps2 } from "@/content/portfolio/lagrange/Lagrange";
import Link from "next/link";

export default function Langrage() {
    return <Lazy>
        <h1>Langrage</h1>

        <GalleryImage src="/fun/lagrange.png" aspectRatio={1} />

        <h2 style={{ paddingTop: "2rem" }}>Demo</h2>
        <p>
            The interactive, full screen demo is <Link href="/fun/hobbies/lagrenge/index.html">here</Link>.
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

        <p>
            {
                `These polynomials, and therefore Shamir’s Secret Sharing, can be used in a `
            }
            <Link href={"/fun/passwordManager"}>password manager</Link>
            {
                ` to distribute the master key safely among a group of select individuals. The master key 
                could be divided into parts and given to different individuals. When needed, the key can 
                be reconstructed by gathering a certain threshold of these parts. This ensures the security 
                of the password manager as the master key is not stored in one place, therefore significantly 
                decreasing the chance of the key getting exposed to potential threats.
                `
            }
        </p>

        <h4>{`Here's a video that explains the above`}</h4>
        <YoutubeEmbed videoID={"K54ildEW9-Q"} />
    </Lazy>
}