import Image, { StaticImageData } from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';
import LazyImageCaption from './_lazyImageCaption';
import { ifTruthy } from '../reactUtils';
import { assert } from 'console';
import style from "./lazy.module.scss";


export function LazyLocalCompareImage({ src, alt, ar }: { src: StaticImageData, alt: string, ar?: number }) {
    return <div style={{
        width: "100%",
        aspectRatio: ar ?? 16 / 9,
    }}>
        <Image
            src={src}
            alt={alt}
            fill
        />
    </div>
}

const backgroundImage = `
linear-gradient(45deg, #ccc 25%, transparent 25%),
linear-gradient(-45deg, #ccc 25%, transparent 25%),
linear-gradient(45deg, transparent 75%, #ccc 75%),
linear-gradient(-45deg, transparent 75%, #ccc 75%)`;

export type LazyLocalCompareType = {
    a: React.ReactElement,
    b: React.ReactElement,
    altA?: string,
    altB?: string,
}

export function LazyLocalCompare({ a, b, altA, altB }: LazyLocalCompareType) {
    assert(!altA == !altB, "If you're using ALTs, use both");

    return <>
        <ReactCompareSlider
            boundsPadding={0}
            // clip="both"
            itemOne={a}
            itemTwo={b}
            keyboardIncrement="5%"
            position={50}
            style={{
                backgroundColor: 'white',
                backgroundImage,
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                backgroundSize: '20px 20px',
                width: '100%'
            }}
        />
        {ifTruthy(altA && altB,
            <div
                className={`${style.lazyImageWrapper} ${style.lazyCompareCaption}`}
                style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    marginTop: "0",
                }}>
                <LazyImageCaption cap alt={altA} />
                <LazyImageCaption cap alt={altB} capRight />
            </div>
        )}
    </>
}

