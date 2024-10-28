import style from "./nav.module.scss";
import NavLinkCollection from "./navLinkCollection/_navLinkCollection";

export default function Nav() {
    return <div className={`${style.nav}`}>
        <NavLinkCollection />
    </div>
}