import FoldingCount from "@/components/foldingAtHome/FoldingCount";
import { GroupPreviewContent, GroupViewArray } from "@/components/group/_groupTypes";

export const preURL = "portfolio/";
export const imageFolder = "/fun/";

const chalk: GroupPreviewContent = {
    title: "Chalk",
    desc: `
    In university, my ex partner and I developed an engaging platformer game.
    The objective is to guide a piece of chalk back into its box. 
    I crafted a custom physics engine to enhance the gameplay. 
    It's built with JavaScript, utilizing the P5.js framework for rendering functionality.
    `,
    isDemo: true,
    url: "/fun/chalk/index.html",
    image: imageFolder + "chalk.png",
};

const IPF = {
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
};

const LBU = {
    title: "LBU Student Rep",
    desc: `
    As a Student Rep at Leeds Beckett University, I represented student views on education, liaise with staff and the Students' Union, 
    and participate in a system improving academic representation.
    My duties included understanding student experiences, discussing solutions with staff and students, and reporting outcomes.
    `,
    isDemo: false,
    image: imageFolder + "lbu.png",
};

const Shreem = {
    title: "Full Stack Developer",
    desc: `
    As a Full Stack Developer at Shreem, I built key features, notably a real-time messaging component using React and Web Sockets.
    I conducted regular quality assurance checks and code reviews, ensuring platform integrity. 
    My role spanned both front-end tasks and back-end with an emphasis on user-facing features like menus, headers, and profile functionalities.`,
    isDemo: false,
    url: preURL + "shreem",
    image: imageFolder + "shreem.png",
};

const FAH = {
    title: "Folding@Home",
    desc: <>{`
    Folding@Home is a global project by Stanford University, utilizing idle computing power from volunteers' 
    computers to simulate protein folding. This research aids in understanding diseases like cancer and 
    Alzheimer's to develop potential treatments. 
    `}<FoldingCount /></>,
    isDemo: false,
    url: "https://stats.foldingathome.org/donor/name/rijn.dev",
    image: imageFolder + "foldingAtHome.webp",
};

const TOR = {
    title: "Tor Relay",
    desc: `
            Tor, is a free, open-source software that enables anonymous communication on the internet. 
            It conceals a user's location and usage from anyone conducting network surveillance, 
            thus maintaining the user's privacy and freedom. 
            I run a Tor node that helps the network.
            `,
    isDemo: false,
    // url: preURL \+ "",
    image: imageFolder + "tor.webp",
};

const RAI = {
    title: "R-AI",
    desc: `
    R-AI is a pioneering project I crafted, aimed at narrowing the gap between normal users and Artificial Intelligence.
    It operates as a streamlined Discord bot that allows you and your friends to engage in an interactive conversation. 
    Consider it as a group chat, brilliantly infused with ChatGPT. 
    Moreover, R-AI broadens its functionality by supporting group voice calls. 
    It even diversifies by adopting various intriguing personalities.
    `,
    isDemo: false,
    // url: preURL \+ "",
    image: imageFolder + "R-AI.png",
};

const crab = {
    title: "Hobbies",
    desc: "Sometimes I like to take a break from programming. I enjoy making 3d art, music and other random things.",
    isDemo: false,
    url: preURL + "hobbies",
    image: imageFolder + "crab_rave.png",
};

const SPA = {
    title: "Python SPA Website",
    desc: `
    This is my website generation tool that I used on my old website. 
    It can take ODF and TXT formats and generate it into a downloadable webpage.
    It does this by utilising data URIs to create and compress the data that it needs.
    `,
    isDemo: false,
    url: preURL + "oldWebsite",
    image: imageFolder + "old_website.png",
};

const THIS = {
    title: "Website Neo",
    desc: `
    This website. It was made in Next.js using TypeScript. 
    It is a huge collection of all of my past work with descriptions and documentation for everyone to see.
    It is mainly a celebration of everything I have done. Like everything else, it's FOSS.
    `,
    isDemo: false,
    image: "/favico.png",
}

const Nomad = {
    title: "Internet Nomad Password Manager",
    desc: `
    The Internet Nomad password manager is built upon research into encryption types.
    It focuses on the fact that a person maybe have one or more identities online. 
    It also offers unconventional recovery methods to allow users to recover from catastrophe.
    `,
    isDemo: false,
    url: preURL + "passwordManager",
    image: imageFolder + "password_manager.png",
};

const Drawing = {
    title: "Drawing Project",
    desc: `
    The university assignment that I achieved full marks on is a unique drawing program created using a specially designed programming language for this particular project. 
    The program enables users to draw freely using this language which is intended to be high level for easy comprehension by programming learners.
    `,
    isDemo: true,
    url: preURL + "drawingProgram",
    image: imageFolder + "drawing_program.png",
};

const ToDo = {
    title: "ToDo App",
    desc: `
    A simple ToDo application written for Android. Made for a Java assignment. 
    Uses fragments and SQLite 3. The assignment was designed to teach about app lifecycles,
    fragments, and other aspects of the Android operating system.
    `,
    isDemo: false,
    image: imageFolder + "todo.png",
};

const AS = {
    title: "A Star",
    desc: `
    I have developed an efficient path-finding solver, implementing the sophisticated A Star algorithm. 
    This software is readily available on GitHub for you to utilize and modify as per your needs. 
    For a practical demonstration of its functionality, feel free to explore the live demo.
    `,
    isDemo: true,
    url: preURL + "a-star",
    image: imageFolder + "aStar.png",
};

const Sudoku = {
    title: "Sudoku Solver",
    desc: "I have made a Sudoku solver. The brute-force Backtracking algorithm is the major solving algorithm in this Sudoku solver with a supporting algorithm that helps remove singles from the graph.",
    isDemo: true,
    url: preURL + "sudoku",
    image: imageFolder + "sudoku_solver.png",
};

const Langrage = {
    title: "Langrage Demo",
    desc: `
    A simple demonstration of how Langrage polynomials work. 
    You can place points anywhere along the screen and the curve will recalculate, 
    passing through all of the points made.`,
    isDemo: true,
    url: preURL + "langrage",
    image: imageFolder + "lagrange.png"
};

const Marta = {
    title: "Marta",
    desc: `
    
    `,
    isDemo: false,
    image: imageFolder + "marta.jpg",
}

const HAL = {
    title: "HAL Systems LTD",
    desc: `
    From the age of 16 until I was 21, I served as a Webmaster for HAL Systems LTD. 
    During this time, I personally hosted the company's website on my own hardware, ensuring consistent uptime and performing regular maintenance.
    I provided aftermarket updates to the website, including content changes and performance updates as well as ongoing website support.
    Additionally, I also managed the company's email accounts, setting up and administering email addresses as needed.
    `,
    isDemo: false,
    image: imageFolder + "hal.webp",
}

export const irlContent: GroupViewArray = [
    IPF,
    Shreem,
    HAL,
];

export const volunteering: GroupViewArray = [
    FAH,
    LBU,
    Marta,
];

export const personalProjects: GroupViewArray = [
    RAI,
    crab,
    SPA,
    THIS,
];

export const collegeWork: GroupViewArray = [
    Nomad,
    Drawing,
    ToDo,
];

export const demos: GroupViewArray = [
    AS,
    Sudoku,
    Langrage,
];

export const games: GroupViewArray = [
    chalk,
];
