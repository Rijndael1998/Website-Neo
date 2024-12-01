import Solution from "./solution";

export type AdventOfCodeDaysProps = {
    params: Promise<{ day: string }>,
};

export default async function AdventOfCodeDays({ params }: AdventOfCodeDaysProps) {
    const paramsDay = Number((await params).day);



    return <Solution day={paramsDay}/>
}