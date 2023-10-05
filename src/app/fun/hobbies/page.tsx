"use client";

import Lazy from "@/components/lazy/_lazy";
import LazyCollapse from "@/components/lazy/_lazyCollapse";
import LazyImage from "@/components/lazy/_lazyImage";
import LazyList from "@/components/lazy/_lazyList";
import LazyRow from "@/components/lazy/_lazyRow";
import { AIContent1, AIContent2, AIContent3, AIContent4, AIContent5, AIContent6, AIImagesPrompts, AISub1, AISub2, AISub3, AITitle, MusicDesc1, MusicDesc2, MusicDesc3, MusicDesc4, MusicICanPlay } from "@/content/Hobbies";

export default function Hobbies() {
    return <Lazy>
        <h1>Music</h1>

        {/* TODO: Please remove this hack */}
        <p style={{ marginBottom: "0" }}>
            {MusicDesc1}
        </p>

        <LazyList items={MusicICanPlay} />

        <p>
            {MusicDesc2}
        </p>

        <LazyImage
            aspectRatio={3840 / 1644}
            src="/fun/hobbies/music/fl_studio.png"
            alt="FL Studio Screenshot"
        />

        {/* TODO: Please remove this hack */}
        <p style={{ marginBottom: "0" }}>
            {MusicDesc3}
        </p>

        <audio controls src="/fun/hobbies/music/crab_rave.mp3" />

        <p>
            {MusicDesc4}
        </p>

        <h1>{AITitle}</h1>
        <p>
            {
                AIContent1
            }
        </p>

        <h3>{AISub1}</h3>
        <p>
            {
                AIContent2
            }
        </p>

        {/* <LazyCollapse>
            <LazyRow aspectRatio={469 / 928} >
                {
                    AIImagesPrompts.map((item) => {
                        return <LazyImage key={item} aspectRatio={469 / 928} src={item} alt={"Image prompt"} />
                    })
                }
            </LazyRow>
        </LazyCollapse> */}

        <p>
            {
                AIContent3
            }
        </p>

        <h3>{AISub2}</h3>
        <p>
            {
                AIContent4
            }
        </p>

        <LazyImage alt="Final Picture" aspectRatio={574 / 1281} src="/fun/hobbies/ai/mod1.png" />
        <LazyImage alt="Final Picture" aspectRatio={574 / 1281} src="/fun/hobbies/ai/mod2.png" />

        <p>
            {
                AIContent5
            }
        </p>

        <LazyImage alt="Final Picture" aspectRatio={574 / 1281} src="/fun/hobbies/ai/modfinal.png" />

        <h3>{AISub3}</h3>

        <p>
            {
                AIContent6
            }
        </p>

        <LazyImage alt="Final Picture" aspectRatio={1} src="/fun/crab_rave.png" />
    </Lazy>
}