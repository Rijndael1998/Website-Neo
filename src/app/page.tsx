import Lazy from "@/components/lazy/_lazy";
import { about, contact, main, uglyElements } from "./../content/Home";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <Lazy>
      <div className={styles.page}>
        <div className={styles.item}>
          <h1>
            Hi!
          </h1>

          <p>
            {main}
          </p>

          <h4>{`What's the deal with the ugly elements?`}</h4>

          <p>
            {uglyElements}
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
