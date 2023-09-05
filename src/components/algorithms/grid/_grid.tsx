import { GridState } from "./gridState";
import GridItem from "./gridItem/_gridItem";
import styles from "./grid.module.scss";

export type GridCallback = (x: number, y: number) => void;

export type GridProps = {
    state: GridState,
    callback?: GridCallback,
}

// my first ever higher order function
function callbackGenerator(x: number, y: number, callback?: GridCallback) {
    if (!callback)
        return () => { };

    return () => callback(x, y);
}

export default function Grid({ state, callback }: GridProps) {
    return <div>
        {
            state.map(
                (columnItems, col) => <div className={styles.col} key={col}>
                    {
                        columnItems.map(
                            (item, row) =>
                                <GridItem
                                    key={row}
                                    callback={callbackGenerator(row, col, callback)}
                                    item={item}
                                />
                        )
                    }
                </div>
            )
        }
    </div>
}