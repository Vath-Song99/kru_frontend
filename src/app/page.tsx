import { Inputform } from '@/components'
import React from 'react'

import { InputForm, Typography, Button } from '@/components'
=======


const Home = () => {
  return (

    <div>

      <Typography 
       align='center'
       fontSize='sm'
      >
       smakshit
      </Typography>
     <Typography
     align='center'
     fontSize='lg'
     variant='semibold'
     colorshceme='secondary'
     >
      hello world
     </Typography>
     <Button
      align='right'
      maincolor='secondary'
     >
      hello 
     </Button>
     <Button
      align='right'
      maincolor='secondary'
     >
      Sign up 
     </Button>
     
    <div className=''>
       <Inputform type='search' placeholder='Search ..' className='w-full h-10 px-52 focus:outline-none'/>

    </div>
  )
}

export default Home