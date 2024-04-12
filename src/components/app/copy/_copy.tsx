"use client";

import { CopyToClipboard } from "@/components/util";
import { RiClipboardLine } from "@remixicon/react";
import style from "./copy.module.scss";
import { useState } from "react";
import classNames from "classnames";

export type CopyProps = {
    text: string,
}

export default function Copy({ text }: CopyProps) {
    const [copied, setCopied] = useState<boolean>(false);
    const [lastTimeout, setLastTimeout] = useState<NodeJS.Timeout>();

    function handleClick() {
        setCopied(true);
        CopyToClipboard(text);

        if (lastTimeout)
            clearTimeout(lastTimeout);

        setLastTimeout(setTimeout(() => {
            setCopied(false);
        }, 1000));
    }

    return <span className={style.copyWrap}>
        <RiClipboardLine className={classNames(style.copy, copied && style.copied)} onClick={(e) => {e.preventDefault(); e.stopPropagation(); handleClick()}} />
    </span>
}