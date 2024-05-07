"use client";

import { Footer, Homepage, Navbar, SettingProfile } from "@/components";
import { RatingStar } from "@/components/organisms/rating-star";
import React, { useState } from "react";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const handleChange = (value?: string) => {};

  return (
    <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <RatingStar />
      <div className="w-full flex justify-center items-start bg-gray-900"></div>
    </div>
  );
};

export default Page;
