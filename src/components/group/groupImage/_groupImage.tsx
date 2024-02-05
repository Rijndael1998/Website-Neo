import Image from "next/image";
import styles from "./groupImage.module.scss";

export default function GroupImage({image}: {image: string}) {
    return <div className={styles.image}> {/* TODO: Implement alts */}
        <Image src={image} fill={true} style={{"objectFit": "cover"}} alt={image}/>
    </div>
}