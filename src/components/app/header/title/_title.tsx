import Link from "next/link";
import styles from "./title.module.scss";

export default function Title({ text }: { text: string }) {
    return <Link href={"/"} style={{ color: "white", "textDecoration": "none" }}>
        <div className={styles.wrapper}>
            <h2>
                {
                    text.split(" ").map((word, index) => {
                        return <span className={styles.span} key={index}>
                            {word}
                        </span>
                    })
                }
            </h2>
        </div>
    </Link>
} 