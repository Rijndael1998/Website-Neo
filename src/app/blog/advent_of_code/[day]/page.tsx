export type AdventOfCodeDaysProps = {
    params: Promise<{ day: string }>,
};

export default async function AdventOfCodeDays({ params }: AdventOfCodeDaysProps) {
    const paramsDay = (await params).day;



    return <p>Post: {paramsDay}</p>
}