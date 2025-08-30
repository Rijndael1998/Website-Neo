import styles from "./footer.module.scss";
import Quotes from "./quotes";
import Creds from "./creds/creds";
import Contact from "./contact";
import Debug from "./debug/debug";

export default function Footer() {
    return <footer className={styles.footer}>
        <h4>Certifications</h4>
        <Creds />

        <h4>Contact</h4>
        <Contact />

        <Quotes />
        <Debug />
    </footer>
}