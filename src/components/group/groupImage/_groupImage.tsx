import Image, { ImageProps } from "next/image";
import styles from "./groupImage.module.scss";

export type GroupImageProps = { 
    image: ImageProps["src"], 
    logo?: boolean,
    alt?: string,
}

export default function GroupImage({ image, logo, alt }: GroupImageProps) {
    return <div className={styles.image}>
        <Image
            src={image}
            fill={true}
            alt={alt ?? ""}
            style={{ objectFit: logo ? "contain" : "cover" }}
            quality={90}
            sizes="368px" />
    </div>
}