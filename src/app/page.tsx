/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Footer, Homepage, Navbar } from "@/components";
import ForgetPassword from "@/components/templates/ForgetPassword";
import React, { useState } from "react";
import { Modal } from "@/components";
import { Navbar } from "@/components";
import SettingProfile from "@/components/templates/SettingProfile";

const Page = () => {
  // const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (

    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <ForgetPassword />

      <div className="w-full flex justify-center items-start bg-gray-900 mt-10">
        <Footer />
      </div>
  );
};

export default Page;
