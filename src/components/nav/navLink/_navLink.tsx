import Link from "next/link";
import style from "./navLink.module.scss";

export default function NavLink({ href, children }: { href: string, children: JSX.Element | string }) {
    return <>
        <div className={style.navLink}>
            <Link href={href}>{children}</Link>
        </div>
    </>
}