import React from 'react'

import Image from 'next/image'

const Banner = () => {
const image =   ''
  return (
   <>
  <div className='ml-[20px] border-[#8e44ad] border-solid border-[2px] w-[1410px] h-[538px] mt-[40px]' >
    <div className='flex font-bold '>
        <Image src={"/picture/image 16.png"} width={730} height={538} alt="Imgbanner">   
        </Image>
        <p className='text-[30px] w-[60px] '>
            Graduated or Want Internship ? Submit now , Show Your Skill
        </p>
       
    </div>
  </div>
   </>
  )
}

export  {Banner}