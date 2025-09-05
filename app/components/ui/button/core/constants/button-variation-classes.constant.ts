import type { CustomButtonProps } from "~/components/ui/button/core/interfaces/custom-button.interface";

export const BUTTON_VARIATION_CLASSES: Record<
  NonNullable<CustomButtonProps["variation"]>,
  string
> = {
  default: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:outline-blue-800",
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:outline-blue-600",
  error: "bg-red-500 text-white hover:bg-red-600 focus:outline-red-600",
  success: "bg-green-500 text-white hover:bg-green-600 focus:outline-green-600",
};
