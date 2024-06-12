"use server";

import ToolTip from "@/components/toolTip/_toolTip";
import { ChooseRandomElement } from "@/components/util";
import { quotes } from "@/content/footer/Quotes";

function ChooseQuote({ text, og }: { text: string, og?: string }) {
    return og ?
        <ToolTip tip={og}><>{text}</></ToolTip> :
        <>{text}</>
}

export default async function Quotes() {
    const quote = ChooseRandomElement(quotes);
    const author = quote.author.engName ?? quote.author.name;
    const text = quote.eng ?? quote.og;

    return <h6 style={{flexDirection: "column"}}>
        <span>"<ChooseQuote text={text} og={quote.og} />"</span>
        <span>{author}</span>
    </h6>
}