"use server";

import Lazy from "@/components/lazy/_lazy";
import { getFile } from "@/components/serverUtils";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';

export default async function Infastructure() {
    const pageContent = await getFile("/src/content/blog/infra.md");

    return <Lazy>
        <Markdown remarkPlugins={[remarkGfm]}>
            {pageContent}
        </Markdown>
    </Lazy>
}