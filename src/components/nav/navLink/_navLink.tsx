import Link from "next/link";
import style from "./navLink.module.scss";
import { ReactElement, ReactNode } from "react";

export default function NavLink({ href, children }: { href: string, children: ReactNode }) {
    return <>
        <div className={style.navLink}>
            <Link href={href}>{children}</Link>
        </div>
    </>
}