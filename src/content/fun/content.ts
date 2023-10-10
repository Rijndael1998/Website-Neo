export type PortfolioPreviewContent = {
    title: string,
    desc: string,
    isDemo: boolean,
    url: string,
    image?: string,
}

export type PortfolioViewArray = Array<PortfolioPreviewContent>;

export const preURL = "fun/";
export const imageFolder = "/fun/";

export const irlContent: PortfolioViewArray = [
    {
        title: "Data & Decisions Developer",
        desc: `
        This is my current role. 
        IPF provides a variaty of loans, offering affordable financing solutions for individuals
        who need assistance with their financial needs. 
        As a developer, I worked on the software responsible for deciding and processing customer applications.
        The work involved heavy involvement in AWS, C#, IIS, T-SQL and other technologies.`,
        isDemo: false,
        url: preURL + "ipf",
        image: imageFolder + "ipf.png",
    },
    {
        title: "Full Stack Developer",
        desc: `
        As a Full Stack Developer at Shreem, I built key features, notably a real-time messaging component using React and Web Sockets.
        I conducted regular quality assurance checks and code reviews, ensuring platform integrity. 
        My role spanned both front-end tasks and back-end with an emphasis on user-facing features like menus, headers, and profile functionalities.`,
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "shreem.png",
    },
];

export const personalProjects: PortfolioViewArray = [
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
        desc: `
        It is a simple drawing program that uses a programming language designed for this project. 
        The program can let you draw anything that you might like using this specialty language.
        `,
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "drawing_program.png",
    },
    {
        title:"Python SPA Website",
        desc: `
        This is my website generation tool that I used on my old website. 
        It can take ODF and TXT formats and generate it into a downloadable webpage.
        It does this by utilising data URIs to create and compress the data that it needs.
        `,
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "old_website.png",
    },
    // {
    //     title:"",
    //     desc: "",
    //     isDemo: false,
    //     url: preURL + "",
    //     image: imageFolder + "",
    // },
];

export const demos: PortfolioViewArray = [
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
        desc: `
        A simple demonstration of how Langrage polynomials work. 
        You can place points anywhere along the screen and the curve will recalculate, 
        passing through all of the points made.`,
        isDemo: false,
        url: preURL + "",
        image: imageFolder + "lagrange.png"
    },
];

export const games: PortfolioViewArray = [
    {
        title:"Chalk",
        desc: `
        It's a simple game I wrote during university with my partner at the time. 
        It's a simple platformer where you try to get the chalk to come back into its box.
        I wrote the physics engine myself. It's written in JavaScript using the P5.js framework.
        `,
        isDemo: false,
        url: preURL + "chalk/ChalkPrivate/index.html",
        image: imageFolder + "chalk.png",
    },
];