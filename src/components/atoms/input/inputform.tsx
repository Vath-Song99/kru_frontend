"use client"

import React from 'react'
interface typeInputProps {
    className?: string;
    type: string

}

const Inputform:React.FC <typeInputProps> = (

    {
        className,
        type
    }
) => {
  return (
    <input type={type} id={type}  className={ `border border-black   ${className}`} />
  )
}

export {Inputform}