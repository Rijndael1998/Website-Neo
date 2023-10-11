"use client";

export interface GridItemProps {
    value: number,
    possible: Array<number>,
    callback: (changedTo: number) => void,
}

export default function GridItem({ value, possible, callback }: GridItemProps) {
    const values = [value, ...possible];
    if(value != 0)
        values.push(0);

    values.sort((a, b) => a - b);

    return <div>
        <p>{value == 0 ? "" : value}</p>
        <select value={value} onChange={(e) => callback(Number.parseInt((e.target as HTMLSelectElement).value))}>
            {
                values.map((possibleValue) => {
                    return <option key={possibleValue} value={possibleValue}>
                        {possibleValue == 0 ? "" : possibleValue}
                    </option>
                })
            }
        </select>
    </div>
}