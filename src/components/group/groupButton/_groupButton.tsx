import NavLink from "@/components/app/nav/navLinkCollection/navLink/_navLink";
import styles from "./button.module.scss";

export default function GroupButton({ text, url }: { text: string, url: string }) {
    return <div className={styles.button}>
        <NavLink href={url}>
            <div>
                <p>{`${text}`}</p>
            </div>
        </NavLink>
    </div>
}