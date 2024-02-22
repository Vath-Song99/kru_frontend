import ProfileCard from '@/components/molecules/profile-card-teacher'
import React from 'react'

const TopTeachersList = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className='w-full flex justify-center items-center flex-wrap'>
        <div className='w-[75%] flex justify-between items-center'>
        <ProfileCard
        className=""
        imageUrl="/Profiles/teacher1.avif"
        username= "horn thorn"
        subjectname="English Teacher"
        rateStar={88}
        price={20}
        students={100}
        />
         <ProfileCard
        className=""
        imageUrl="/Profiles/English Teacher.jpg"
        username= "Khiev Navin"
        subjectname="Mathematics Teacher"
        rateStar={55}
        price={30}
        students={49}
        /> <ProfileCard
        className=""
        imageUrl="/Profiles/teacher3.jpg"
        username= "Sea Pohai"
        subjectname="Biology Teacher"
        rateStar={50}
        price={30}
        students={44}
        />
        </div>
    </div>
  )
}

export  {TopTeachersList}