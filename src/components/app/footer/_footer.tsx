"use client";

import { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { usePathname } from 'next/navigation';
import GalleryImage from "@/components/imageGallery/galleryImage";
import Image from "next/image";

export default function Footer() {
    // const pathname = usePathname();

    // const [path, setPath] = useState("");

    // useEffect(() => {
    //     setPath()
    // }, [pathname]);

    return <footer className={styles.footer}>
        <div>
            <Image src="/favico.png" width={50} height={50} alt="logo"/>
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