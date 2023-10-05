import classNames from "classnames";
import Image from "next/image";
import styles from "./imageGallery.module.scss";

export type GalleryImageProps = {
    show?: boolean,
    src: string,
    alt?: string,
}

export default function GalleryImage({ show, src, alt }: GalleryImageProps) {
    return <div className={classNames(styles.images, show && styles.show)}>
        <Image style={{ objectFit: "cover" }} src={src} alt={alt ?? ""} fill quality={100} />
    </div>
}