import styles from "./tooltip.module.scss";
import { Tooltip } from 'react-tooltip'

export type ToolTipProps = {
    children: JSX.Element,
    tip: string,
}

export default function ToolTip({ children, tip }: ToolTipProps) {
    return <>
        <span className={styles.tooltip} title={tip}>
            {children}
        </span>
    </>;
}

