export type PortfolioPreviewContent = {
    title: string,
    desc: string,
    isDemo: boolean,
    url: string,
    image?: string,
}

const preURL = "fun/";
const imageFolder = "/fun/";

export const content: Array<PortfolioPreviewContent> =
    [
        {
            title: "Rchan",
            desc: `Rchan is project I've worked on that bridges the gap between regular people and AI. It's a simple discord bot that you can talk to with your friends. Think of it as a group chat with ChatGPT It also supports voice calls in groups, as well as taking on different personalities.`,
            isDemo: false,
            url: preURL + "",
            image: imageFolder + "rchan.png",
        },
        {
            title: "Internet Nomad Password Manager",
            desc: "The Internet Nomad password manager is built upon research into encryption types. It focuses on the fact that a person maybe have one or more identities online. It also offers unconventional recovery methods to allow users to recover from catastrophe.",
            isDemo: false,
            url: preURL + "",
            image: imageFolder + "password_manager.png",
        },
        {
            title: "Langrage Demo",
            desc: "",
            isDemo: false,
            url: preURL + "",
        },
        {
            title: "Sudoku Solver",
            desc: "",
            isDemo: false,
            url: preURL + "",
        },
        {
            title: "Drawing Project",
            desc: "",
            isDemo: false,
            url: preURL + "",
        },
        {
            title: "A*",
            desc: "",
            isDemo: false,
            url: preURL + "a-star",
        },
        // {
        //     title:"",
        //     desc: "",
        //     isDemo: false,
        //     url: preURL + "",
        // },
    ]