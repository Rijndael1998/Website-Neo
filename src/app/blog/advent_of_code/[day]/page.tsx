import Solution from "./solution";

export type AdventOfCodeDaysProps = {
    params: Promise<{ day: string }>,
};

export default async function AdventOfCodeDays({ params }: AdventOfCodeDaysProps) {
    const day = Number((await params).day);
    return <Solution day={day}/>
}