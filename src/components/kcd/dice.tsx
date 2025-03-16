import { HTMLAttributes } from "react";
import diceStyle from "./dice.module.scss";
import classNames from "classnames";


export type DiceTypeValidSides = 1 | 2 | 3 | 4 | 5 | 6 | number;

export type DiceType = {
    showSide: DiceTypeValidSides,
    size?: "small";
}

const degrees: Array<[number, number]> =
    [
        [0, 0],
        [180, 0],
        [-90, 0],
        [90, 0],
        [0, -90],
        [0, 90],
    ];

export default function Dice({ showSide, size }: DiceType) {
    const realSide = ((showSide - 1) % 6) + 1;

    const [degY, degZ] = degrees[realSide - 1];

    const newStyle: HTMLAttributes<HTMLDivElement>["style"] = {
        transform: `rotateY(${degY}deg) rotateX(${degZ}deg)`,
    };

    const rootClassname = () => {
        switch(size) {
            case "small":
                return diceStyle.small;

            default:
                return undefined;
        }
    }

    return <div>
        <div className={classNames(diceStyle.diceRootWrapper, rootClassname())}>
            <div className={diceStyle.diceRoot} style={newStyle}>
                {[1, 2, 3, 4, 5, 6].map(v =>
                    <div key={v} className={diceStyle.side}>
                        <div className={diceStyle.face}>
                            <div className={diceStyle.contentWrapper}>
                                {v}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
}