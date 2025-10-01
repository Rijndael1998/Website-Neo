import { MediaHTMLAttributes, SourceHTMLAttributes } from "react";

type VideoType = MediaHTMLAttributes<HTMLVideoElement>;
type SourceType = SourceHTMLAttributes<HTMLSourceElement>;

export type LazyVideoProps = {
    controls?: VideoType["controls"],
    autoPlay?: VideoType["autoPlay"],
    muted?: VideoType["muted"],
    loop?: VideoType["loop"],
    src?: SourceType["src"],
    type?: SourceType["type"],
};

export default function LazyVideo({ controls, autoPlay, muted, loop, src, type }: LazyVideoProps) {
    const videoProps = { controls, autoPlay, muted, loop };
    const sourceProps = { src, type };

    return <video {...videoProps} style={{maxWidth: "100%"}}>
        <source {...sourceProps} />
    </video>
}