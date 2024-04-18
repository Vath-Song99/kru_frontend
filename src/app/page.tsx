/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Homepage } from "@/components";
import React, { useState } from "react";
import { Modal } from "@/components";
import { Navbar } from "@/components";
import SettingProfile from "@/components/templates/SettingProfile";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  

  console.log(isShowModal)

  return (
    <div className="max-w-full ">
           <div className="w-full flex justify-center items-center">
                <Navbar isShowModal={isShowModal}  setIsShowModal={setIsShowModal}/>
                {/* <Modal/> */}
           </div>         
           <SettingProfile/>
    </div>
  );
};

export default Page;
