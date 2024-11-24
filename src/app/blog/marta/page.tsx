import ImageGallery from "@/components/imageGallery/_imageGallery";
import Lazy from "@/components/lazy/_lazy";
import LazyLocalImage from "@/components/lazy/_lazyLocalImage";
import { content, citations } from "@/content/portfolio/marta/Marta";
import * as images from "./images";

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
                src: images.i1,
            },
            {
                src: images.i2,
            },
            {
                src: images.i3,
            },
            {
                src: images.i4,
            },
            {
                src: images.v2,
                aspectRatio: vertical_aspect_ratio,
            },
            {
                src: images.v3,
                aspectRatio: vertical_aspect_ratio,
            },
            {
                src: images.v4,
                aspectRatio: vertical_aspect_ratio,
            },
            {
                src: images.v5,
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

        <LazyLocalImage src={images.v1}  />
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