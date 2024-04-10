/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Footer, Homepage, Navbar } from "@/components";
import React, { useState } from "react";
<<<<<<< HEAD
import { Modal } from "@/components";
import { Navbar } from "@/components";
import SettingProfile from "@/components/templates/SettingProfile";
=======
>>>>>>> 6a00893ddbfd62d6dd07399d1125255df65bbdf8

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);


  return (
<<<<<<< HEAD
    <div className="max-w-full ">
           <div className="w-full flex justify-center items-center">
                <Navbar isShowModal={isShowModal}  setIsShowModal={setIsShowModal}/>
                {/* <Modal/> */}
           </div>     
           <SettingProfile/>  
=======
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>

      <Homepage />

      <div className="w-full flex justify-center items-start bg-gray-900 mt-10">
        <Footer />
      </div>
>>>>>>> 6a00893ddbfd62d6dd07399d1125255df65bbdf8
    </div>
  );
};

export default Page;
