import Lazy from "@/components/lazy/_lazy";
import LazyLocalImage from "@/components/lazy/_lazyLocalImage";
import { links } from "@/content/portfolio/passwordManager/PasswordManager";
import Link from "next/link";

import accountsImage from "./images/accounts.png";
import createContainer from "./images/create_container.png";
import identities from "./images/identities.png";
import login from "./images/login.png";


export const metadata = {
    title: "Internet Nomad Password Manager",
    description: "During my final year of university, I developed a security-related product that encompassed various aspects of project management. This entailed conducting risk assessment, allocating resources, implementing a development methodology, and more."
};

export default function PasswordManager() {
    return <Lazy>
        <h1>Internet Nomad Password Manager</h1>
        <LazyLocalImage src={login} alt={"Internet Nomad Login"} cap/>
        <p>
            During my final year of university, I developed a security-related product that encompassed
            various aspects of project management. This entailed conducting risk assessment, allocating
            resources, implementing a development methodology, and more.
        </p>

        <h2>Features</h2>
        <ul>
            <li>You can choose your own encryption: AES or Blowfish ciphers with PBKDF2 or Argon2 key derivation functions</li>
            <li>Strongest security that adapts to your hardware and patience:</li>
            <ul>
                <li>The program adapts the number of rounds to the time needed to unlock based on a benchmark</li>
                <li>The program can adapt to the amount of RAM available (Argon2 specific)</li>
            </ul>
            <li>Separate identities are available</li>
            <li>Shared recovery method</li>
            <li>Paper recovery method</li>
            <li>Password Generator</li>
            <li>Theming Support</li>
        </ul>

        <h2>Encryption and Data Security</h2>
        <LazyLocalImage src={createContainer} alt={"Internet Nomad Login"} />
        <p>
            The user can choose their encryption in the password manager.
            The user has a choice of <Link href={links.bf}>Blowfish</Link> or <Link href={links.aes}>AES</Link> as the <Link href={links.enc}>encryption method</Link>, and <Link href={links.pbk}>PBKDF2</Link> and <Link href={links.arg}>Argon2</Link> as <Link href={links.kdf}>key derivation function</Link>.

            Once the user has selected the appropriate encryption settings,
            they can fine tune the amount of memory that the program should use and
            the amount of time the program should take to open one password.
            Multiple passwords can be added to open the password manager.
            This is done by encrypting and keeping a copy of the master key in each slot.
            This removes the need to share the same password.
            It also makes this password manager secure.
        </p>

        <h2>Shared Recovery</h2>
        <p>
            {
                `
                It's highly possible that a hypothetical adversary attempting to break the encryption on your password manager might not allow you to simply walk away. 
                They may even become hostile, potentially leading to dangerous outcomes for the user, leaving potentially important data forever encrypted.
                To alleviate this, the password manager lets you set up a shared recovery scheme before such a situation arises. 
                This scheme allows trusted individuals to unlock and access the password manager’s contents. 
                There’s no way of knowing how many of these recovery schemes exist, 
                so if done properly the adversary also wouldn't know who these trusted individuals are.
                A shared recovery scheme creates a number of pieces given an opening threshold, from which the master key can be derived.
                The number of pieces and the threshold can be set independent of each other. (`}<Link href={links.adi}>Adi Shamir</Link>{`, 1979). 
                Alternatively, if the user prefers, they can use a different backup method that doesn't involve the shared recovery scheme - perhaps by entrusting a single entity with a backup master key and storing the key in a secure location.
                `
            }
        </p>

        <h2>Identities</h2>
        <LazyLocalImage src={identities} alt={"Internet Nomad Login"} />
        <p>
            Another distinct feature of the password manager is that it implements “Identities”,
            which are fundamentally a collection of accounts. The password manager is designed as a
            supplement for operating on the Tor network. Having identities ensures that the user does
            not accidentally “link”, accounts that they do not want to be linked together, allowing
            the user to assume an identity per Tor session. This allows for a much safer operating
            security when doing sensitive tasks.
        </p>

        <h2>Accounts</h2>
        <LazyLocalImage src={accountsImage} alt={"Internet Nomad Login"} />
        <p>
            The password manager has many common password manager functions.
            It{`'`}s possible to create accounts, generate passwords, delete and edit accounts and more.
        </p>

        <h2>Password Manager Report</h2>
        <p>
            This was mostly an exert from my <Link href="https://github.com/c3ypt1c/PasswordManager/blob/master/Documents/Component%202/Password%20Manager%20Report.pdf">Password Manager Report</Link>.
            The full project is <Link href="https://github.com/c3ypt1c/PasswordManager">available on GitHub</Link>,
            if you{`'`}d like to view it and play with it.
        </p>

        <h6>Bibliography</h6>
        <p>
            Adi Shamir (1979) ‘<Link href={links.adi}>How to Share a Secret</Link>’,
            Massachusetts Institute of Technology, 22(11), pp. 612–613.
        </p>
    </Lazy>
}