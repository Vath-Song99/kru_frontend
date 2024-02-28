"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

const Navbar = () => {
  return (
    <div className={`w-[80%] h-[100px] flex justify-between items-center`}>
      <div className="h-full w-1/2 flex items-center justify-start">
        <Image
        src={"/Logos/KruLogo.png"}
        height={500}
        width={500}
        alt="Kru Logo"
        className="h-[100px] w-[100px] object-cover"
      
        />
        <div className="hidden lg:w-[60%] lg:flex lg:justify-center lg:items-center lg:gap-5 xl:w-[60%] xl:flex xl:justify-center xl:items-center xl:gap-5">
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Home</Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Become a teacher</Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Find teacher</Link>
          
        </div>

      </div>

      {/* right */}

      <div className="hidden lg:w-1/2 lg:h-full lg:flex lg:items-center lg:justify-end lg:gap-5 xl:w-1/2 xl:h-full xl:flex xl:items-center xl:justify-end xl:gap-5">
        <Link
          href={"/Login"}
          className="text-[#455445] text-sm hover:underline"
        >
          Log in
        </Link>

        <div className="w-1/4 flex items-center justify-evenly ">
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:hidden xl:hidden cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" onClick={() => alert("hello world")} />
</svg>

    </div>
  );
};

export { Navbar };
