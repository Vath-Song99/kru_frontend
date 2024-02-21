import React from 'react'
import {  Typography,Button } from '@/components'
import Image from 'next/image'




const HomepageSlider = ({className}:{className?:string}) => {
  return (
    <div className={`w-full h-[327px] flex justify-between items-center pt-10 ${className}`}>
    {/* Left side */}
    <div className="w-1/2 ">
      <Typography className='leading-none tracking-wide ' tags='h1' fontSize='4xl' variant='2-extrabold' align='left' colorscheme='primary'>
        Welcome to Kru platform
      </Typography>

      <Typography className="mt-7" fontSize="md"  variant='normal' align="left">
        Kru’s vision is to connect communication between private teachers
        and students by digital ways
      </Typography>
      <Button
        className="w-[205px] h-[50px] mt-7 flex justify-around items-center"
        colorScheme="primary"
        fontSize="sm"
        radius="md"
      >
        <Typography
        className='tracking-widest'
        align="left"
        fontSize="md"
        colorscheme="white"
        variant="normal"
        tags="p"
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
        width={600}
        height={600}
        alt="Benner top"
      ></Image>
    </div>
  </div>
  )
}

export default HomepageSlider