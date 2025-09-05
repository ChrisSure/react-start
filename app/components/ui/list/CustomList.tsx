import React from "react";
import clsx from "clsx";
import type { CustomListProps, CustomListItem } from "~/components/ui/list/core/interfaces/custom-list.interface";
import { LIST_VARIATION_CLASSES } from "~/components/ui/list/core/constants/list-variation-classes.constant";

const ListItem = ({ item }: { item: CustomListItem }) => (
  <div className="flex items-start justify-between">
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
      {item.description && (
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      )}
      {item.category && (
        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {item.category}
        </span>
      )}
    </div>
    <div className="ml-4 text-gray-400">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

export function CustomList({
  items,
  variation = "default",
  className,
  ...props
}: CustomListProps) {
  const variationClasses = LIST_VARIATION_CLASSES[variation];
  
  return (
    <div
      {...props}
      className={clsx(variationClasses.container, className)}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={variationClasses.item}
        >
          <ListItem item={item} />
        </div>
      ))}
    </div>
  );
}
