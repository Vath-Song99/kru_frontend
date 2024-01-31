import React from 'react'
import { Dropdown, InputForm } from '@/components'
const Home = () => {
  return (
    <div>
      <InputForm width="sm" height="sm" placholder="Enter your email"/>
      <InputForm width="sm" height="sm" placholder="Enter your email" />
      <Dropdown className="my-custom-dropdown left-1/2 text-sm">
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">
          
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Duplicate</a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Edit</a>
         
        </div>
      </div>
    </Dropdown>
    </div>
  )
}

export default Home