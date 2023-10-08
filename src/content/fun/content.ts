export type PortfolioPreviewContent = {
    title: string,
    desc: string,
    isDemo: boolean,
    url: string,
    image?: string,
}

const preURL = "fun/";
const imageFolder = "/fun/";

export const irlContent: Array<PortfolioPreviewContent> = [
    {
        title: "(Current Role) Data & Decisions Developer @ International Personal Finance",
        desc: "",
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "ipf.png",
    },
    {
        title: "Full Stack Developer @ Shreem",
        desc: "",
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "shreem.png",
    },
];

export const content: Array<PortfolioPreviewContent> = [
    {
        title: "Rchan",
        desc: `Rchan is project I've worked on that bridges the gap between regular people and AI. It's a simple discord bot that you can talk to with your friends. Think of it as a group chat with ChatGPT It also supports voice calls in groups, as well as taking on different personalities.`,
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "rchan.png",
    },
    {
        title: "Hobbies",
        desc: "Sometimes I like to take a break from programming. I enjoy making 3d art, music and other random things.",
        isDemo: false,
        url: preURL + "hobbies",
        image: imageFolder + "crab_rave.png",
    },
    {
        title: "Internet Nomad Password Manager",
        desc: "The Internet Nomad password manager is built upon research into encryption types. It focuses on the fact that a person maybe have one or more identities online. It also offers unconventional recovery methods to allow users to recover from catastrophe.",
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "password_manager.png",
    },
    {
        title: "Drawing Project",
        desc: "It is a simple drawing program that uses a programming language designed for this project. The program can let you draw anything that you might like using this specialty language.",
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "drawing_program.png",
    },
    {
        title: "A*",
        desc: "I have made a path finding solver. It is available on GitHub and you can see the demo here. This program implements the A* algorithm. ",
        isDemo: false,
        url: preURL + "a-star",
        image: imageFolder + "a*.png",
    },
    {
        title: "Sudoku Solver",
        desc: "I have made a Sudoku solver. The brute-force Backtracking algorithm is the major solving algorithm in this Sudoku solver with a supporting algorithm that helps remove singles from the graph.",
        isDemo: false,
        url: preURL + "sudoku",
        image: imageFolder + "sudoku_solver.png",
    },
    {
        title: "Langrage Demo",
        desc: "A simple demonstration of how Langrage polynomials work. You can place points anywhere along the screen and the curve will recalculate, passing through all of the points made.",
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "lagrange.png"
    },
    // {
    //     title:"",
    //     desc: "",
    //     isDemo: false,
    //     url: preURL + "",
    //     image: imageFolder + "",
    // },
];