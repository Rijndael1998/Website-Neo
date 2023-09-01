import NavLink from "./navLink/_navLink";
import style from "./nav.module.scss";
import Typing from "../typing/typing";

export default function Nav() {
    const [interval, iterCount] = [100, 14];

    return <>
        <nav className={style.nav}>
            <NavLink href="/"><Typing text="Home" interval={interval} iterCount={iterCount}/></NavLink>
            <NavLink href="/contact"><Typing text="Contact" interval={interval} iterCount={iterCount}/></NavLink>
            <NavLink href="/cv"><Typing text="CV" interval={interval} iterCount={iterCount}/></NavLink>
            <NavLink href="/fun"><Typing text="Portfolio" interval={interval} iterCount={iterCount}/></NavLink>
            <NavLink href="/sky"><Typing text="Sky" interval={interval} iterCount={iterCount}/></NavLink>
        </nav>
    </>
}