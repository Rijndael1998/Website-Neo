import classNames from "classnames";
import Image from "next/image";
import styles from "./imageGallery.module.scss";

export type GalleryImageProps = {
    show?: boolean,
    src: string,
    alt?: string,
    aspectRatio?: number,
}


export default function GalleryImage({ show, src, alt, aspectRatio }: GalleryImageProps) {
    return <>
        {
            !aspectRatio &&
            <GalleryImageInner show={show} src={src} alt={alt} />
        }
        {
            aspectRatio &&
            <figure style={{ aspectRatio }} className={classNames(styles.container, styles.standAlone)}>
                <GalleryImageInner show={show} src={src} alt={alt} />
            </figure>
        }
    </>
}

export function GalleryImageInner({ show, src, alt }: GalleryImageProps) {
    return <div className={classNames(styles.images, show && styles.show)}>
        <Image style={{ objectFit: "cover" }} src={src} alt={alt ?? ""} fill quality={100} />
    </div>
}