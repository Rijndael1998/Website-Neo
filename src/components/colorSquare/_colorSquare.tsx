import styles from "./colorSquare.module.scss";

export type ColorSquareProps = {
    color: string,
}

export default function ColorSquare({color}: ColorSquareProps) {
    return <span className={styles.cs}><span style={{backgroundColor: color}}></span></span>
}