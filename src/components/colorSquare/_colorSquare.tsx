import styles from "./colorSquare.module.scss";

export type ColorSquareProps = {
    style: string,
}

export default function ColorSquare({style}: ColorSquareProps) {
    return <span className={styles.cs}><span className={style}></span></span>
}