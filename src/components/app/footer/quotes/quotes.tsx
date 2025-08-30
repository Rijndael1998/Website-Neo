"use server";

import ToolTip from "@/components/toolTip/_toolTip";
import { ChooseRandomElement } from "@/components/util";
import { quotes } from "./quote_text";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

function ChooseQuote({ children, og }: { children: ReactElement, og?: string }) {
    return og ?
        <ToolTip tip={og}><>{children}</></ToolTip> :
        <>{children}</>
}

function ChooseAuthor({ children, link }: { children: ReactNode, link?: string }) {
    return link ?
        <Link href={link}>{children}</Link> :
        children
}

export default async function Quotes() {
    const quote = ChooseRandomElement(quotes);
    const author = quote.author.engName ?? quote.author.name;
    const text = quote.eng ?? quote.og;

    return <h6 style={{ flexDirection: "column", textAlign: "center", maxWidth: "80ch", width: "90%" }}>
        <span>
            &quot;
            <ChooseQuote og={quote.og}>
                <>{text}</>
            </ChooseQuote>
            &quot;
        </span>
        <span>
            <ChooseQuote og={quote.author.engName ? quote.author.name : undefined}>
                <ChooseAuthor link={quote.author.wiki}>{author}</ChooseAuthor>
            </ChooseQuote>
        </span>
    </h6>
}