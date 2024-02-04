"use client";

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary"|"cardButton";
  isDisabled?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  size?: number;
  radius?: number      
}

const Button: FC<ButtonProps> = ({
  children,
  className = "w-full",
  colorScheme = "primary",
  isDisabled = false,
  leftIcon,
  rightIcon,
  size
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-[#8E44AD] hover:bg-purple-500 text-white";
      case "secondary":
        return "bg-cyan-600 hover:bg-cyan-500";
        case "cardButton":
          return " border border-solid border-[#7b2cbf] focus:outline-none focus:border-[#7b2cbf] hover:bg-[#7b2cbf]  hover:text-white  transition duration-300 ease-in-out";
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