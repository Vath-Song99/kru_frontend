import React from 'react'
import Image from 'next/image'


const Banner = () => {
const image =   ''
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
        </div>
       
    </div>
  </div>
   </div>
  )
}

export  {Banner}