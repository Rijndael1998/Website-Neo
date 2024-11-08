import YoutubeEmbed from "@/components/external/youtube/_embed";
import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";
import { Paragraphs, MirrorTitle, MirrorSynopsis } from "@/content/blog/mirrorsEdge";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: MirrorTitle,
    description: MirrorSynopsis,
};

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
            capCol="#64a3c6"
        />

        <p>
            {Paragraphs[0]}
        </p>

        <LazyImage
            aspectRatio={2540 / 1440}
            src={"/blog/mirrors_edge/screenshots/screenshot2.jpg"}
            alt="Simple architecture mixed with only tones of green."
            cap
            capCol="#64bd2e"
        />

        <p>
            {Paragraphs[1]}
        </p>

        <LazyImage
            aspectRatio={2540 / 1440}
            src={"/blog/mirrors_edge/screenshots/screenshot11.jpg"}
            alt="Mirror's Edge: bright primary colors, their shades and simple room designs."
            cap
            capCol="#dd9b04"
        />

        <p>
            {Paragraphs[2]}
        </p>

        <LazyImage
            aspectRatio={2540 / 1440}
            src={"/blog/mirrors_edge/screenshots/screenshot31.jpg"}
            alt="Mirror's Edge menu screen. Notice how shadows are blue, not gray."
            cap
        />

        <p>
            {Paragraphs[3]}
        </p>

        <LazyImage
            aspectRatio={1920 / 1080}
            src={"/blog/mirrors_edge/renders/1.png"}
            alt="My first render."
            cap
        />

        <p>
            {Paragraphs[4]}
        </p>

        <LazyImage
            aspectRatio={1920 / 1080}
            src={"/blog/mirrors_edge/renders/3.png"}
            alt="My second attempt at a render."
            cap
        />

        <p>
            {Paragraphs[5]}
        </p>

        <LazyImage
            aspectRatio={1530 / 1076}
            src={"/blog/mirrors_edge/blender/compositor.png"}
            alt="My stylistic color correction compositing process."
            cap
        />

        <p>
            {Paragraphs[6]}
        </p>

        <LazyImage
            aspectRatio={909 / 901}
            src={"/blog/mirrors_edge/blender/hdri.png"}
            alt="HDRI Result"
            cap
        />
        <LazyImage
            aspectRatio={2424 / 787}
            src={"/blog/mirrors_edge/blender/world.png"}
            alt="My world shader"
            cap
        />

        <p>
            {Paragraphs[7]}
        </p>

        <LazyImage
            aspectRatio={1}
            src={"/blog/mirrors_edge/blender/raw.png"}
            alt="Raw Render"
            cap
        />

        <LazyImage
            aspectRatio={1}
            src={"/blog/mirrors_edge/blender/final.png"}
            alt="Processed Render"
            cap
        />

        <p>
            {Paragraphs[8]}
        </p>

        <YoutubeEmbed videoID={"AOaenVRjcTE"}/>
    </Lazy>
}