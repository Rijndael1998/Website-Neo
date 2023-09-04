import Link from "next/link";
import style from "./navLink.module.scss";
import { ReactNode } from "react";

export type NavLinkProps = {
    href: string,
    children: ReactNode,
    onClick?: () => any,
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
    return <>
        <div className={style.navLink}>
            <Link onClick={onClick} href={href}>{children}</Link>
        </div>
    </>
}