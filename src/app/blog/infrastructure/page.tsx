"use server";

import Lazy from "@/components/lazy/_lazy";
import { getFile } from "@/components/serverUtils";

export default async function Infastructure() {
    const pageContent = await getFile("/src/content/blog/infra.md");

    return <Lazy>
        {pageContent}
    </Lazy>
}