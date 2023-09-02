import Typing from "@/components/typing/typing";
import styles from "./title.module.scss";
import Image from 'next/image'

export default function Title({ text }: { text: string }) {
    return <>
        <div className={styles.wrapper}>
            {/* <div>
                <Image src="/favico.png" fill={true} alt="logo" />
            </div> */}
            <h1><Typing text={"Lukasz Baldyga"} interval={100} iterCount={14} /></h1>
        </div>
    </>
} 