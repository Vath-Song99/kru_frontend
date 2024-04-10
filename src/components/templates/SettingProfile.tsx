"use client";
import React from "react";
import Image from "next/image";
import { Button, Typography } from "../atoms";

const SettingProfile = () => {
  return (
    <div>
      <div className="container w-[80%] h-150 mx-auto bg-indigo-400 p-5 flex flex-row">
        {/* Left profile */}
        <div className="flex flex-col gap-y-5 items-center bg-gray-100 w-[40%] rounded-md">
          <Typography fontSize="md">Ny Sreyneang</Typography>
          <div className="flex w-[160px] h-[160px] items-center justify-center rounded-full overflow-hidden">
            <Image
              className="object-cover w-full h-full"
              src="/Profiles/example1.jpg"
              alt="Bordered avatar"
              width={160}
              height={160}
            />
          </div>
          <Button className="bg-green-400 w-[160px] h-[42px] rounded-md text-[16px] text-white">
            Upload new photo
          </Button>
          <Typography className="text-[16px]">
            The photo should be less than 2mb size
          </Typography>
          <Typography className="text-[16px]">
            member since: 12 September 2024
          </Typography>
        </div>

        {/* Right profile */}
        <div className="bg-yellow-300 mr-10 w-[80%] ml-10 rounded-md">
          <div className="bg-gray-100 rounded-md">
            <Typography
              className="ml-10 mb-[100px]"
              fontSize="lg"
              variant="bold"
              align="left"
            >
              Edit profile
            </Typography>
            <div className="flex">
              <Typography className="ml-10" fontSize="md" align="left">
                User Info
              </Typography>
              <Typography className="ml-10" fontSize="md">Teacher Info</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
