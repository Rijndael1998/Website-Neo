"use server";

import ImageGallery from "@/components/imageGallery/_imageGallery";
import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";
import { content, citations } from "@/content/portfolio/marta/Marta";

export default async function Marta() {
    let i = 0; // this shouldn't be working... 🤯

    return <Lazy>
        <h1>Marta</h1>

        <p>{content[i++]}</p>
        <p>{content[i++]}</p>
        <p>{content[i++]}</p>
        <ImageGallery
            aspectRatio={2016 / 1512}
            images={[
                {
                    src: "/fun/marta/1.jpg",
                },
                {
                    src: "/fun/marta/2.jpg",
                },
                {
                    src: "/fun/marta/3.jpg",
                },
                {
                    src: "/fun/marta/4.jpg",
                },
                {
                    src: "/fun/marta/v2.jpg",
                    aspectRatio: 1512 / 2016,
                },
                {
                    src: "/fun/marta/v3.jpg",
                    aspectRatio: 1512 / 2016,
                },
                {
                    src: "/fun/marta/v4.jpg",
                    aspectRatio: 1512 / 2016,
                },
                {
                    src: "/fun/marta/v5.jpg",
                    aspectRatio: 1512 / 2016,
                },
            ]}
        />
        <p>{content[i++]}</p>

        <LazyImage src="/fun/marta/v1.jpg" alt="" aspectRatio={1512 / 2016}/>
        <p>{content[i++]}</p>

        <h3>Referances</h3>
        <ul>
            {
                citations.map((item, index) =>
                    <li key={index}>
                        <p>{item}</p>
                    </li>
                )
            }
        </ul>

    </Lazy>
}