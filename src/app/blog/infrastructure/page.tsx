"use server";

import Lazy from "@/components/lazy/_lazy";
import { getFile } from "@/components/serverUtils";

export default async function Infastructure() {
    return <Lazy>
        <p>
            {
                await getFile("/src/content/blog/infra.md")
            }
        </p>
    </Lazy>
}