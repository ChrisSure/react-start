import { Input } from '@base-ui-components/react/input';
import clsx from 'clsx';
import type { CustomInputProps } from "~/components/ui/input/core/interfaces/custom-input-props.interface";
import { INPUT_VARIATION_CLASSES } from "~/components/ui/input/core/constants/input-variation-classes.constant";

export function CustomInput({ placeholder, variation = 'default' }: CustomInputProps) {
    return (
        <Input
            placeholder={placeholder}
            className={clsx(
                'h-10 w-full rounded-md border pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1',
                INPUT_VARIATION_CLASSES[variation]
            )}
        />
    );
}
