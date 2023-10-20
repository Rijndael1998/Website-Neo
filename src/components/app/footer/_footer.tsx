"use client";

import { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { usePathname } from 'next/navigation';

export default function Footer() {
    // const pathname = usePathname();

    // const [path, setPath] = useState("");

    // useEffect(() => {
    //     setPath()
    // }, [pathname]);

    return <footer className={styles.footer}>
        <div>
            {/* <p>{path}</p> */}
            <p>
                Lukasz Baldyga
            </p>
            <p>
                Rijn.dev
            </p>
        </div>
    </footer>
}