import { ifTruthy } from "../reactUtils";
import styles from "./lazy.module.scss";
import { LazyImageProps } from "./_lazyImage";

export type LazyImageCaptionProps = {
    cap: LazyImageProps["cap"],
    capCol: LazyImageProps["capCol"],
    alt: LazyImageProps["alt"],
}

export default function LazyImageCaption({ cap, capCol, alt }: LazyImageCaptionProps) {
    return ifTruthy(
        cap,
        <p className={styles.lazyCaption} style={{ color: capCol }}>
            {cap === true ? alt : cap}
        </p>
    );
}