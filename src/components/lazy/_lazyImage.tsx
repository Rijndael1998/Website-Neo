import Image from "next/image";
import styles from "./lazy.module.scss";
import classNames from "classnames";
import { DEFAULT_IMAGE_QUALITY } from "./defaults";
import LazyImageCaption from "./_lazyImageCaption";
import { JSX } from "react";

export type LazyImageProps = {
    aspectRatio: number,
    src: string,
    alt?: string,
    className?: string
    cap?: JSX.Element | string | boolean,
    capCol?: string,
    capRight?: boolean
    quality?: number,
    pixelated?: boolean,
}

export default function LazyImage({ aspectRatio, src, alt, className, cap, capCol, capRight, quality, pixelated }: LazyImageProps) {
    return <div className={styles.lazyImageWrapper}>
        <div className={classNames(styles.lazyImage, className)} style={{ aspectRatio }}>
            <Image
                style={{ width: "100%", height: "100%", imageRendering: pixelated ? "pixelated" : undefined }}
                alt={alt ?? ""}
                quality={quality ?? DEFAULT_IMAGE_QUALITY}
                fill
                src={src}
            />
        </div>
        <LazyImageCaption cap={cap} capCol={capCol} alt={alt} capRight={capRight} />
    </div>
}

