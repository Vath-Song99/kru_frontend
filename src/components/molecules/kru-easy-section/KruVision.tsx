import { Typography } from '@/components/atoms'
import React from 'react'

const KruVision = () => {
  return (
    <div className='w-full h-[128px] bg-[#F6FAFC] flex justify-center items-center shadow-sm'>
         <div className='w-1/2 h-1/2'>
         <Typography
          className='tracking-wider capitalize'
          fontSize='xl'
          variant='bold'
         >Kru platform is <span className='text-[#7B2CBF]'>easy</span></Typography>
         <Typography
         className=''
         fontSize='sm'
         variant='normal'
         >once you login,you’ll know what to do</Typography>
         </div>
    </div>
  )
}

export  {KruVision}