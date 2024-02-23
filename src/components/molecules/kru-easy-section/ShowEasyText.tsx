import React from "react";
import { Typography } from "@/components";

const ShowEasyText: React.FC = ({}) => {
  return (
    <div className="w-screen flex justify-center items-center ">
      <div className="w-[80%] grid justify-center md:flex md:justify-between gap-10">
        <div className="md:w-[380px]  md:h-[102px]">
            <Typography className="" fontSize="lg" variant="bold">Scheduling</Typography>
            <Typography className="mt-2" fontSize="sm" variant="normal">scheduling tools, allowing students to communicate with tutors, schedule lessons, and manage their appointments seamlessly.h as language, subject, price, availability, and tutor reviews.</Typography>
        </div>

        <div className="md:w-[380px]  md:h-[102px] ">
            <Typography className="" fontSize="lg" variant="bold">Search and Filters</Typography>
            <Typography className="mt-2" fontSize="sm" variant="normal">Students can easily search for tutors based on criteria such as language, subject, price, availability, and tutor reviews.</Typography>
        </div>

        <div className="md:w-[380px]  md:h-[102px]">
            <Typography className="" fontSize="lg" variant="bold">Reviews and Ratings</Typography>
            <Typography className="mt-2" fontSize="sm" variant="normal">Students can read reviews and ratings from other learners to help them choose the right tutor for their needs.</Typography>
        </div>
      </div>
    </div>
  );
};
export  {ShowEasyText};
