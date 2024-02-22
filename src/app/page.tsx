import { Homepage } from '@/components'
import { SearchInput } from '@/components/molecules/search-input'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex justify-center'>
          <SearchInput></SearchInput>
    </div>
  )
}

export default page