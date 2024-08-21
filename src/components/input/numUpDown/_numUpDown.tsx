import * as React from 'react';
import { TextField } from "@mui/material";
import DarkModeFix from "@/components/muiWrappers/darkModeFix/_darkModeFix";

export type NumUpDownProps = {
    start?: number,
    max?: number,
    min?: number,
    step?: number,
    callback?: (value: number) => any,
    label?: string,
}

export default function NumUpDown({ start, max, min, step, callback, label }: NumUpDownProps) {
    return <DarkModeFix>
        <TextField
            defaultValue={start}
            inputMode="numeric"
            type="number"
            label={label}
            variant="filled"
            onChange={(e) => callback && callback(Number.parseFloat(e.target.value))}
            inputProps={
                {
                    max,
                    min,
                    step,
                }
            }
        />
    </DarkModeFix>
}
