import { HTMLAttributes } from "react";
import diceStyle from "./dice.module.scss";


export type DiceTypeValidSides = 1 | 2 | 3 | 4 | 5 | 6 | number;

export type DiceType = {
    showSide: DiceTypeValidSides,
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

export default function Dice({ showSide }: DiceType) {
    const realSide = ((showSide - 1) % 6) + 1;

    const [degY, degZ] = degrees[realSide - 1];

    const newStyle: HTMLAttributes<HTMLDivElement>["style"] = {
        transform: `rotateY(${degY}deg) rotateX(${degZ}deg)`,
    };

    return <div className={diceStyle.diceRootWrapper}>
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
}