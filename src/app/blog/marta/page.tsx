import Lazy from "@/components/lazy/_lazy";
import LazyLocalImage from "@/components/lazy/_lazyLocalImage";
import { content, citations } from "@/content/portfolio/marta/Marta";
import * as images from "./images";
import { Gallery } from "./gallery";

export const metadata = {
    title: "Marta Fundraiser's",
    description: content[0] as string,
};

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