"use client";

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
  isDisabled?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "w-full",
  colorScheme = "primary",
  isDisabled = false,
  leftIcon,
  rightIcon,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-[#8E44AD] hover:bg-purple-500 text-white";
      case "secondary":
        return "bg-cyan-600 hover:bg-cyan-500";
      default:
        return "bg-[#8E44AD] hover:bg-purple-500 text-white";
    }
  };

  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const disableStyle = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
  const combinedClassName = `text-center flex items-center justify-center space-x-2 ${disableStyle} ${colorSchemeClass} ${className}`;

  return (
    <button disabled={isDisabled} className={combinedClassName}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export { Button };