import styles from "./footer.module.scss";
import Link from "next/link";
import Quotes from "./quotes";
import Git from "./git";
import Creds from "./creds/creds";
import Contact from "./contact";

export default function Footer() {
    return <footer className={styles.footer}>
        <h4>Certifications</h4>
        <Creds />

        <h4>Contact</h4>
        <Contact />

        <Quotes />
        <div style={{ display: "flex", flexDirection: "column", textAlign: "right", margin: "0", opacity: 0.12 }}>
            <Git />
            <Link href={"/debug/"} style={{ fontSize: "0.5em", display: "block", width: "6em", marginLeft: "auto" }}>
                <span>debug</span>
            </Link>
        </div>
    </footer>
}