export type YoutubeEmbedProps = {
    videoID: string,
    aspectRatio?: number
}

export default function YoutubeEmbed({ videoID, aspectRatio }: YoutubeEmbedProps) {
    return <iframe
        style={{
            width: "100%",
            aspectRatio: aspectRatio ?? 560 / 315,
        }}
        src={`https://www.youtube-nocookie.com/embed/${videoID}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
    />
}
