"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  className: string;
}

const NavbarLeftSever: React.FC<NavbarProps> = ({ className }) => {
  return (
     <nav className= {`h-full flex items-center  ${className}`}>
          <Image src= {"/logos/គ្រូ (2).png"} alt="Logo Image"  width={107} height={122}></Image>
         <Link href={""} className="ml-5">Find teacher</Link>
         <Link href={""} className="ml-5">Become a teacher</Link>
     </nav>
  )
};

export { NavbarLeftSever };
