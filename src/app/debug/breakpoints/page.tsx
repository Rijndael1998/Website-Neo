import { Metadata } from "next"
import Breakpoints from "./breakpoints"

export const metadata: Metadata = {
    title: "All the breakpoints",
}

export default function Layout() {
    return <Breakpoints />
}