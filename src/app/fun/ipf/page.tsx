import Lazy from "@/components/lazy/_lazy";
import LazyImage from "@/components/lazy/_lazyImage";

export default function IPF() {
    return <Lazy>
        <h1>International Personal Finance</h1>
        <LazyImage src="/fun/ipf.png" alt="IPF Logo" aspectRatio={1} />

        <h2>The company</h2>
        <p>
            {
                `
                International Personal Finance (IPF) is a leading international provider of Home Credit and Digital Loans. 
                The company operates in 10 countries across Europe and Mexico, focusing on lending responsibly to people in a convenient and transparent manner. 
                IPF began its operations over 130 years ago in the UK and presently serves over 2.2 million customers worldwide.
                `
            }
        </p>

        <p>
            {
                `
                IPF actively invests in its digital services, aiming to cater to changing customer habits and expanding its reach. 
                A significant part of my role involved working with key technologies like AWS services, demonstrating IPF's commitment
                to adopting digital solutions to enhance its operations. These investments are critical for the company's ultimate goal: 
                to provide customers with a sustainable, responsible, and personalized borrowing experience.
                `
            }
        </p>

        <h2>My Role</h2>
        <p>
            {
                `
                During my tenure as a software developer, I was responsible for managing and enhancing the software used for processing customer applications. 
                In addition to this, I also developed custom logging/monitoring software, contributing significantly to streamlining our operations. 
                My role also encompassed conducting thorough code reviews, providing specialized support, and crafting comprehensive documentation as needed. A substantial part of my work revolved around AWS services, chiefly Lambda, accompanied by proficiency in C#, .Net Core 6, IIS, T-SQL, and various other technologies.
                `
            }
        </p>
    </Lazy>
}