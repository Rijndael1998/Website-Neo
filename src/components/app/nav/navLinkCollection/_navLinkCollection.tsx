import NavLink from "./navLink/_navLink";
import { Links } from "./navLink/links";

export type NavLinkCollectionProps = {
    onSelection?: () => any,
}

export default function NavLinkCollection({ onSelection }: NavLinkCollectionProps) {
    return <>
        {
            Links.map(
                (link) => <NavLink
                    onClick={onSelection}
                    href={link[1]}
                    key={link[0] + link[1]}
                >
                    {link[0]}
                </NavLink>
            )
        }
    </>
}