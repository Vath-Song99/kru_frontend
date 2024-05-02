"use client";
import { Footer, Homepage, Navbar } from "@/components";
import { ButtonDropDown } from "@/components/molecules/button-dropdown";
import { ProfileDropDown } from "@/components/molecules/profile-dropdown";
import { Notification } from "@/components/organisms/notification";
import React, { useState } from "react";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const handleChange = (value?: string) => {};

  return (
    <div className="max-w-full">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <Homepage />
      <div className="w-full flex justify-center items-start bg-gray-900 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
