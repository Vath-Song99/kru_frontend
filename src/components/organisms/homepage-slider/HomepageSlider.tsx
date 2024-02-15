import React from 'react'
import {  Typography,Button } from '@/components'
import Image from 'next/image'

const HomepageSlider = () => {
  return (
    <div className="w-full h-[327px] flex justify-between items-center pt-10">
    {/* Left side */}
    <div className="w-1/2 ">
      <h1 className="text-6xl   text-[#7B2CBF] font-extrabold leading-20 tracking-wide">
        Welcome to Kru platform
      </h1>

      <Typography className="mt-7" fontSize="lg" align="left">
        Kru’s vision is to connect communication between private teachers
        and students by digital ways
      </Typography>
      <Button
        className="w-[250px] h-[50px] mt-7 flex justify-around items-center"
        colorScheme="primary"
        fontSize="md"
        radius="md"
      >
        <Typography
        align="left"
        fontSize="xl"
        colorscheme="white"
        variant="normal"
        tags="h1"
        >Get started</Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Button>
    </div>
    {/* Right side */}
    <div className="">
      <Image
        src={"/Benner/Benner-top.png"}
        width={500}
        height={500}
        alt="Benner top"
      ></Image>
    </div>
  </div>
  )
}

export default HomepageSlider