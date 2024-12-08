import Link from "next/link";

function MakeEmptyArray(length: number) {
    const newArray = [];
    while (length-- > 0)
        newArray.push(0);

    return newArray;
}

export type AdventOfCodeListProps = {
    day: number,
};

export function AdventOfCodeList({ day }: AdventOfCodeListProps) {
    return <ul>
        {
            MakeEmptyArray(day).map((_, key) => {
                const st = `Day ${key + 1}`;
                const extra = (key + 1 == day) ? " is now available." : ".";

                return <li key={key}>
                    <Link href={`advent_of_code/${key + 1}`}>{st}</Link>{extra}
                </li>
            })
        }
    </ul>
}