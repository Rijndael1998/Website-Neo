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
        <select>
            {
                values.map((possibleValue) => {
                    // console.log(value, possibleValue, value == possibleValue);
                    return <option key={possibleValue}
                        value={possibleValue}
                        onClick={() => callback(possibleValue)}
                        selected={value == possibleValue}>

                        {possibleValue == 0 ? "" : possibleValue}

                    </option>
                })
            }
        </select>
    </div>
}