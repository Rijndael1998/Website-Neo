import Lazy from "@/components/lazy/_lazy";
import { about, contact } from "./../content/Home";
import styles from "./page.module.scss";
import Link from "next/link";


export default function Home() {
  return (
    <Lazy>
      <div className={styles.page}>
        <div className={styles.item}>
          <h1>
            Hi!
          </h1>
          <p>
            For everything that I have to offer, have a look at my <Link href="/portfolio">portfolio</Link> page.
          </p>
        </div>

        <div className={styles.item}>
          <h2>
            About Me
          </h2>

          <p>
            {about}
          </p>
        </div>

        <div className={styles.item}>
          <h2>
            Contact
          </h2>

          <p>
            {contact}
          </p>
        </div>
      </div>
    </Lazy>
  )
}
