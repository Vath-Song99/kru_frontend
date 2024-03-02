import { InputForm } from '@/components/atoms'
import { CardTeachers, SearchInput } from '@/components/molecules'
import { FilterTeachers, TeacherListCards } from '@/components/organisms'
import React from 'react'

const TeacherList = () => {
  return (
    <div className='w-full grid grid-flow-row gap-10 pt-8'>
          <FilterTeachers/>
          <SearchInput/>
          <TeacherListCards/>
         
    </div>
  )
}

export  {TeacherList}