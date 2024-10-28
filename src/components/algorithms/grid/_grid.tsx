import GridItem from "./gridItem/_gridItem";
import styles from "./grid.module.scss";
import classNames from "classnames";
import { CSSProperties } from "react";

export interface StyledGridState {
    getStyledGridState(): Array<Array<string>>;
}

export type GridCallback = (x: number, y: number) => void;
export type ExtraCallback = (x: number, y: number) => CSSProperties | void;

export type GridProps = {
    state?: StyledGridState,
    className?: string,
    callback?: GridCallback,
    extraStyleFunction?: ExtraCallback,
}

// my first ever higher order function
function callbackGenerator(x: number, y: number, callback?: GridCallback) {
    if (!callback)
        return () => { };

    return () => callback(x, y);
}

export default function Grid({ state, className, callback, extraStyleFunction }: GridProps) {
    return <div className={className}>
        {
            state && state.getStyledGridState().map(
                (columnItems, col) => <div className={styles.col} key={col}>
                    {
                        columnItems.map(
                            (item, row) => {
                                return <GridItem
                                    key={row}
                                    callback={callbackGenerator(row, col, callback)}
                                    item={item}
                                    style={(extraStyleFunction && extraStyleFunction(row, col)) ?? undefined}
                                />
                            }
                        )
                    }
                </div>
            )
        }
    </div>
}