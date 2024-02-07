"use client"
import React, { ReactNode } from "react";

interface ButtonIconProps {
    icon: ReactNode;
    className?: string;
}
const ButtonIcon : React.FC<ButtonIconProps> = ({icon, className}) => {
    return (
        <button
        className={`h-10 w-10 rounded-ful flex items-center justify-center cursor-pointer hover:rounded-full hover:bg-purple-500 ${className}`}
        >
            {icon}
        </button>
    )
}
export {ButtonIcon};