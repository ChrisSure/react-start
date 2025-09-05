import React from "react";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variation?: "default" | "primary" | "error" | "success";
}
