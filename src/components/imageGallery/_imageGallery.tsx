"use client";

import styles from "./imageGallery.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import GalleryImage from "./galleryImage";

export type ImageProps = Array<{
    alt?: string,
    src: string,
    aspectRatio?: number,
}>

export type ImageGalleryProps = {
    images: ImageProps,
    aspectRatio?: number,
};

export default function ImageGallery({ images, aspectRatio }: ImageGalleryProps) {
    const [index, setIndex] = useState(0);
    const [minimalAspectRatio, setMinimalAspectRatio] = useState(Number.MAX_SAFE_INTEGER);

    useEffect(() => {
        if(aspectRatio) {
            setMinimalAspectRatio(aspectRatio);
            return;
        }

        let currentMinimal = Infinity;
        for (let index = 0; index < images.length; index++) {
            const ac = images[index].aspectRatio;
            if(!ac)
                throw new Error("Image without aspect ratio: " + images[index].src);

            currentMinimal = Math.min(currentMinimal, ac);
        }

        setMinimalAspectRatio(currentMinimal);
        return;

    }, [images, aspectRatio])
    
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
        <div style={{ aspectRatio: images[index]?.aspectRatio ?? minimalAspectRatio}} className={classNames(styles.imageGallery)}>
            <figure style={{aspectRatio: images[index]?.aspectRatio ?? minimalAspectRatio}} className={styles.container}>
                {
                    images.map((image, i) =>
                        <GalleryImage
                            show={i == index}
                            key={i}
                            src={image.src} />
                    )
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