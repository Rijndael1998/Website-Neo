import Link, { LinkProps } from "next/link"

export type LazyLinkProps = {
    link: string,
    props?: Omit<LinkProps, "href">,
};

export const LazyLink = ({ link, props }: LazyLinkProps) => {
    return <Link href={link} {...props}>{link}</Link>
}