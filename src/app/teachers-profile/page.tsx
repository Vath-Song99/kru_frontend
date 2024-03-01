import {  Navbar, TeachersProfile } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-full'>
       <div className="w-full flex justify-center items-center">
                <Navbar />
                {/* <Modal/> */}
               
           </div>   
           <TeachersProfile />
    </div>
  )
}

export default page