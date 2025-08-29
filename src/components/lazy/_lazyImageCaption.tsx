import { ifTruthy } from "../reactUtils";
import styles from "./lazy.module.scss";
import { LazyImageProps } from "./_lazyImage";

export type LazyImageCaptionProps = {
    cap: LazyImageProps["cap"],
    capCol: LazyImageProps["capCol"],
    alt: LazyImageProps["alt"],
    capRight?: LazyImageProps["capRight"],
}

export default function LazyImageCaption({ cap, capCol, alt, capRight }: LazyImageCaptionProps) {
    return ifTruthy(
        cap,
        <p className={styles.lazyCaption} style={{ color: capCol, textAlign: capRight ? "right" : "left" }}>
            {cap === true ? alt : cap}
        </p>
    );
}