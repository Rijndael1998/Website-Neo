import { ReactElement } from "react";
import styles from "./tooltip.module.scss";
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

export type ToolTipProps = {
    children: ReactElement | string,
    tip: string,
    placement?: TooltipProps["placement"],
}

export default function ToolTip({ children, tip, placement }: ToolTipProps) {
    return (
        <Tooltip
            className={styles.tooltip}
            title={tip}
            placement={placement ?? "bottom"}
            arrow
        >
            <>{children}</>
        </Tooltip>
    );
}