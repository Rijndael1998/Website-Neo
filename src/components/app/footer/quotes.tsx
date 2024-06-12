"use server";

import { ChooseRandomElement } from "@/components/util";
import { quotes } from "@/content/footer/Quotes";

export default async function Quotes() {
    const quote = ChooseRandomElement(quotes);
    const author = quote.author ?? "Unknown";

    return <h6>
        {quote.eng} - {author}
    </h6> 
}