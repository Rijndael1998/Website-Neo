import { Metadata } from "next";
import { about } from "./Home";

export const title = formatMetadata("Lukasz Baldyga");
export const description = formatMetadata(about);
export const url = "https://baldy.ga/";

export function formatMetadata(text: string) {
    return text.replace(/\s+/g,' ');
}

export const defaultOG = {
    title,
    description,
    url,
    images: "favico.png",
    type: "website",
};

export const defaultMetadata: Metadata = {
    title,
    description,
    metadataBase: new URL(url),
    robots: "index, follow",
    openGraph: defaultOG,
}