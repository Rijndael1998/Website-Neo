"use client";

import { useState } from "react";
import Hamburger from "./hamburger/_hamburger";
import style from "./nav.module.scss";
import NavLinkCollection from "./navLinkCollection/_navLinkCollection";

export default function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <>
        <nav className={`${style.nav} ${isOpen ? style.isOpen : style.isClosed}`}>
            <Hamburger crossed={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <NavLinkCollection onSelection={() => setIsOpen(false)} />
        </nav>
        <Hamburger crossed={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
}