import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const title = formatMetadata("Lukasz Baldyga");
export const description = formatMetadata("I'm a Full Stack Web Developer with a BSc in Computer Security. I have a lot of experience in a lot of different things (C#, TS, React, Next.js, Python, AWS, and more). 😎");
export const url = "https://testing.baldy.ga";

export function formatMetadata(text: string) {
    return text.replace(/\s+/g, ' ');
}

export const defaultOG: OpenGraph = {
    title,
    description,
    url,
    type: "website",
};

export const defaultMetadata: Metadata = {
    title: {
        default: title,
        template: '%s | Lukasz Baldyga',
    },

    description,
    robots: "index, follow",
}