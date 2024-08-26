import { ReactElement } from "react";
import styles from "./tooltip.module.scss";
import Tooltip from '@mui/material/Tooltip';

export type ToolTipProps = {
    children: ReactElement,
    tip: string,
    className?: string,
    offset?: [x: number, y: number];
}

export default function ToolTip({ children, tip, className, offset }: ToolTipProps) {
    return (
        <Tooltip
            className={className ?? styles.tooltip}
            title={tip}
            placement="top"
            arrow
            slotProps={offset ? {
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: offset,
                            },
                        },
                    ],
                },
            } : undefined}

        >
            {children}
        </Tooltip>
    );
}