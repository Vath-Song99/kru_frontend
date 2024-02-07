"use client"
import React from 'react'
import Image from 'next/image'
import { Button, Typography } from '@/components'
const Banner = () => {

  return (
     <div className='w-full h-full flex justify-between items-center '>
          {/* Image */}
          <div className='w-1/2 h-full'>
              <Image
              className=''
              src={"/Benner/Benner-bottom.jpg"}
              width={730.18}
              height={532}
              alt='Benner image'
              >

              </Image>
          </div>
          {/* Heading */}

          <div className='w-1/2 h-full flex justify-center items-center'>
             <div className='w-1/2 h-1/2'>
              <Typography
              align='left'
              fontSize='lg'
              variant="semibold"
              className='text-3xl'
              >
              Graduated or Want Internship ? Submit now , Show Your Skill
              </Typography>

              <Button
               size='sm'
               fontSize='md'
               colorScheme='primary'
               className='mt-5 w-[300px] h-[50px]'
               radius='md'
              >Become a teacher now</Button>
            </div>
          </div>
     </div>
  )
}
export { Banner }