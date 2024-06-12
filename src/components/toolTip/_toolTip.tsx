import styles from "./tooltip.module.scss";
import Tooltip from '@mui/material/Tooltip';

export type ToolTipProps = {
    children: JSX.Element,
    tip: string,
}

export default function ToolTip({ children, tip }: ToolTipProps) {
    return (
        <Tooltip
            className={styles.tooltip}
            title={tip}
            placement="top"
            arrow
        >
            {children}
        </Tooltip>
    );
}