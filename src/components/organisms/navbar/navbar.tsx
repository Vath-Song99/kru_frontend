"use client"
import { NavbarLeftSever, NavbarRightClient } from '@/components'
import React from 'react'
interface NavbarProps {
    className?: string
}

const Navbar:React.FC <NavbarProps> = (
    {
      className
    }
) => {
  return (
    <div className= {`w-[1408px] h-[122px] bg-white shadow-sm flex justify-between items-center    ${className}`}>
        <NavbarLeftSever className=''></NavbarLeftSever>
        <NavbarRightClient></NavbarRightClient>
    </div>
  )
}

export  {Navbar}