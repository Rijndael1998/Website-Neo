import Image from "next/image";
import styles from "./groupImage.module.scss";

/* TODO: Implement alts */
export default function GroupImage({ image, logo }: { image: string, logo?: boolean }) {
    return <div className={styles.image}>
        <Image
            src={image}
            fill={true}
            alt={image}
            style={{ objectFit: logo ? "contain" : "cover" }}
            quality={90}
            unoptimized />
    </div>
}