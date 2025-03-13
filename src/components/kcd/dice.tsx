import diceStyle from "./dice.module.scss";


export type DiceTypeValidSides = 1 | 2 | 3 | 4 | 5 | 6;

export type DiceType = {
    showSide: DiceTypeValidSides,
}

export default function Dice({ showSide }: DiceType) {


    return <div className={diceStyle.diceRoot}>
        {[1, 2, 3, 4, 5, 6].map(v =>
            <div key={v} className={diceStyle.side}>
                <div className={diceStyle.face}>{v}</div>
            </div>
        )}
    </div>
}