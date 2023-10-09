"use client";

import styles from "./footer.module.scss";
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    return <footer className={styles.footer}>
        <div>
            <p>{pathname}</p>
        </div>
    </footer>
}