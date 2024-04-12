import styles from "./footer.module.scss";
import Image from "next/image";
import { RiAccountPinBoxFill, RiDiscordFill, RiHeart3Fill, RiLinkedinBoxFill, RiMailSendFill, RiYoutubeFill } from "@remixicon/react";

export default function Footer() {


    return <footer className={styles.footer}>
        <h4>
            Contact
        </h4>
        <div className={styles.centre}>
            <div>
                <RiAccountPinBoxFill/>
                <p>Lukasz Baldyga</p>
            </div>
            <div>
                <RiLinkedinBoxFill/>
                <p>Rijndael1998</p>
            </div>
            <div>
                <RiDiscordFill/>
                <p>rijn.dev</p>
            </div>
            <div>
                <RiYoutubeFill/>
                <p>@Rijndael1998</p>
            </div>
            <div>
                <RiMailSendFill/>
                <p>lukasz@baldy.ga</p>
            </div>
        </div>
        <h6>Made with <RiHeart3Fill color="#a80200"/> for humanity.</h6>
    </footer>
}