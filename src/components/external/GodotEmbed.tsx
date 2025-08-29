import Hide from "../hide/hide";
import IFrameEmbed from "./iFrameEmbed";

export default function GodotEmbed({ source, external, externalShowText }: { source: string, external?: string, externalShowText?: string }) {
    return <Hide showText="Play game" externalLink={external} externalShowText={externalShowText}>
        <IFrameEmbed
            extraProps={{
                allow: "autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share",
            }}
            source={source}
        />
    </Hide>
}