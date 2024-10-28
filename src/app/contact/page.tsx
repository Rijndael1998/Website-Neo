import { ContactPage, ContactPageEmail } from "@/content/Contact";
import { generateCustomMetadata } from "@/content/Metadata";
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const title = "Lukasz Baldyga - Contact";
const description = ContactPageEmail;

export const metadata: Metadata = generateCustomMetadata({
    title,
    description,
    openGraph: {
        title,
        description,
        emails: "lukasz+web [at] baldy.ga"
    } as OpenGraph,
});

export default function Contact() {
    return <>
        <h1>Contact</h1>
        <p>{ContactPage}</p>
    </>;
}