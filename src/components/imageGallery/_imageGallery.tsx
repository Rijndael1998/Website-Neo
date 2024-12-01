"use client";

import styles from "./imageGallery.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import GalleryImage, { GalleryImageProps } from "./galleryImage";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type ImageProps = Array<{
    alt?: string,
    src: GalleryImageProps["src"],
    aspectRatio?: number,
}>

export type ImageGalleryProps = {
    images: ImageProps,
    aspectRatio?: number,
};

export default function ImageGallery({ images, aspectRatio }: ImageGalleryProps) {
    const [index, setIndex] = useState(0);
    const [touchSupport, setTouchSupport] = useState(true);
    const [minimalAspectRatio, setMinimalAspectRatio] = useState(Number.MAX_SAFE_INTEGER);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        setTouchSupport((('ontouchstart' in window) || (navigator.maxTouchPoints > 0)))
    }, []);

    useEffect(() => {
        if (aspectRatio) {
            setMinimalAspectRatio(aspectRatio);
            return;
        }

        let currentMinimal = Infinity;
        for (let index = 0; index < images.length; index++) {
            const ac = images[index].aspectRatio;
            if (!ac)
                throw new Error("Image without aspect ratio: " + images[index].src);

            currentMinimal = Math.min(currentMinimal, ac);
        }

        setMinimalAspectRatio(currentMinimal);
        return;

    }, [images, aspectRatio]);

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

    const Control = (control: Controls, e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();
        switch (control) {
            case Controls.Next:
                return setIndexFlow(index + 1);
            case Controls.Previous:
                return setIndexFlow(index - 1);
        }
    }

    return <>
        <div
            style={{ aspectRatio: images[index]?.aspectRatio ?? minimalAspectRatio }}
            className={classNames(styles.imageGallery)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <figure
                style={{ aspectRatio: images[index]?.aspectRatio ?? minimalAspectRatio }}
                className={styles.container}>
                {
                    images.map((image, i) =>
                        <GalleryImage
                            show={i == index}
                            key={i}
                            src={image.src} />
                    )
                }
            </figure>
            <div className={classNames(
                styles.controls,
                hovering && styles.show,
                touchSupport && styles.touch,
            )
            }>
                <ArrowBackIcon onClick={(e) => Control(Controls.Previous, e)} />
                <div className={styles.count}>
                    <p>{index + 1} / {images.length}</p>
                </div>
                <ArrowForwardIcon onClick={(e) => Control(Controls.Next, e)} />
            </div>
        </div>
    </>
}