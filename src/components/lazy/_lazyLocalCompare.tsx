import Image, { StaticImageData } from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';


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
linear-gradient(-45deg, transparent 75%, #ccc 75%)
`;

export function LazyLocalCompare({ a, b }: { a: React.ReactElement, b: React.ReactElement }) {
    return <ReactCompareSlider
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
}

