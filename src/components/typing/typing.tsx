"use client";
import { ReactNode, useEffect, useState } from "react"

export type TypingInterface = {
    text: string,
    interval: number,
    iterCount?: number,
}

export default function Typing({text, interval, iterCount}: TypingInterface) {
    const [originalText, setOriginalText] = useState<string>("");
    const [originalInterval, setOriginalInterval] = useState<number>();
    const [originalIterCount, setOriginalIterCount] = useState<number>();

    const [currentText, setCurrentText] = useState<string>();
    const [iteration, setIteration] = useState<number>(0);

    const getRandomizedText = (text: string, changes: number) => {
        if(!changes)
            return "";

        let newText = "";
        const probability = 1 - changes / text.length;

        for(let character of text)
            if(Math.random() > probability)
                newText += character;
        
        return newText;
    }

    useEffect(() => {
        setOriginalText(text);
    }, [text]);

    useEffect(() => {
        setOriginalInterval(interval);
    }, [interval]);

    useEffect(() => {
        setOriginalIterCount(iterCount ?? text.length);
    }, [iterCount, text.length])

    useEffect(() => {
        if(!originalIterCount || !originalInterval || !originalText || originalIterCount < iteration)
            return;

        const timer = setInterval(() => {
            setCurrentText(getRandomizedText(originalText, originalText.length * iteration / originalIterCount))
            setIteration(iteration + 1);
        }, originalInterval);

        return () => clearInterval(timer);

    }, [originalInterval, iteration, originalText, originalIterCount]);

    return <>
        {currentText}
    </>
}