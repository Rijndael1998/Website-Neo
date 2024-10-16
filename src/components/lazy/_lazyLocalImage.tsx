import Image, { StaticImageData } from "next/image";
import styles from "./lazy.module.scss";
import classNames from "classnames";
import { LazyImageProps } from "./_lazyImage";
import { DEFAULT_IMAGE_QUALITY } from "./defaults";
import LazyImageCaption from "./_lazyImageCaption";

export type LocalLazyImageProps = Omit<Omit<LazyImageProps, "aspectRatio">, "src"> & { src: StaticImageData };

export default function LazyLocalImage({ src, alt, className, cap, capCol, quality }: LocalLazyImageProps) {
    return <div className={styles.lazyImageWrapper}>
        <div className={classNames(styles.lazyImage, className)}>
            <Image style={{ width: "100%", height: "auto" }} alt={alt ?? ""} quality={quality ?? DEFAULT_IMAGE_QUALITY} src={src} placeholder="blur"/>
        </div>
        <LazyImageCaption cap={cap} capCol={capCol} alt={alt} />
    </div>
}

