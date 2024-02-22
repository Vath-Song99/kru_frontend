<<<<<<< HEAD
"use client";
import React from "react";
import { Typography } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
=======
"use client"
import React from 'react';

import Image from 'next/image'
import { Typography } from '@/components'
import Link from 'next/link'
>>>>>>> 67e45b24adcc96b4f131febf9bbfdaac32e54c19
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

<<<<<<< HEAD
        <div className="h-full w-[60%] flex justify-center items-center gap-5">
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Home</Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Become a teacher</Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>Find teacher</Link>
=======
              <div className='h-full  flex items-center pl-[51px]'>
                    <Link href={"/teacher'slist"} className=''>
                        <Typography>Find hello</Typography>
                    </Link>
                    <Link href={""} className='pl-[32px]'>
                          <Typography>Become a teacher</Typography>
                    </Link>
              </div>
>>>>>>> 67e45b24adcc96b4f131febf9bbfdaac32e54c19
        </div>
      </div>

      {/* right */}

      <div className="w-1/2 h-full flex items-center justify-end gap-5">
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
    </div>
  );
};

export { Navbar };
