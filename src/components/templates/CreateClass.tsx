import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/atoms'

const CreateClass = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='container mx-auto flex justify-evenly items-center lg:border-white-30 lg:border-2'>
            <div className='hidden lg:block'>
                <Image
                    // className='bg-[black]'
                    src="/createclass.png"
                    alt='createclass'
                    width={500}
                    height={300}>
                </Image>
            </div>
            <div className='flex md:[280px]  flex-col w-[350px]'>
                <div className='flex flex-col justify-center items-center container '>
                    <p className='font-bold text-2xl lg:text-3xl '>Create Classroom</p>
                    <p className='text-xs tracking-tight w-[350px] h-[40px] mt-4 lg:text-xs'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae repudiandae! Rem dicta commodi soluta reiciendis aspernatur minus. Aperiam, deserunt!

                    </p>
                </div>
                <div className=' mt-4 md:w-[200px] '>
                    <form action="">
                        <label className=' w-[350px] flex flex-col justify-center items-center   '>
                            <input type="text"
                                placeholder='ClassName'
                                className='border-l-4  border-[#0000e8] mt-4 bg-[#f1f1f1]  w-[350px] h-[40px] px-3  md:w-[350px] lg:w-[350px]  outline-none' />
                            <input type="text"
                                placeholder='Subject'
                                className='border-l-4 border-[#0000e8] mt-4 bg-[#f1f1f1]  w-[350px] h-[40px] px-3 lg:w-[350px] md:w-[350px] outline-none'
                            />
                            <input type="text"
                                placeholder='Email Address'
                                className='border-l-4 border-[#0000e8] mt-4 bg-[#f1f1f1]  w-[350px] h-[40px] px-3 lg:w-[350px] md:w-[350px] outline-none'
                            />
                        </label>
                    </form>
                </div>
            <div className=''>
                <div className='flex justify-end mt-3 text-xs ' >
                    <a href="" className='underline'>
                        Add your student+
                    </a>
                </div>
                <div className='flex justify-center items-center'>
                    <Button className='w-[100px] h-[30px] text-white text-xs  md:w-[100px]  md:h-[30px]  mb-3 mt-4'>  Create Class</Button>
                    
                </div>
            </div>
            </div>

        </div>
        </div>
    )
}

export { CreateClass }