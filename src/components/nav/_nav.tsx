import NavLink from "./navLink/_navLink";
import style from "./nav.module.scss";
import Typing from "../typing/typing";

export default function Nav() {
    return <>
        <nav className={style.nav}>
            <NavLink href="/"><Typing text="Home" interval={100} iterCount={14}/></NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/cv">CV</NavLink>
            <NavLink href="/fun">Portfolio</NavLink>
            <NavLink href="/sky">Sky</NavLink>
        </nav>
    </>
}