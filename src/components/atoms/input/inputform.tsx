"use client";

import React from "react";

interface InputProps {
  className?: string;
  type: string;
  placeholder?: string;
}

const Inputform: React.FC<InputProps> = ({ className, type, placeholder }) => {
  return (
    <input
      type={type}
      id={type}
      placeholder={placeholder}
      className={`  ${className}`}
    />
  );
};

export { Inputform };
