import GalleryImage from "@/components/imageGallery/galleryImage";
import Lazy from "@/components/lazy/_lazy";
import { http2, msLink } from "@/content/portfolio/oldWebsite/OldWebsite";
import Link from "next/link";

export default function PythonSPAWebsite() {
    return <Lazy>
        <h1>Python SPA Website</h1>
        <GalleryImage src="/fun/old_website.png" aspectRatio={1} />
        <p style={{ marginTop: "4rem" }}>{
            `
            My old website was written to be completely open-source. It creates a Single Page Application which can be compressed and downloaded for an offline copy. 
            `
        }
        </p>

        <p>{
            `
            The program then creates 3 separate variations of the SPA. 
            `
        }
        </p>

        <p>{
            `
            The first is a normal copy, which simply links to the resources, and cannot be used offline.
            `
        }
        </p>

        <p>{
            `
            The second copy is a modified versions for people who don't want to use JavaScript or for screen 
            readers or "Reader Mode" in browsers.
            `
        }
        </p>

        <p>{
            `
            The downloadable copy is a HTML file that contains all of the images, style sheets, scripts and 
            some external resources, but not all of them, as linking everything would make the file balloon 
            in size. 
            `
        }
        </p>

        <p>
            <Link href="/fun/hobbies/oldWebsite/resources/down.html">{`Here's a sample`}</Link> of the old website. 
            Please note that none of the links pointing to <code>baldy.ga</code> will work. You can right click and save as, 
            just like the Founding Fathers intended.
        </p>

        <h2>Data URIs</h2>
        <p>

            <Link href="https://css-tricks.com/data-uris/">Data URIs</Link>
            {
                `
                (Uniform Resource Identifiers) are a web standard used to embed data in-line 
                in web documents as a Uniform Resource Identifier (URI) scheme. Rather than linking to 
                a file stored elsewhere with a URL, a Data URI allows you to include the data itself 
                directly within your HTML, CSS, or JavaScript code. This can be any type of data—notably 
                images, fonts, and other media files. Data URIs are represented as a string of 
                Base64-encoded data.
                `
            }
        </p>

        <p>
            {
                `
                However, this is not always a very good idea to use URIs everywhere.
                `
            }
        </p>

        <p>
            {
                `
                One of the features of `}<Link href={http2}>HTTP/2</Link>{` and HTTP/3 is multiplexing, which allows multiple requests 
                to be sent in parallel over a single TCP connection, minimizing resource load and 
                improving performance. When you serve just a single large HTML file, you lose these 
                benefits, limiting the performance enhancements these protocols offer.
                `
            }
        </p>

        <p>
            {
                `
                However, the main benefit of all this is that my website could no longer exist and you
                would still have a perfect snapshot of it years later. It also impresses my peers.
                `
            }
        </p>

        <h2>Generation</h2>
        <p>
            Another part that is very worth mentioning is that I can generate my pages from
            the <Link href="https://en.wikipedia.org/wiki/OpenDocument">odt</Link> format. This format
            allows me to write this very document in LibreOffice, where I have spell check and other
            important tools to help me write.
        </p>

        <GalleryImage src="/fun/hobbies/oldWebsite/LibreOfficeWriter.png" aspectRatio={1039 / 740} />

        <p>
            This is important because as the technologies will evolve and the tools will evolve,
            it’s important to use something solid to base your website on. In my case, I’ve decided
            that it would be the best to base it on an open standard that
            even <Link href={msLink}>Microsoft Office</Link> supports.
            Given this stability and availability, I really don’t see this format dying
            any time soon. I can be certain that it will last a long time. And if it doesn’t, I could
            always find a better format.
        </p>

        <p>
            I can also generate pages from HTML/HTM and plain text files.
            This allows for a backup method for generation and more control over the page that will be
            generated.
        </p>

        <h2>Error Checking</h2>
        <p>
            This project can automatically query <Link href="https://validator.w3.org/nu/">W3’s NU validator</Link> to find any problems with the program
            or the content that was used to generate the site.
        </p>

        <GalleryImage src="/fun/hobbies/oldWebsite/Errors.png" aspectRatio={1208 / 467} />

        <p>
            Upon completion, the script can automatically send the HTML to the service to be analysed.
            The script receives the info/warnings/errors if any are found and displays them, like above.
            This helps to find any potential errors before they are shipped to the public. This also
            doubles as a debugger if necessary.
        </p>

        <h2>Limitations</h2>
        <p>
            Odt support is lacking in parsing links and more elaborate features of this file format,
            such as lists and embedded images.
        </p>
    </Lazy>
}