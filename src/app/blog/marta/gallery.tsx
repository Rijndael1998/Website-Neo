import ImageGallery from "@/components/imageGallery/_imageGallery";
import * as images from "./images";

const horizontal_aspect_ratio = 2016 / 1512;
const vertical_aspect_ratio = 1512 / 2016;

export function Gallery() {
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