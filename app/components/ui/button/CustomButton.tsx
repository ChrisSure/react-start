import React from "react";
import clsx from "clsx";
import type { CustomButtonProps } from "~/components/ui/button/core/interfaces/custom-button.interface";
import { BUTTON_VARIATION_CLASSES } from "~/components/ui/button/core/constants/button-variation-classes.constant";

export function CustomButton({
  label,
  variation = "default",
  className,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "h-10 px-4 rounded-md text-base font-medium focus:outline focus:outline-2 focus:-outline-offset-1 transition-colors cursor-pointer",
        BUTTON_VARIATION_CLASSES[variation],
        className,
      )}
    >
      {label}
    </button>
  );
}
