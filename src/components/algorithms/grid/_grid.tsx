import { GridState } from "./gridState";
import GridItem from "./gridItem/_gridItem";
import styles from "./grid.module.scss";

export type GridCallback = (x: number, y: number) => void;

export type GridProps<T> = {
    state: GridState<T>,
    callback?: GridCallback,
}

// my first ever higher order function
function callbackGenerator(x: number, y: number, callback?: GridCallback) {
    if (!callback)
        return () => { };

    return () => callback(x, y);
}

export default function Grid<T>({ state, callback }: GridProps<T>) {
    return <div>
        {
            state.getStyledGridState().map(
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