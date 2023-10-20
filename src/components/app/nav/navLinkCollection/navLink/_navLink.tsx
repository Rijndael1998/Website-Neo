import Link from "next/link";
import style from "./navLink.module.scss";
import { ReactNode } from "react";
import classNames from "classnames";

export type NavLinkProps = {
    href: string,
    children?: ReactNode,
    onClick?: () => any,
    extraClassName?: string,
}

export default function NavLink({ href, children, onClick, extraClassName }: NavLinkProps) {
    return <>
        <div className={classNames(style.navLink, extraClassName)}>
            <Link onClick={onClick} href={href}>{children}</Link>
        </div>
    </>
}