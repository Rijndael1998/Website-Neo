"use server";

import Lazy from "@/components/lazy/_lazy";
import { content, citations } from "@/content/portfolio/marta/Marta";

export default async function Marta() {
    let i = 0; // this shouldn't be working... 🤯

    return <Lazy>
        <h1>Marta</h1>

        <p>{content[i++]}</p>
        <p>{content[i++]}</p>
        <p>{content[i++]}</p>
        <p>{content[i++]}</p>
        <p>{content[i++]}</p>

        <h3>Referances</h3>
        <ul>
            {
                citations.map((item, index) =>
                    <li key={index}>
                        <p>{item}</p>
                    </li>
                )
            }
        </ul>

    </Lazy>
}