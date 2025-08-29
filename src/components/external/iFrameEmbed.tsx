import Hide from "../hide/hide";

export type iFrameEmbedProps = {
    source: string,
    aspectRatio?: number
    extraProps?: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
}

export default function IFrameEmbed({ source, aspectRatio, extraProps }: iFrameEmbedProps) {
    return <Hide externalLink="asdf">
        <iframe
            style={{
                width: "100%",
                aspectRatio: aspectRatio ?? 16 / 9,
            }}
            src={source}
            frameBorder="0"
            {...extraProps}
        />
    </Hide>
}