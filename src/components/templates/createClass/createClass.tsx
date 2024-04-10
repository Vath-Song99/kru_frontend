"use client"
import React from 'react'
import Image from 'next/image'

const CreateClass = () => {
    return (
        <div className='container mx-auto  flex justify-center items-center border-white-10 border-2 sm:w-[220px]'>

            <div className='hidden lg:block'>
                <Image
                    src="/createclass.png"
                    alt='createclass'
                    width={500}
                    height={200}>
                </Image>
            </div>

            <div className='flex flex-col md: w-[200px]'>
                <div className='flex flex-col justify-center items-center '>
                <p className='font-bold text-3xl md: '>Create Classroom</p>
                <p className='text-xs w-[350px] h-[60px] mt-4 '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae repudiandae! Rem dicta commodi soluta reiciendis aspernatur minus. Aperiam, deserunt!

                </p>
                </div>
                <div className='md: w-[300px]'>
                <form action="">
                    <label className=' w-[480px]  flex flex-col   '>
                        <input type="text"
                            placeholder='ClassName'
                            className='border-l-4  border-[#0000e8] mt-4 bg-[#f1f1f1] w-full h-[40px] px-3 ' />
                        <input type="text"
                            placeholder='Subject'
                            className='border-l-4 border-[#0000e8] mt-4 bg-[#f1f1f1] w-full h-[40px] px-3'

                        />
                        <input type="text"
                            placeholder='Email Address'
                            className='border-l-4 border-[#0000e8] mt-4 bg-[#f1f1f1] w-full h-[40px] px-3'

                        />
                    </label>
                </form>
                </div>
              
                <div className='flex flex-col'>
                    <div className='flex justify-end items-end mt-3' >
                        <p className='underline' >Add your student+</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type="submit"
                            className='bg-[#7B2CBF] w-[159px] h-[38px] text-white'
                        >Create Class</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { CreateClass }