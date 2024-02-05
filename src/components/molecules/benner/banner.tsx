"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'
const Banner = () => {
  const image = ''
  return (
    <div className='w-screen flex justify-center'>
      <div className=' border-[#8e44ad] border-solid border-[2px] w-[1410px] h-[538px] mt-[40px]' >
        <div className='flex space-x-[200px]'>
          <Image src={"/picture/image 16.png"} width={730} height={539} alt="Imgbanner">
          </Image>
          <div className=''>
            <p className='text-[40px] w-[350px]  font-bold mt-[60px] '>
              Graduated or Want Internship ? Submit now , Show Your Skill
            </p>
            {/* <button className='bg-[#8e44ad] text-white rounded-md w-[300px] h-[80px] mt-[60px] text-[25px]'>
            Become a tutor now 
        </button> */}
            <Button
              rightIcon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>} className='w-[384px] h-[85px] rounded-md text-[25px] mt-[20px]'>
              Become A tutor now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { Banner }