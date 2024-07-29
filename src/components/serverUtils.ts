"use server";

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';

export async function getFile(getFilePath: string) {
    const filePath = path.join(process.cwd(), getFilePath);
    return (await fsPromises.readFile(filePath)).toString();
}