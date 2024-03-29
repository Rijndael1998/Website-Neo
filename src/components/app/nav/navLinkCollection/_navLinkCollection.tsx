"use client";

import Typing from "@/components/typing/typing";
import NavLink from "./navLink/_navLink";
import { usePathname } from "next/navigation";
import styles from "./navLink/navLink.module.scss";
import classNames from "classnames";

const [interval, iterCount] = [100, 14];
export type NavLinkCollectionProps =
    {
        onSelection?: () => any,
    }

export default function NavLinkCollection({ onSelection }: NavLinkCollectionProps) {
    // const pathname = usePathname();
    // const parts = pathname.split("/");
    // console.log(parts);

    // const prevPath = parts.slice(0, parts.length - 1);
    // console.log(prevPath);

    // const backValue = prevPath.join("/") + "/";
    // console.log(backValue);

    return <>
        {/* <NavLink onClick={onSelection} href={backValue} extraClassName={classNames(pathname == "/" && styles.shy)}><Typing text="Back" interval={interval} iterCount={iterCount} /></NavLink> */}
        <NavLink onClick={onSelection} href="/"><Typing text="Home" interval={interval} iterCount={iterCount} /></NavLink>
        { /* <NavLink onClick={onSelection} href="/contact"><Typing text="Contact" interval={interval} iterCount={iterCount} /></NavLink> */ }
        {/* <NavLink onClick={onSelection} href="/cv"><Typing text="CV" interval={interval} iterCount={iterCount} /></NavLink> */}
        <NavLink onClick={onSelection} href="/blog"><Typing text="Blog" interval={interval} iterCount={iterCount} /></NavLink>
        <NavLink onClick={onSelection} href="/portfolio"><Typing text="Portfolio" interval={interval} iterCount={iterCount} /></NavLink>
    </>
}