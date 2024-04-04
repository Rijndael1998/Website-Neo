import { Metadata } from "next";
import { about } from "./Home";

export const title = "Lukasz Baldyga";
export const description = about;
export const url = "https://baldy.ga/";

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