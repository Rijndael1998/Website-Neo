import styles from "./hamburger.module.scss";

export default function Hamburger({crossed, onClick}: {crossed: boolean, onClick: () => void}) {
    return <div onClick={() => onClick()} className={`${styles.hamburger} ${crossed ? styles.crossed : ""}`}>
        <div/><div/><div/>
    </div>
}