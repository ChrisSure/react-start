import React from "react";

export interface CustomListItem {
  id: string | number;
  title: string;
  description?: string;
  category?: string;
  [key: string]: any;
}

export interface CustomListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CustomListItem[];
  variation?: "default" | "bordered" | "compact" | "spaced";
}
