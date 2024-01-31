import React, { ReactNode } from 'react';

interface ButtonProps {
  maincolor?: "primary" | "secondary";
  align?: "center" | "right" | "left" | "justify";
  children: ReactNode;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({
  classname,
  children,
  align = "center",
  maincolor = "primary",
}) => {
  const buttonalign = (align: string) => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "left":
        return "text-left";
      case "justify":
        return "text-justify";
      default:
        return "text-center";
    }
  };

  const buttonmaincolor = (maincolor: string) => {
    switch (maincolor) {
      case "primary":
        return "bg-[#8e44ad]";
      case "secondary":
        return "bg-[#007c00]";
      default:
        return "bg-[#8e44ad]";
    }
  };

  const maincolorstyle = buttonmaincolor(maincolor);
  const alignstyle = buttonalign(align);

  return (
    <button className={`rounded-md ${alignstyle} ${maincolorstyle} ${classname}`}>
      {children}
    </button>
  );
};

export { Button };
