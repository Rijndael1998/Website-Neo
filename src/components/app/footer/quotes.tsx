"use server";

import ToolTip from "@/components/toolTip/_toolTip";
import { ChooseRandomElement } from "@/components/util";
import { quotes } from "@/content/footer/Quotes";
import Link from "next/link";
import { ReactNode } from "react";

function ChooseQuote({ text, og }: { text: string, og?: string }) {
    return og ?
        <ToolTip tip={og}><>{text}</></ToolTip> :
        <>{text}</>
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

    return <h6 style={{ flexDirection: "column" }}>
        <span>"<ChooseQuote text={text} og={quote.og} />"</span>
        <span><ChooseAuthor link={quote.author.wiki}>{author}</ChooseAuthor></span>
    </h6>
}