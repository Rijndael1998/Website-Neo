import styles from "./embed.module.scss";

export type YoutubeEmbedProps = {
    videoID: string,
    aspectRatio?: number
}  

export default function YoutubeEmbed({videoID, aspectRatio}: YoutubeEmbedProps) {
    return <iframe className={styles.yt} style={{aspectRatio: aspectRatio ?? 560 / 315}} src={`https://www.youtube-nocookie.com/embed/${videoID}`} title="YouTube video player" frameBorder="0" allowFullScreen/>
}
