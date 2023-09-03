import style from "./nav.module.scss";
import NavLinkCollection from "./navLinkCollection/_navLinkCollection";

export default function Nav() {
    return <>
        <nav className={style.nav}>
            <NavLinkCollection />
        </nav>
    </>
}