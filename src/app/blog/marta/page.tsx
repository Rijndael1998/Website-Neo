import ImageGallery from "@/components/imageGallery/_imageGallery";
import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";
import { content, citations } from "@/content/portfolio/marta/Marta";

export const metadata = {
    title: "Marta Fundraiser's",
    description: content[0] as string,
};

const horizontal_aspect_ratio = 2016 / 1512;
const vertical_aspect_ratio = 1512 / 2016;

function Gallery() {
    return <ImageGallery
        aspectRatio={horizontal_aspect_ratio}
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
                aspectRatio: vertical_aspect_ratio,
            },
            {
                src: "/fun/marta/v3.jpg",
                aspectRatio: vertical_aspect_ratio,
            },
            {
                src: "/fun/marta/v4.jpg",
                aspectRatio: vertical_aspect_ratio,
            },
            {
                src: "/fun/marta/v5.jpg",
                aspectRatio: vertical_aspect_ratio,
            },
        ]}
    />
}

export default function Marta() {
    return <Lazy>
        <h1>{"Marta Fundraiser's"}</h1>

        <Gallery />

        <p>{content[0]}</p>
        <p>{content[1]}</p>
        <p>{content[2]}</p>
        <p>{content[3]}</p>

        <LazyImage src="/fun/marta/v1.jpg" aspectRatio={vertical_aspect_ratio} />
        <p>{content[4]}</p>

        <h3>References</h3>
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