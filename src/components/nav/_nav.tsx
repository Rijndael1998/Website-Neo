import NavLink from "./navLink/_navLink";
import style from "./nav.module.scss";

export default function Nav() {
    return <>
        <nav className={style.nav}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/cv">CV</NavLink>
            <NavLink href="/fun">Portfolio</NavLink>
            <NavLink href="/sky">Sky</NavLink>
        </nav>
    </>
}