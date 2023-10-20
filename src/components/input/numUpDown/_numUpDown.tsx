import { GenericCallback } from "@/components/util"

export type NumUpDownProps = {
    start?: number,
    max?: number,
    min?: number,
    step?: number,
    callback?: (value: number) => any,
    className?: string,
}

export default function NumUpDown({ start, max, min, step, callback, className }: NumUpDownProps) {

    return <input
        defaultValue={start}
        type="number"
        className={className}
        onChange={(e) => callback && callback(Number.parseFloat(e.target.value))}
        max={max}
        min={min}
        step={step}
    />
}