import Image from "next/image";

export default function LazyImage({ aspectRatio, src, alt }: { aspectRatio: number, src: string, alt: string }) {
    return <div className={".imageContainer"} style={{ marginRight: "2.5rem", aspectRatio, position: "relative" }}>
        <Image style={{ width: "100%", height: "100%" }} alt={alt} quality={100} fill src={src} />
    </div>
}

