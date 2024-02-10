import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";

export default function MirrorsEdge() {
    return <Lazy>
        <h1>
            {`Mirror's Edge fantastic lighting`}
        </h1>
        <LazyImage
            aspectRatio={1}
            src={"/blog/mirrors_edge/1x1 partial logo.png"}
            alt={"My own render of the Mirror's Edge: Catalyst world"}
        />

    </Lazy>
}