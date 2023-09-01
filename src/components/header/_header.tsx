import headerStyles from "./header.module.scss";
import slidingStyles from "./sliding.module.scss";

export default function Header({children}: {children: JSX.Element[]}): JSX.Element{
    return <>
        <div className={headerStyles.header}>
            <div className={slidingStyles.sliding} />
            {children}
        </div>
    </>
}