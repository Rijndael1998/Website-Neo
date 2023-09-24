"use client";

export interface GridItemProps {
    value: number,
    possible: Array<number>,
    callback: (changedTo: number) => void,
}

export default function GridItem({ value, possible, callback }: GridItemProps) {

    return <div>
            {value}
            <select>
                {
                    [0, ...possible].map((value) => {
                        return <option key={value} value={value} onClick={() => callback(value)}>
                            {value == 0 ? "" : value}
                        </option>
                    })
                }
            </select>
        </div>
}