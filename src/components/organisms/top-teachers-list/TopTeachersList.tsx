import React from 'react'
import { Typography } from '@/components/atoms'
import { ProfileCard,HeaderImage,ImageCard } from '@/components/molecules'


const TopTeachersList = () => {
  return (
    <div className="w-full h-[570px]">
    {/* Heading */}
    <div className="w-full flex justify-between ">  
      <Typography
         align="left"
         fontSize="lg"
         tags="h1"
         variant="semibold"
         className="text-gray-800 tracking-wider"
      >
        Top teachers rate
      </Typography>
      <Typography className="underline tracking-wider" align="right" fontSize="base">
        See more
      </Typography>
    </div>

    {/* Card teacher rate */}

    <div className="w-full flex mt-5 justify-between  flex-wrap gap-0">
      {/* Thorn code */}
      <ProfileCard
        className="w-[365px]"
        toptext="1"
        NameTutorTitle="Ny Sreyneang"
        NameSubject="English teacher"
        RetingTutor="20"
        Studentsqty="100"
        PriceTutor="0.6"
      >
        <HeaderImage>
          <ImageCard alt="this pic" ImageSrc="picture/sreyneang.png">
            {" "}
          </ImageCard>
        </HeaderImage>
      </ProfileCard>
      <ProfileCard
        className="w-[365px]"
        toptext="1"
        NameTutorTitle="Hong menghay"
        NameSubject="mathematics teacher"
        RetingTutor="25"
        Studentsqty="104"
        PriceTutor="0.95"
      >
        <HeaderImage>
          <ImageCard alt="this pic" ImageSrc="picture/Hong menghay.jpg">
            {" "}
          </ImageCard>
        </HeaderImage>
      </ProfileCard>
      <ProfileCard
        className="w-[365px]"
        toptext="1"
        NameTutorTitle="Sok Reaksmey"
        NameSubject="Biology teacher"
        RetingTutor="10"
        Studentsqty="90"
        PriceTutor="0.80"
      >
        <HeaderImage>
          <ImageCard alt="this pic" ImageSrc="picture/sok reaksmey.jpg">
            {" "}
          </ImageCard>
        </HeaderImage>
      </ProfileCard>
    </div>
  </div>
  )
}

export default TopTeachersList