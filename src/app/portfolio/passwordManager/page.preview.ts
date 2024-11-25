import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import { preURL } from "../consts";

export const Nomad: GroupPreviewContent = {
    title: "Internet Nomad Password Manager",
    desc: `The Internet Nomad password manager is built upon research into encryption types. It focuses on the fact that a person maybe have one or more identities online. It also offers unconventional recovery methods to allow users to recover from catastrophe.`,
    isDemo: false,
    url: preURL + "passwordManager",
    image,
};