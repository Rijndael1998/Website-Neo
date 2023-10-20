import Image from "next/image";
import styles from "./lazy.module.scss";
import classNames from "classnames";

export type LazyImageProps = { 
    aspectRatio: number, 
    src: string, 
    alt: string, 
    className?: string 
}

export default function LazyImage({ aspectRatio, src, alt, className }: LazyImageProps) {
    return <div className={classNames(styles.lazyImage, className)} style={{ aspectRatio }}>
        <Image style={{ width: "100%", height: "100%" }} alt={alt} quality={100} fill src={src} />
    </div>
}

