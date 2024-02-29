"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import { Modal } from "@/components";

interface NavbarProps {
  className?: string,
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModal: boolean
}


const Navbar: React.FC <NavbarProps> = ({className,setIsShowModal,isShowModal}) => {
  

  return (
    <div className={`w-[80%] h-[100px] flex justify-between items-center  ${className}`}>
      <div className="h-full w-1/2 flex items-center justify-start">
        <Image
          src={"/Logos/KruLogo.png"}
          height={500}
          width={500}
          alt="Kru Logo"
          className="h-full w-[100px] object-cover"
        />
        <div className="hidden   lg:w-[80%] lg:flex  lg:justify-start lg:items-center lg:gap-5">
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Home</Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Become a teacher</Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Find teacher</Link>

        </div>
      </div>

      {/* right */}

      <div className="hidden lg:w-1/2 lg:h-full lg:flex lg:items-center lg:justify-end ">
        <Link
          href={"/Login"}
          className="text-[#455445] text-sm hover:underline"
        >
          Log in
        </Link>

        <div className="w-1/3 flex items-center justify-evenly ">
          {/* verticle Line */}
          <div className="h-5 w-[1px] border-l-2 border-[#455445]"></div>
          <Link
            href={"Sign up"}
            className="text-[#9B90C2] text-sm hover:underline"
          >
            Sign up for free
          </Link>
        </div>
        <Button className="px-4 py-2" colorScheme="primary">
          Get Started
        </Button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 lg:hidden xl:hidden cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          onClick={() => setIsShowModal?.(!isShowModal)}
        />
      </svg>

    </div>
  );
};

export { Navbar };
