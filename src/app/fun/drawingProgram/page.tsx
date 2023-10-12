import Lazy from "@/components/lazy/_lazy";
import Link from "next/link";
import styles from "./drawing.module.scss";
import YoutubeEmbed from "@/components/external/youtube/_embed";
import ImageGallery from "@/components/imageGallery/_imageGallery";
import { example, exampleCode, gallery, hue, videos } from "@/content/fun/hobbies/drawingProgram/DrawingProgram";
import GalleryImage from "@/components/imageGallery/galleryImage";

const demo = "https://baldy.ga/Resources/ProjectFiles/AdvancedSoftwareEngineering/Advanced%20Software%20Engineering.exe";
const gh = "https://github.com/c3ypt1c/Advanced-Software-Engineering-Drawing-Project";
const guidelines = "https://baldy.ga/Resources/ProjectFiles/AdvancedSoftwareEngineering/L6ASE2020assignmentSpec.pdf"

export default function DrawingProject() {
    return <Lazy>
        <h1>Drawing Program</h1>
        <GalleryImage src={hue.src} aspectRatio={hue.aspectRatio} alt="" />
        <p>
            {`This is one of my third year university projects. The program can let you draw anything that you might like.
            You can download a demo `}<Link href={demo}>here</Link>{`. 
            Simply run the executable. 
            It should run under Wine, but I experienced problems with the file locator.
            The open source repository is `}<Link href={gh}>here</Link>.
        </p>

        <h2>The custom language</h2>
        <p>
            {
                `
                It is a simple drawing program that uses a programming language designed for this project. 
                I was told to instructed to create a program to meet a specific set of 
                `
            }
            <Link href={guidelines}>
                guidelines
            </Link>
            {
                `
                . I achieved 100% of the available marks in this project, meeting all of the criteria necessary.
                `
            }
        </p>

        <p>
            Some of the requirements were:
        </p>

        <ul>
            <li>Drawing of basic shapes and lines, like circles and squares.</li>
            <li>The ability to store and retrieve variables.</li>
            <li>Flow control, more specifically, <code>if</code> statements.</li>
            <li>Methods and functions. Specifically functions with or without parameters (recursions was not required).</li>
            <li>Loading and unloading programs.</li>
            <li>Error detection.</li>
        </ul>

        <h2>Gallery</h2>
        <ImageGallery images={gallery} aspectRatio={0} />

        <h2>Documentation</h2>
        <p>
            {
                `
                It was required that the software engineering project is fully documented.
                Every class has documentation regarding its use and place in the program.
                `
            }

            The documentation was generated using <Link href="https://github.com/doxygen/doxygen">Doxygen</Link>.
            You can read the documentation <Link href="/fun/hobbies/drawingProgram/html/index.html">here</Link>.

        </p>

        <h2>Videos</h2>
        <p>
            {
                videos
            }
        </p>

        <YoutubeEmbed videoID="Mu8wZJZAwrU" />
        <YoutubeEmbed videoID="R9EyubWpI3g" />

        <h2>Example</h2>

        <ImageGallery images={example} />

        <h4>Code</h4>
        <pre>
            {exampleCode}
        </pre>
    </Lazy>
}