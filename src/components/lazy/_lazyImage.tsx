import Image from "next/image";
import styles from "./lazy.module.scss";

export default function LazyImage({ aspectRatio, src, alt }: { aspectRatio: number, src: string, alt: string }) {
    return <div className={styles.lazyImage} style={{ aspectRatio }}>
        <Image style={{ width: "100%", height: "100%" }} alt={alt} quality={100} fill src={src} />
    </div>
}

