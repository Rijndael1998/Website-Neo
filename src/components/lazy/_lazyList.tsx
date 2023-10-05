export default function LazyList({ items }: { items: Array<[string, string]> }) {
    return <ul>
        {
            items.map((item, index) =>
                <li key={index}>
                    <a href={item[1]}>
                        {
                            item[0]
                        }
                    </a>
                </li>
            )
        }
    </ul>
}