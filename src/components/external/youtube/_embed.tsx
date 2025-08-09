import IFrameEmbed from "../iFrameEmbed"

export type YoutubeEmbedProps = {
    videoID: string,
    aspectRatio?: number
}

export default function YoutubeEmbed({ videoID, aspectRatio }: YoutubeEmbedProps) {
    return <IFrameEmbed
        source={`https://www.youtube-nocookie.com/embed/${videoID}`}
        aspectRatio={aspectRatio}
        extraProps={{
            allowFullScreen: true,
            title: "YouTube video player",
        }}
    />
}
