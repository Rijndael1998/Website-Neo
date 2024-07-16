import styles from "./footer.module.scss";
import { RiAccountPinBoxFill, RiDiscordFill, RiLinkedinBoxFill, RiMailSendFill, RiYoutubeFill } from "@remixicon/react";
import Link from "next/link";
import Copy from "../copy/_copy";
import Quotes from "./quotes";
import ToolTip from "@/components/toolTip/_toolTip";
import { Signal } from "@/components/customIcons/Signal";

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
                    <ToolTip tip="LinkedIn"><RiLinkedinBoxFill /></ToolTip>
                    <p>Rijndael1998<Copy text="Rijndael1998" /></p>
                </Link>
            </div>
            <div>
                <ToolTip tip="Discord"><RiDiscordFill /></ToolTip>
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
            <div>
                <Link href="https://signal.me/#eu/8z5q24YBYL5drWZt1lQ5v3DZ8iAEUTTUgFDIA2BaAv0qmzWx4i1Idoa0lkS6mj3U">
                    <Signal />
                    <p>Rijndael.98<Copy text="Rijndael.98" /></p>
                </Link>
            </div>
        </div>
        <Quotes />
    </footer>
}