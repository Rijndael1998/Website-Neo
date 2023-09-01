import headerStyles from "./header.module.scss";
import slidingStyles from "./sliding.module.scss";

export default function Header({title}: {title: string}): JSX.Element{
    return <>
        <div className={headerStyles.header}>
            <div className={slidingStyles.sliding} />
            <h1>{title}</h1>
        </div>
    </>
}