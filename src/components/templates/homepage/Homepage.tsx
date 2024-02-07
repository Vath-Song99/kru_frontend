"use client";
import {
  Button,
  ProfileCard,
  ImageCard,
  HeaderImage,
  Typography,
  Banner,
} from "@/components";
import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="md:w-[80%] lg:w-[1200px] w-[80%] h-[1700px] ">
      {/* Homepage Benner */}

      <div className="w-full h-[327px] flex justify-between items-center">
        {/* Left side */}
        <div className="w-1/2 ">
          <Typography
            className="text-6xl font-extrabold"
            align="left"
            variant="extrabold"
            colorshceme="primary"
          >
            Welcome to Kru platform
          </Typography>

          <Typography className="mt-7" fontSize="md" align="left">
            Kru’s vision is to connect communication between private teachers
            and students by digital ways
          </Typography>
          <Button
            className="mt-7"
            colorScheme="primary"
            size="lg"
            fontSize="md"
            radius="md"
          >
            Get started
          </Button>
        </div>
        {/* Right side */}
        <div className="">
          <Image
            src={"/Benner/Benner-top.png"}
            width={500}
            height={500}
            alt="Benner top"
          ></Image>
        </div>
      </div>

      {/*  all subject */}

      <div className="w-full h-[327px]">
        {/* Heading all subject */}
        <div className="w-full flex justify-between ">
          <Typography align="left" fontSize="xl" variant="semibold">
            All subject
          </Typography>
          <Typography className="underline" fontSize="sm">
            See more
          </Typography>
        </div>

        {/* Button subject */}
        <div className="w-full flex justify-between items-center mt-4 flex-wrap gap-6">
          <Button
            className="border flex items-center justify-between w-[360px] h-[73px]"
            colorScheme="tertiary"
            fontSize="xl"
            fontColor="black"
            radius="md"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            English
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
          <Button
            className="border flex items-center justify-between w-[360px] h-[73px]"
            colorScheme="tertiary"
            fontSize="xl"
            fontColor="black"
            radius="md"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Khmer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
          <Button
            className="border flex items-center justify-between w-[360px] h-[73px]"
            colorScheme="tertiary"
            fontSize="xl"
            fontColor="black"
            radius="md"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Mathematic
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
          <Button
            className="border flex items-center justify-between w-[360px] h-[73px]"
            colorScheme="tertiary"
            fontSize="xl"
            fontColor="black"
            radius="md"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Biology
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
          <Button
            className="border flex items-center justify-between w-[360px] h-[73px]"
            colorScheme="tertiary"
            fontSize="xl"
            fontColor="black"
            radius="md"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Physics
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
          <Button
            className="border flex items-center justify-between w-[360px] h-[73px]"
            colorScheme="tertiary"
            fontSize="xl"
            fontColor="black"
            radius="md"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Chimistry
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Top Teachers rate card */}
      <div className="w-full h-[570px]">
        {/* Heading */}
        <div className="w-full flex justify-between ">
          <Typography
            className=""
            align="left"
            fontSize="xl"
            variant="semibold"
          >
            Top teachers rate
          </Typography>
          <Typography className="underline" align="right" fontSize="sm">
            See more
          </Typography>
        </div>

        {/* Card teacher rate */}

        <div className="w-full flex mt-5 justify-between  flex-wrap gap-0">
        {/* Thorn code */}
            <ProfileCard
              className="w-[365px] "
              toptext="1"
              NameTutorTitle="Ny Sreyneang"
              NameSubject="English teacher"
              RetingTutor="20"
              Studentsqty="100"
              PriceTutor="200"
            >
              <HeaderImage>
                <ImageCard alt="this pic" ImageSrc="sreyneang.png">
                  {" "}
                </ImageCard>
              </HeaderImage>
            </ProfileCard>
            <ProfileCard
              className="w-[365px]"
              toptext="1"
              NameTutorTitle="Ny Sreyneang"
              NameSubject="English teacher"
              RetingTutor="20"
              Studentsqty="100"
              PriceTutor="200"
            >
              <HeaderImage>
                <ImageCard alt="this pic" ImageSrc="sreyneang.png">
                  {" "}
                </ImageCard>
              </HeaderImage>
            </ProfileCard>
            <ProfileCard
              className="w-[365px]"
              toptext="1"
              NameTutorTitle="Ny Sreyneang"
              NameSubject="English teacher"
              RetingTutor="20"
              Studentsqty="100"
              PriceTutor="200"
            >
              <HeaderImage>
                <ImageCard alt="this pic" ImageSrc="sreyneang.png">
                  {" "}
                </ImageCard>
              </HeaderImage>
            </ProfileCard>
          </div>
        </div>

        {/* benner card */}

        <div className="w-full h-[407px] border flex justify-center items-center mb-5">
          <Banner/>
        </div>
      </div>
    
  );
};

export { Homepage };
