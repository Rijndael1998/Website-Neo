"use client";

import { useState } from "react";
import Hamburger from "./hamburger/_hamburger";
import style from "./nav.module.scss";
import NavLinkCollection from "./navLinkCollection/_navLinkCollection";

export default function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <>
        <nav className={`${style.nav} ${isOpen ? style.isOpen : style.isClosed}`}>
            <NavLinkCollection />
            <Hamburger crossed={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </nav>
        <Hamburger crossed={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
}