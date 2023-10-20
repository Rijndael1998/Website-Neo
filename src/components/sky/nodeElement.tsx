import styles from "./nodeElementRender.module.scss";

export default function SkyElementRender({x, y, extra, m}: {x: number, y: number, extra?: string, m?: number}) {
    return <div style={{ "backgroundColor": "teal", "left": x, "top": y }} className={styles.nodeElementRender}>
        <p>{`${x}, ${y}, ${extra ?? ""}`}</p>
    </div>
}