import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  fontSize?: "base" | "sm" | "md" | "lg" | "xl";
  variant?: "normal" | "semibold" | "bold";
  colorshceme?: "primary"| "secondary"| "tb";
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  align = "center",
  fontSize = "base",
  variant = "normal",
  colorshceme ="primary"
}) => {
  const typographyAlign = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        "text-center";
    }
  };

  const typographyFontSize = (fontSize: string) => {
    switch (fontSize) {
      case "base":
        return "text-base";
      case "sm":
        return "text-sm";
      case "md":
        return "text-md";
      case "lg":
        return "text-lg";
      default:
        return "text-base";
    }
  };
  const typographyVariant = (variant: string) => {
    switch (variant) {
      case "normal":
        return "font-normal";
      case "bold":
        return "font-bold";
      case "semibold":
        return "font-semibold";
      default:
        return "font-normal";
    }
  };
  const typographycolorscheme = (color : string)=>{
    switch (color) {
      case "primary":
        return "bg-[#8e44ad]"
      case "secondary":
        return "bg-[#007c00]"
        case "tb":
        return "text-black"
      default:
        return "bg-[#8e44ad]"
    }
  }

  const typographyAlignStyles = typographyAlign(align);
  const typographyFontSizeStyles = typographyFontSize(fontSize);
  const typographyVariantStyles = typographyVariant(variant);
  const typographyColorStyles = typographycolorscheme(colorshceme);

  return (
    <p
      className={`${typographyColorStyles} ${typographyVariantStyles}  ${typographyFontSizeStyles} ${typographyAlignStyles} ${className}`}
    >
      {children}
    </p>
  );
};

export { Typography };
