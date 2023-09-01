import Typing from "@/components/typing/typing";
import styles from "./title.module.scss";

export default function Title({text}: {text: string}) {
    return <div className={styles.wrapper}>
        <h1><Typing text={"Lukasz Baldyga"} interval={100} iterCount={14} /></h1>
    </div>
} 