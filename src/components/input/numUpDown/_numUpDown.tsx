import { GenericCallback } from "@/components/util"
import * as React from 'react';
import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps,
    numberInputClasses,
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
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

    // return <input
    //     defaultValue={start}
    //     type="text"
    //     pattern="[0-9]*"
    //     inputMode="numeric"
    //     className={className}
    //     onChange={(e) => callback && callback(Number.parseFloat(e.target.value))}
    //     max={max}
    //     min={min}
    //     step={step}
    // />
    // return <BaseNumberInput
    //     slotProps={{
    //         incrementButton: {
    //             children: '▴',
    //         },
    //         decrementButton: {
    //             children: '▾',
    //         },
    //     }}
    //     defaultValue={start}
    //     onChange={(_, v) => v && callback && callback(v)}
    //     max={max}
    //     min={min}
    //     step={step}
    // />
}

/*


const CustomNumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: '▴',
        },
        decrementButton: {
          children: '▾',
        },
      }}
      {...props}
      ref={ref}
    />
  );
});
*/