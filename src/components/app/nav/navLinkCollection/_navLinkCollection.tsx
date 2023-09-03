import Typing from "@/components/typing/typing";
import NavLink from "./navLink/_navLink";

const [interval, iterCount] = [100, 14];

export default function NavLinkCollection() {
    return <>
        <NavLink href="/"><Typing text="Home" interval={interval} iterCount={iterCount} /></NavLink>
        <NavLink href="/contact"><Typing text="Contact" interval={interval} iterCount={iterCount} /></NavLink>
        <NavLink href="/cv"><Typing text="CV" interval={interval} iterCount={iterCount} /></NavLink>
        <NavLink href="/fun"><Typing text="Portfolio" interval={interval} iterCount={iterCount} /></NavLink>
        {/*<NavLink href="/sky"><Typing text="Sky" interval={interval} iterCount={iterCount}/></NavLink>*/}
    </>
}