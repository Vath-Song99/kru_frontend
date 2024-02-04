import { Footer, Navbar } from '@/components'
import React from 'react'

const Homepage = () => {
  return (
    <div  className='w-full h-full '>
        <div className='h-full w-full flex justify-center items-center'>
              <Navbar/>
        </div>
        <Footer/>
    </div>
  )
}

export  {Homepage}