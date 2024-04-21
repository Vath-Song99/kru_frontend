"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { Button, InputForm, Typography } from "../atoms";

interface MenuItemProps {
  itemName: string;
  active: boolean;
  handleClick: (itemName: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  itemName,
  active,
  handleClick,
}) => {
  return (
    <a
      onClick={() => handleClick(itemName)}
      className={`cursor-pointer text-[20px] sm:text-[20px] md:text-[16px] lg:text-[20px] xl:text-[20px] ${
        active ? "border-b-2 border-[#7B2CBF] text-[#7B2CBF]" : ""
      }`}
    >
      {itemName}
    </a>
  );
};

const SettingProfile = () => {
  const [selectedItem, setSelectedItem] = useState<string>("User Info"); // Change null to "User Info"
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-[95%] sm:w-full md:w-[90%] lg:w-[90%] xl:w-[80%] h-150 mx-auto flex sm:flex-col md: flex-col lg:flex-row xl:flex-row">
      {/* Left profile */}
      <div className="flex flex-col pb-10 gap-y-5 items-center md:items-center md:justify-center bg-gray-100 lg:w-[40%] xl:w-[40%] w-full md:w-full rounded-md">
        <Typography fontSize="md" className="md:mt-10 mt-10">
          Ny Sreyneang
        </Typography>
        <div className="flex w-[160px] h-[160px] items-center justify-end rounded-full overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/Profiles/example1.jpg"
            alt="Bordered avatar"
            width={160}
            height={160}
          />
        </div>
        <Button
          className="text-white w-[100%] h-[45px] sm:w-[90%] sm:h-[30px] md:w-[55%] md:h-[45px] lg:w-[85%] lg:h-[35px] mt-5 rounded-md xl:w-[80%] xl:h-[40px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[16px]"
          fontSize="md"
        >
          Upload new photo
        </Button>
        <Typography className="text-[8px] sm:text-[11px] md:text-[14px] lg:text-[14px] xl:text-[16px]">
          The photo should be less than 2mb size
        </Typography>
        <Typography className="text-[8px] sm:text-[11px] md:text-[14px] lg:text-[14px] xl:text-[16px]">
          member since: 12 September 2024
        </Typography>
      </div>

      {/* Right profile */}
      <div className="flex flex-col gap-y-5 w-[100%] md:w-[100%] rounded-md sm:ml-7 md:ml-0 lg:ml-10 xl:ml-10">
        {/* edit profile */}
        <div className="bg-gray-100 ml-0 mt-10 sm:mt-10 lg:mt-0 xl:mt-0 sm:mt-15 md:mt-20 w-[100%] md:w-[100%] rounded-md">
          <Typography
            className="text-center md:text-left md:ml-10 lg:ml-10 xl:ml-10 py-4 lg:py-0 xl:py-0 md:mt-5 mb-[60px] md:mb-12 text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px]"
            fontSize="lg"
            variant="bold"
            align="left"
          >
            Edit profile
          </Typography>
          <div className="flex ml-10">
            <MenuItem
              itemName="User Info"
              active={selectedItem === "User Info"}
              handleClick={handleItemClick}
            />
            <div style={{ margin: "0 15px" }}></div>
            <MenuItem
              itemName="Teacher Info"
              active={selectedItem === "Teacher Info"}
              handleClick={handleItemClick}
            />
          </div>
        </div>

        {/* form input */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
          <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
            <Typography align="left" fontSize="md" className="md:text-[16px]">
              First Name
            </Typography>
            <InputForm
              className="h-[50px] w-full border-gray-400 md:mt-3 focus: outline-[#7B2CBF]"
              type="Firt Name"
              borderRadius="md"
              placeholder="First Name"
            ></InputForm>
          </div>
          <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
            <Typography align="left" fontSize="md" className="md:text-[16px]">
              Last Name
            </Typography>
            <InputForm
              className="h-[50px] w-full border-gray-400 md:mt-3 focus: outline-[#7B2CBF]"
              type="Last Name"
              placeholder="Last Name"
              borderRadius="md"
            ></InputForm>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
          <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
            <Typography align="left" fontSize="md" className="md:text-[16px]">
              Password
            </Typography>
            <InputForm
              className="h-[50px] w-full border-gray-400 md:mt-3 focus: outline-[#7B2CBF]"
              type="password"
              borderRadius="md"
              placeholder="Password"
            ></InputForm>
          </div>
          <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
            <Typography align="left" fontSize="md" className="md:text-[16px]">
              Re-Password
            </Typography>
            <InputForm
              className="h-[50px] w-full border-gray-400 md:mt-3 focus: outline-[#7B2CBF]"
              type="password"
              placeholder="Re-Password"
              borderRadius="md"
            ></InputForm>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
          <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
            <Typography align="left" fontSize="md" className="md:text-[16px]">
              Email
            </Typography>
            <InputForm
              className="h-[50px] w-full border-gray-400 md:mt-3 focus: outline-[#7B2CBF]"
              type="email"
              borderRadius="md"
              placeholder="Email"
            ></InputForm>
          </div>
          <div className="flex flex-col md:w-[45%] lg:w-[45%] mt-3 xl:w-[45%]">
            <Typography align="left" fontSize="md" className="md:text-[16px]">
              Comfirm Email
            </Typography>
            <InputForm
              className="h-[50px] w-full border-gray-400 md:mt-3 focus: outline-[#7B2CBF]"
              type="email"
              placeholder="Comfirm Email"
              borderRadius="md"
            ></InputForm>
          </div>
        </div>
        <Button
          fontSize="md"
          className="mb-10 w-full h-[45px] sm:w-[120px] sm:h-[45px] md:w-[150px] md:h-[45px] lg:w-[150px] lg:h-[45px] mt-3 rounded-md xl:w-[160px] xl:h-[45px]"
        >
          Update Info
        </Button>
      </div>
    </div>
  );
};

export default SettingProfile;
