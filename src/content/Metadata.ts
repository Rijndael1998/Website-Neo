import { Metadata } from "next";
import { about } from "./Home";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const title = formatMetadata("Lukasz Baldyga");
export const description = formatMetadata(about);
export const url = "https://testing.baldy.ga";

export function formatMetadata(text: string) {
    return text.replace(/\s+/g,' ');
}

export const defaultOG: OpenGraph = {
    title,
    description,
    url,
    images: "/opengraph.webp",
    type: "website",
};

export const defaultMetadata: Metadata = {
    title,
    description,
    robots: "index, follow",
    openGraph: defaultOG,
}

export function generateCustomMetadata(newMetadata: Metadata): Metadata {
    return {
        ...defaultMetadata,
        ...newMetadata,
        openGraph: {
            ...defaultOG,
            ...newMetadata.openGraph,
            description: newMetadata.description ?? undefined,
        }
    }
}