import styles from "./footer.module.scss";
import Link from "next/link";
import Copy from "../copy/_copy";
import Quotes from "./quotes";
import ToolTip from "@/components/toolTip/_toolTip";
import { SignalIcon } from "@/components/muiWrappers/customIcons/Signal";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { DiscordIcon } from "@/components/muiWrappers/customIcons/Discord";
import Git from "./git";

export default function Footer() {
    return <footer className={styles.footer}>
        <h4>
            Contact
        </h4>
        <div className={styles.centre}>
            <div>
                <ToolTip tip="My name"><PersonPinIcon /></ToolTip>
                <p>Lukasz Baldyga<Copy text="Lukasz Baldyga" /></p>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/Rijndael1998/">
                    <ToolTip tip="LinkedIn"><LinkedInIcon /></ToolTip>
                    <p>Rijndael1998<Copy text="Rijndael1998" /></p>
                </Link>
            </div>
            <div>
                <ToolTip tip="Discord"><DiscordIcon /></ToolTip>
                <p>rijn.dev<Copy text="rijn.dev" /></p>
            </div>
            <div>
                <Link href="https://www.youtube.com/channel/UCEQmT-JPl79xNsOWF41WB7w">
                    <ToolTip tip="YouTube"><YouTubeIcon /></ToolTip>
                    <p>@Rijndael1998<Copy text="@Rijndael1998" /></p>
                </Link>
            </div>
            <div>
                <Link href="mailto:lukasz@baldy.ga">
                    <ToolTip tip="Email"><EmailIcon /></ToolTip>
                    <p>lukasz@baldy.ga<Copy text="lukasz@baldy.ga" /></p>
                </Link>
            </div>
            <div>
                <Link href="https://signal.me/#eu/scfqRTLwAkPWy3Bp_-nnIgf1QYKgMSBc5YKsfbU9mbiCBGuF_nBHUbFT0Sq0JoJl">
                    <ToolTip tip="Signal Messenger"><SignalIcon /></ToolTip>
                    <p>Rijndael.98<Copy text="Rijndael.98" /></p>
                </Link>
            </div>
        </div>
        <Quotes />
        <div style={{ display: "flex", flexDirection: "column", textAlign: "right", margin: "0", opacity: 0.12 }}>
            <Git />
            <Link href={"/debug/"} style={{ fontSize: "0.5em", display: "block", width: "6em", marginLeft: "auto" }}>
                <span>debug</span>
            </Link>
        </div>
    </footer>
}