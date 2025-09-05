import type { CustomListProps } from "~/components/ui/list/core/interfaces/custom-list.interface";

export const LIST_VARIATION_CLASSES: Record<
  NonNullable<CustomListProps["variation"]>,
  {
    container: string;
    item: string;
  }
> = {
  default: {
    container: "space-y-2",
    item: "p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer",
  },
  bordered: {
    container: "space-y-3",
    item: "p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer",
  },
  compact: {
    container: "space-y-1",
    item: "p-2 bg-white rounded hover:bg-gray-50 transition-colors cursor-pointer",
  },
  spaced: {
    container: "space-y-6",
    item: "p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer",
  },
};
