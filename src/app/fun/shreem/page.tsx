import GalleryImage from "@/components/imageGallery/galleryImage";
import Lazy from "@/components/lazy/_lazy";

export default function Shreem() {
    return <Lazy>
        <h1>Shreem</h1>

        <GalleryImage src="/fun/shreem.png" aspectRatio={1} />

        <h2>The Company</h2>
        <p>
            Shreem is a specialized digital platform that caters to the creative industry.
            It is designed around the needs of creatives and artists, with the primary mission to enable them to
            thrive and gain empowerment. Shreem facilitates a space where businesses can interact,
            discover and connect with a wide range of talented creatives, whether for projects or longer term
            positions within their company.
        </p>

        <p>
            Shreem understands the unique complexities of the creative industry and aims to streamline the process
            of talent discovery for businesses. To expedite this process, businesses can easily create a free
            account and begin their search for the perfect talent to fulfill their needs.
        </p>

        <h2>The Role</h2>

        <p>
            At Shreem, my role as a Full Stack Developer was multifaceted and crucial to the development of the 
            platform&apos;s key functionalities. One of my most notable achievements was designing and implementing a 
            real-time messaging component. This feature, built using React and Web Sockets, has allowed instant 
            communication on the platform, fostering an interactive environment between businesses and creatives.
        </p>

        <p>
            My work involved regular quality assurance checks and code reviews. This process was instrumental in 
            maintaining the platform&apos;s integrity, ensuring smooth operations, and identifying and resolving 
            potential issues swiftly and effectively. It ensured that the platform remained reliable and 
            trustworthy for its users.

        </p>

        <p>
            Beyond these tasks, my responsibilities extended across the breadth of Shreem&apos;s infrastructure – 
            from front-end to back-end development. On the front-end, I focused on developing user-centric 
            features such as menus, headers, and profile functionalities. These elements were crucial in 
            creating an intuitive and user-friendly platform, considering the creative industry&apos;s unique 
            needs. Constructing these features involved not just technical fluency, but also an understanding 
            of our users&apos; needs – making these tasks both challenging and rewarding.
        </p>

        <p>
            Overall, my work as a Full Stack Developer at Shreem significantly contributed to the platform&apos;s 
            functionality and user experience, as well as my own personal growth.
        </p>
    </Lazy>
}