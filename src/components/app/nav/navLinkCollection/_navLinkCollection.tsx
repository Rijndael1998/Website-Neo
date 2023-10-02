import Typing from "@/components/typing/typing";
import NavLink from "./navLink/_navLink";

const [interval, iterCount] = [100, 14];
export type NavLinkCollectionProps =
    {
        onSelection?: () => any,
    }

export default function NavLinkCollection({ onSelection }: NavLinkCollectionProps) {
    return <>
        <NavLink onClick={onSelection} href="/"><Typing text="Home" interval={interval} iterCount={iterCount} /></NavLink>
        { /* <NavLink onClick={onSelection} href="/contact"><Typing text="Contact" interval={interval} iterCount={iterCount} /></NavLink> */ }
        <NavLink onClick={onSelection} href="/cv"><Typing text="CV" interval={interval} iterCount={iterCount} /></NavLink>
        <NavLink onClick={onSelection} href="/fun"><Typing text="Portfolio" interval={interval} iterCount={iterCount} /></NavLink>
    </>
}