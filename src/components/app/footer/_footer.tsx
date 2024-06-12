import styles from "./footer.module.scss";
import { RiAccountPinBoxFill, RiDiscordFill, RiLinkedinBoxFill, RiMailSendFill, RiYoutubeFill } from "@remixicon/react";
import Link from "next/link";
import Copy from "../copy/_copy";
import Quotes from "./quotes";

export default function Footer() {


    return <footer className={styles.footer}>
        <h4>
            Contact
        </h4>
        <div className={styles.centre}>
            <div>
                <RiAccountPinBoxFill />
                <p>Lukasz Baldyga<Copy text="Lukasz Baldyga" /></p>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/Rijndael1998/">
                    <RiLinkedinBoxFill />
                    <p>Rijndael1998<Copy text="Rijndael1998" /></p>
                </Link>
            </div>
            <div>
                <RiDiscordFill />
                <p>rijn.dev<Copy text="rijn.dev" /></p>
            </div>
            <div>
                <Link href="https://www.youtube.com/channel/UCEQmT-JPl79xNsOWF41WB7w">
                    <RiYoutubeFill />
                    <p>@Rijndael1998<Copy text="@Rijndael1998" /></p>
                </Link>
            </div>
            <div>
                <Link href="mailto:lukasz@baldy.ga">
                    <RiMailSendFill />
                    <p>lukasz@baldy.ga<Copy text="lukasz@baldy.ga" /></p>
                </Link>
            </div>
        </div>
        <Quotes/>
    </footer>
}