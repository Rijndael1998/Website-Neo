export default async function AdventOfCodeDays({
    params,
  }: {
    params: Promise<{ day: string }>
  }) {
    const paramsDay = (await params).day;

    return <p>Post: {paramsDay}</p>
}