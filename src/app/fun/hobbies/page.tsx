import Lazy from "@/components/lazy/_lazy";
import { MusicDesc1, MusicDesc2, MusicDesc3, MusicDesc4, MusicICanPlay } from "@/content/Hobbies";
import Image from "next/image";

export default function Hobbies() {
    return <Lazy>
        <h1>Music</h1>

        {/* TODO: Please remove this hack */}
        <p style={{marginBottom: "0"}}> 
            {MusicDesc1}
        </p>

        <ul>
            {
                MusicICanPlay.map((item, index) => {
                    return <li key={index}>
                        <a href={item[1]}>{item[0]}</a>
                    </li>
                })
            }
        </ul>

        <p>
            {MusicDesc2}
        </p>

        <div className={".imageContainer"} style={{marginRight: "2.5rem", aspectRatio: 3840 / 1644, position: "relative"}}>
            <Image style={{width: "100%", height: "100%"}} alt="FL Studio Screenshot" quality={100} fill src="/fun/hobbies/music/fl_studio.png"/>
        </div>

        {/* TODO: Please remove this hack */}
        <p style={{marginBottom: "0"}}> 
            {MusicDesc3}
        </p>
        
        <audio controls src="/fun/hobbies/music/crab_rave.mp3"/>

        <p>
            {MusicDesc4}
        </p>
    </Lazy>
}