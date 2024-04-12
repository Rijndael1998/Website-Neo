import Typing from "@/components/typing/typing";
import styles from "./title.module.scss";

export default function Title({ text }: { text: string }) {
    return <>
        <div className={styles.wrapper}>
            <h1>{
                text.split(" ").map((word, index) => {
                    return <span className={styles.span} key={index}>
                        <Typing text={word} interval={100} iterCount={14} />
                    </span>
                })
            }
            </h1>
        </div>
    </>
} 