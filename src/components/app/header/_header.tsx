"use client";

import { JSX, ReactNode } from "react";
import headerStyles from "./header.module.scss";
import slidingStyles from "./sliding.module.scss";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Header({children}: {children: ReactNode}): JSX.Element {
    const pathname = usePathname();
    const red = pathname?.includes("/debug") ?? false;

    return <>
        <div className={classNames(headerStyles.header, red && headerStyles.red)}>
            <div className={slidingStyles.sliding} />
            {children}
        </div>
    </>
}