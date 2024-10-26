import Image from "next/image";
import styles from "./groupImage.module.scss";

/* TODO: Implement alts */
export default function GroupImage({ image }: { image: string }) {
    return <div className={styles.imageWrapper}>
        <div className={styles.image}>
            <Image src={image} fill={true} alt={image} style={{objectFit: "cover"}}/>
        </div>
    </div>

}