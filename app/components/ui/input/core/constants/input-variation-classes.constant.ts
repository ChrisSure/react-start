import type { CustomInputProps } from "~/components/ui/input/core/interfaces/custom-input-props.interface";

export const INPUT_VARIATION_CLASSES: Record<
  NonNullable<CustomInputProps["variation"]>,
  string
> = {
  default: "border-gray-200 focus:outline-blue-800",
  primary: "border-blue-500 focus:outline-blue-600",
  error: "border-red-500 focus:outline-red-600",
  success: "border-green-500 focus:outline-green-600",
};
