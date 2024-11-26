import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import styles from "./imageGallery.module.scss";
import { ifTruthyElse } from "../reactUtils";

export type GalleryImageProps = {
    show?: boolean,
    src: ImageProps["src"],
    alt?: string,
    aspectRatio?: number,
}


export default function GalleryImage({ show, src, alt, aspectRatio }: GalleryImageProps) {
    const GII = <GalleryImageInner show={show} src={src} alt={alt} />
    return ifTruthyElse(
        aspectRatio,
        <figure style={{ aspectRatio }} className={classNames(styles.container, styles.standAlone)}>
            {GII}
        </figure>,
        GII,
    )
}

export function GalleryImageInner({ show, src, alt }: GalleryImageProps) {
    return <div className={classNames(styles.images, show && styles.show)}>
        <Image style={{ objectFit: "cover" }} src={src} alt={alt ?? ""} fill quality={100} />
    </div>
}