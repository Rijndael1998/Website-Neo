import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";
import { Paragraphs, MirrorTitle } from "@/content/blog/mirrorsEdge";

export default function MirrorsEdge() {
    return <Lazy>
        <h1>
            {MirrorTitle}
        </h1>
        <LazyImage
            aspectRatio={1}
            src={"/blog/mirrors_edge/1x1 partial logo.png"}
            alt={"My own render of the Mirror's Edge: Catalyst world in the style of Mirror's Edge's menu screen."}
            cap
        />

        <p>
            {Paragraphs[0]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot2.jpg"}
            alt="Notice the simple architecture mixed with only tones of green."
            cap
        />

        <p>
            {Paragraphs[1]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot11.jpg"}
            alt="Mirror's Edge: bright primary colors, their shades and simple room designs."
            cap
        />

        <p>
            {Paragraphs[2]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot9.jpg"}
            alt={`"Runner vision" is a core navigational aid. It manifests as a red object helping to direct the player in the right direction through chaos.`}
            cap
        />

        <p>
            {Paragraphs[3]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot6.jpg"}
            alt="Vibrant rooftop with amazing lighting. Note the choice of primary colors and their tones."
            cap
        />

        <p>
            {Paragraphs[4]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot10.jpg"}
            alt="The vibrant orange clashes with the shades of blue under the shadow of the city. This creates an increasingly somber atmosphere as Faith flees from her pursuers."
            cap
        />

        <p>
            {Paragraphs[5]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot4.jpg"}
            alt="Faith's hand shown as player slides down building roof"
            cap
        />

        <p>
            {Paragraphs[6]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot22.jpg"}
            alt="Underground sewer showing how lights guide the player. Notice where the first ladder is placed in the proximity to the first light."
            cap
        />

        <p>
            {Paragraphs[7]}
        </p>

        <LazyImage
            aspectRatio={2540/1440}
            src={"/blog/mirrors_edge/screenshots/screenshot8.jpg"}
            alt="Dark alley with lights guiding your way."
            cap
        />

        <p>
            {Paragraphs[8]}
        </p>
    </Lazy>
}