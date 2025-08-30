import Contact from "./contact/contact";
import Creds from "./creds/creds";
import Debug from "./debug/debug";
import styles from "./footer.module.scss";
import Quotes from "./quotes/quotes";

export default function Footer() {
    return <footer className={styles.footer}>
        <h4>Certifications</h4>
        <Creds />

        <h4>Contact</h4>
        <Contact />

        <h4>...</h4>
        <Quotes />
        <Debug />
    </footer>
}