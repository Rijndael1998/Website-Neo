import Image from "next/image";
import styles from "./portfolioImage.module.scss";

export default function PortfolioImage({image}: {image: string}) {
    return <div className={styles.image}> {/* TODO: Implement alts */}
        <Image src={image} fill={true} alt={image}/>
    </div>
}