import { Button, Dropdown, InputForm, LinkDropdown, ShowDropdown } from '@/components'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex'>
       {/* <Dropdown buttonContent="Dropdown" className='w-36'>
         <ShowDropdown className='w-36'>
              <LinkDropdown>
               Hello
              </LinkDropdown>
              <LinkDropdown>
               Hello
              </LinkDropdown>
         </ShowDropdown>
       </Dropdown> */}
      
     <InputForm 
     type='text' 
     placeholder='Search...'
     className='border border-gray-400 h-10'
      />
    </div>
  )
}

export default Page