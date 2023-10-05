"use client";

import Image from "next/image";
import styles from "./imageGallery.module.scss";
import classNames from "classnames";
import { useState } from "react";
//import { MouseEvent } from 'react';

export type ImageGalleryProps = {
    images: Array<{
        alt?: string,
        src: string,
    }>

    aspectRatio: number,
};

export default function ImageGallery({ images, aspectRatio }: ImageGalleryProps) {
    const [index, setIndex] = useState(0);

    enum Controls {
        Next,
        Previous,
    }

    const setIndexFlow = (index: number) => {
        if (images.length == 0)
            return setIndex(0);

        while (index < 0)
            index += images.length;

        setIndex(index % images.length);
    }

    const Control = (control: Controls, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        switch (control) {
            case Controls.Next:
                return setIndexFlow(index + 1);
            case Controls.Previous:
                return setIndexFlow(index - 1);
        }
    }

    return <>
        <div className={styles.controls}>
            <div onClick={(e) => Control(Controls.Previous, e)}>
                <p>
                    Previous
                </p>
            </div>
            <div onClick={(e) => Control(Controls.Next, e)}>
                <p>
                    Next
                </p>
            </div>
        </div>
        <div style={{ aspectRatio }} className={classNames(styles.imageGallery)}>
            <figure style={{ aspectRatio }} className={styles.container}>
                {
                    images.map((image, i) => {
                        return <div key={i} className={classNames(styles.images, i == index && styles.show)}>
                            <Image style={{ objectFit: "cover" }} src={image.src} alt={image.alt ?? ""} fill quality={100} />
                        </div>
                    })
                }
            </figure>
        </div>
        <div>
            {
                images.map((image, i) => {
                    return <div key={i} className={classNames(styles.alt, i == index && styles.show && image.alt)}>
                        {image.alt}
                    </div>
                })
            }
        </div>
        <div>
            Current Page {index + 1} / {images.length}
        </div>
    </>
}