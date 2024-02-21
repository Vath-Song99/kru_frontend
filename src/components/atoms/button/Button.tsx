"use client";

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary"|"outline" | "tertiary";
  isDisabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: ReactNode;
  radius?: "sm" | "md" | "lg" | "xl"
  fontColor?: "primary" | "secondary" | "tertiary" | "white" | "black" 
  fontSize?: "sm" | "md" | "lg" | "xl"
  width?: number;
  height?: number;
  hover?: () => void
}

const Button: FC<ButtonProps> = ({
  children,
  className ,
  colorScheme = "primary",
  isDisabled = false,
  leftIcon,
  rightIcon,
  radius = "sm",
  fontColor = "text-white",
  fontSize = "sm",
  hover,
  width,
  height
  
}) => {
  const getColorSchemeClass = (schemeParam: string) => {
    switch (schemeParam) {
      case "primary":
        return "bg-[#7B2CBF] hover:bg-[#542598] text-white";
      case "secondary":
        return "bg-[#007C00] hover:bg-white hover:border hover:border-[#007C00] hover:text-[#455445]";
        case "outline":
          return "bg-none border border-[#7B2CBF]";
        case "tertiary":
          return "bg-[#F4F4F8] shadow-sm hover:bg-[#C8C8CC]" 
      default:
        return "bg-[#7B2CBF] hover:bg-[#542598] text-white";
    }
  };
  const buttonRadius = (radiusParam: string) =>{
    switch (radiusParam){
      case "sm": return "rounded-[0]"
      case "md": return "rounded-[10px]"
      case "lg": return "rounded-[15px]"
      case "xl": return "rounded-full"
      default: return "rounded-sm"
    }
  }
  const fontColorControl = (fontColor: string) =>{
    switch (fontColor){
      case "primary": return "text-[#7B2CBF]"
      case "secondary": return "text-[#455445]"
      case "black": return "text-black"
      case "white": return "text-white"
      default: return "text-white"
    }
  }
  const fontSizeControl = (fontSize: string) =>{
    switch (fontSize){
      case "sm": return "text-[12px]"
      case "md": return "text-[16px]"
      case "lg": return "text-[20px]"
      case "xl": return "text-[28px]"
      default: return "text-[12px]"
    }
  }

  
  const roundedButton = buttonRadius(radius)
  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const disableStyle = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
  const colorFont = fontColorControl(fontColor)
  const sizeFont = fontSizeControl (fontSize)
  const combinedClassName = ` ${roundedButton} ${colorFont} ${sizeFont}  ${disableStyle} ${colorSchemeClass} ${className}`;

  
  return (
    <button disabled={isDisabled} className={combinedClassName} onMouseOver={hover} >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export { Button };