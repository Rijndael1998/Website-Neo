import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Container } from "@mui/material";

export const metadata = {
    title: "Nice debugging stuff",
    description: "Welcome to the dev stuff 👾",
}

export default async function DebugIndex() {
    const dirPath = path.join(process.cwd(), 'src/app/debug/pain');
    const files = fs.readdirSync(dirPath).filter(f => !f.includes("."));

    return (
        <Container>
            <h1>Debug</h1>
            <p>{"Nice. You've found the secret dev pages 🤫. Make yourself at home 😉."}</p>
            <ul>
                {files.map((file) => (
                    <li key={file}>
                        <Link href={`pain/${file}`}>
                            {file}
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
