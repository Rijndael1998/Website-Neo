"use server";

import ToolTip from "@/components/toolTip/_toolTip";
import { ChooseRandomElement } from "@/components/util";
import { quotes } from "@/content/footer/Quotes";

function MainQuote({ text, og }: { text: string, og?: string }) {
    return og ?
        <ToolTip tip={og}><>{text}</></ToolTip> :
        <>{text}</>
}

export default async function Quotes() {
    const quote = ChooseRandomElement(quotes);
    const author = quote.author.engName ?? quote.author.name;
    const text = quote.eng;
    const og = quote.og;
    const link = quote.author.wiki;

    return <h6>
        <span><MainQuote text={text} og={og} /></span>
        <span>- {author}</span>
    </h6>
}