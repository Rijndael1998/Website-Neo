import { ReactNode } from "react";
import headerStyles from "./header.module.scss";
import slidingStyles from "./sliding.module.scss";

export default function Header({children}: {children: ReactNode}): JSX.Element {
    return <>
        <div className={headerStyles.header}>
            <div className={slidingStyles.sliding} />
            {children}
        </div>
    </>
}