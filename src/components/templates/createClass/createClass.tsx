import React from 'react'
import Image from 'next/image'

const CreateClass = () => {
    return (
        <div className= 'container mx-auto  flex justify-center items-center border-white-10 border-2 sm:w-[820px]'>

            <div className='hidden lg:block'>
                <Image
                    src="/createclass.png"
                    alt='createclass'
                    width={500}
                    height={200}>
                </Image>
            </div>

            <div className='flex flex-col md:[280px]'>
                <div className='flex flex-col justify-center items-center container '>
                <p className='font-bold text-xl lg:text-3xl '>Create Classroom</p>
                <p className='text-xs w-[350px] h-[60px] mt-4  '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae repudiandae! Rem dicta commodi soluta reiciendis aspernatur minus. Aperiam, deserunt!

                </p>
                </div>
                <div className='md:w-[200px]'>
                <form action="">
                    <label className=' w-[300px]  flex flex-col justify-center items-center  '>
                        <input type="text"
                            placeholder='ClassName'
                            className='border-l-4  border-[#0000e8] mt-4 bg-[#f1f1f1]  w-[250px] h-[30px] px-3 lg:w-[300px]  md:w-[250px]' />
                        <input type="text"
                            placeholder='Subject'
                            className='border-l-4 border-[#0000e8] mt-4 bg-[#f1f1f1]  w-[250px] h-[30px] px-3 lg:w-[300px] md:w-[250px]'
                        />
                        <input type="text"
                            placeholder='Email Address'
                            className='border-l-4 border-[#0000e8] mt-4 bg-[#f1f1f1]  w-[250px] h-[30px] px-3 lg:w-[300px] md:w-[250px]'

                        />
                    </label>
                </form>
                </div>
              
                <div className='flex flex-col'>
                    <div className='flex justify-end items-end mt-3 text-xs' >
                        <p className='underline' >Add your student+</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type="submit"
                            className='bg-[#7B2CBF] w-[90px] h-[30px] text-white text-xs  md:w-[120px]  md:h-[35px] mb-3 mt-4'>Create Class</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { CreateClass }