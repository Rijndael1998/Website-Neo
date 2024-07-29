"use client";

import { CopyToClipboard } from "@/components/util";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import style from "./copy.module.scss";
import { useState } from "react";
import classNames from "classnames";
import ToolTip from "@/components/toolTip/_toolTip";

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

    return <ToolTip tip="Click to copy" className="" offset={[0, 10]}>
        <span className={style.copyWrap}>
            <ContentCopyIcon className={classNames(style.copy, copied && style.copied)} onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleClick() }} />
        </span>
    </ToolTip>
}