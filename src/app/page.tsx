import Lazy from "@/components/lazy/_lazy";
import { about, contact } from "./../content/Home";
import styles from "./page.module.scss";
import Link from "next/link";
import logo from "@/../public/opengraph.webp";
import LazyLocalImage from "@/components/lazy/_lazyLocalImage";


export default function Home() {
  return (
    <Lazy>
      <div className={styles.page}>
        <div className={styles.item}>
          <h1>
            Hi!
          </h1>
          <p>
            Visit my <Link href="/portfolio">portfolio</Link> page to see my previous work and experience. 🧐
          </p>
          <LazyLocalImage
            src={logo}
            alt={"Computer on a desk showing the website logo: a white L in a green square on a black background."}
            quality={50}
            />
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
