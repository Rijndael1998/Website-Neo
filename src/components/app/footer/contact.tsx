import ToolTip from "@/components/toolTip/_toolTip";
import { SignalIcon } from "@/components/muiWrappers/customIcons/Signal";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { DiscordIcon } from "@/components/muiWrappers/customIcons/Discord";
import Link from "next/link";
import Copy from "../copy/_copy";
import styles from "./footer.module.scss";

export default function Contact() {
    return <div className={styles.centre}>
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
}