import Link from "next/link";
import Git from "./git";

export default function Debug() {
    return <div style={{ display: "flex", flexDirection: "column", textAlign: "right", margin: "0", opacity: 0.12 }}>
        <Git />
        <Link href={"/debug/"} style={{ fontSize: "0.5em", display: "block", width: "6em", marginLeft: "auto" }}>
            <span>debug</span>
        </Link>
    </div>
}