import ImageGallery from "@/components/imageGallery/_imageGallery";
import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";
import LazyList from "@/components/lazy/_lazyList";
import * as Content from "@/content/portfolio/hobbies/Hobbies";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Hobbies',
    description: "Sometimes I like to take a break from programming. I enjoy making 3d art, music and other random things.",
};

export default function Hobbies() {
    return <Lazy>
        <h1>Music</h1>

        {/* TODO: Please remove this hack */}
        <p style={{ marginBottom: "0" }}>
            {Content.MusicDesc1}
        </p>

        <LazyList items={Content.MusicICanPlay} />

        <p>
            {Content.MusicDesc2}
        </p>

        <LazyImage
            aspectRatio={3840 / 1644}
            src="/fun/hobbies/music/fl_studio.png"
            alt="FL Studio Screenshot"
        />

        {/* TODO: Please remove this hack */}
        <p style={{ marginBottom: "0" }}>
            {Content.MusicDesc3}
        </p>

        <audio controls src="/fun/hobbies/music/crab_rave.mp3" />

        <p>
            {Content.MusicDesc4}
        </p>

        <h1>{Content.AITitle}</h1>
        <p>
            {
                Content.AIContent1
            }
        </p>

        <h3>{Content.AISub1}</h3>
        <p>
            {
                Content.AIContent2
            }
        </p>


        <ImageGallery
            aspectRatio={469 / 928}
            images={
                Content.AIImagesPrompts.map((item) => {
                    return { src: item }
                })
            }
        />

        <p>
            {
                Content.AIContent3
            }
        </p>

        <h3>{Content.AISub2}</h3>
        <p>
            {
                Content.AIContent4
            }
        </p>

        <ImageGallery
            aspectRatio={574 / 1281}
            images={
                ["/fun/hobbies/ai/mod1.png", "/fun/hobbies/ai/mod2.png"].map((item) => {
                    return { src: item }
                })
            }
        />

        <p>
            {
                Content.AIContent5
            }
        </p>

        <LazyImage alt="Inpainting" aspectRatio={574 / 1281} src="/fun/hobbies/ai/modfinal.png" />

        <h3>{Content.AISub3}</h3>

        <p>
            {
                Content.AIContent6
            }
        </p>

        <LazyImage alt="Final Picture" aspectRatio={1} src="/fun/crab_rave.png" />
    </Lazy>
}