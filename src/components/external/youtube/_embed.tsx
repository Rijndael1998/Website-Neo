import Hide from "@/components/hide/hide"
import IFrameEmbed from "../iFrameEmbed"

export type YoutubeEmbedProps = {
    videoID: string,
    aspectRatio?: number
}

export default function YoutubeEmbed({ videoID, aspectRatio }: YoutubeEmbedProps) {
    return <Hide
        showText="Play YouTube video"
        externalLink={`https://youtu.be/${videoID}`}
        externalShowText="Watch on YouTube"
    >
        <IFrameEmbed
            source={`https://www.youtube-nocookie.com/embed/${videoID}`}
            aspectRatio={aspectRatio}
            extraProps={{
                allowFullScreen: true,
                title: "YouTube video player",
            }}
        />
    </Hide>
}
