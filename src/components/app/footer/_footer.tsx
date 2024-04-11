import styles from "./footer.module.scss";
import Image from "next/image";
import { RiAccountPinBoxFill, RiDiscordFill, RiLinkedinBoxFill, RiMailSendFill, RiYoutubeFill } from "@remixicon/react";

export default function Footer() {


    return <footer className={styles.footer}>
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
                <p>lukasz [at] baldy.ga</p>
            </div>
            <div>
                <Image src="/favico.png" width={50} height={50} alt="logo"/>
            </div>
        </div>
        {/* <div className={styles.imageWrapper}>
            <Image src="/favico.png" width={50} height={50} alt="logo"/>
        </div> */}
    </footer>
}