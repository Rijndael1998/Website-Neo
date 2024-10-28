"use client";

import { ReactNode } from "react"
import { GenericCallback } from "../../util"

export type GenericButtonProps = {
    className?: string,
    children: ReactNode,
    selected?: boolean,
    disabled?: boolean,
    onClick?: GenericCallback,
}

export default function GenericButton({children, className, selected, disabled, onClick}: GenericButtonProps) {
    throw new Error("Generic button is being replaced with MUI");
}