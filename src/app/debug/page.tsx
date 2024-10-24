"use server";

import Lazy from "@/components/lazy/_lazy";
import fs from 'fs';
import path from 'path';
import Link from 'next/link';


export default async function DebugIndex() {
    const dirPath = path.join(process.cwd(), 'src/app/debug');
    const files = fs.readdirSync(dirPath);

    return (
        <Lazy>
            <h1>Debug</h1>
            <ul>
                {files.map((file) => (
                    <li key={file}>
                        <Link href={`debug/${file}`}>
                            {file}
                        </Link>
                    </li>
                ))}
            </ul>
        </Lazy>
    );
}
