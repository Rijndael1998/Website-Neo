"use client";

import { useEffect, useState } from "react";
import Hamburger from "./hamburger/_hamburger";
import style from "./nav.module.scss";
import NavLinkCollection from "./navLinkCollection/_navLinkCollection";

export default function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const resize = () => setIsOpen(false);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    // I hate CSS
    return <>
        <div className={`${style.nav}`}>
            <NavLinkCollection onSelection={() => setIsOpen(false)} />
            <Hamburger dynamic={true} onTop={true} crossed={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className={`${style.menu} ${isOpen ? style.isOpen : style.isClosed}`}>
            <NavLinkCollection onSelection={() => setIsOpen(false)} />
        </div>
    </>
}