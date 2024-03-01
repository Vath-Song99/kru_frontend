import { Navbar } from '@/components'
import {TeacherList} from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-full '>
        <div className='w-full flex justify-center items-center border shadow-sm'>
              <Navbar/>    
        </div>
        <TeacherList/>
      
    </div>
  )
}

export default page