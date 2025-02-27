"use client";

import Link from "next/link";
import { GroupPreviewContent } from "./_groupTypes";

export default function GroupItemWrapper({ children, portfolio }: { children: React.ReactNode, portfolio: GroupPreviewContent }) {
    return <>
        {children}
    </>
}