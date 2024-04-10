import { FilterDropdown } from '@/components/molecules'
import React from 'react'

const itemsDropdown = [
  {
   itemName: "English"
  }, {
    itemName: "Mathematics"
   }, {
    itemName: "Physics"
   }, {
    itemName: "Chemistry"
   },
]

const FilterTeachers = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="w-[80%] flex justify-between items-start flex-wrap gap-2">
        <FilterDropdown nameDropdown='Subject' itemsDropdown={itemsDropdown} />
        <FilterDropdown nameDropdown='Time Aviable' itemsDropdown={itemsDropdown} />
        <FilterDropdown nameDropdown='Province' itemsDropdown={itemsDropdown} />
        <FilterDropdown nameDropdown='Prcing' itemsDropdown={itemsDropdown} />
        </div>
    </div>
  )
}

export  {FilterTeachers}