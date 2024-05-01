"use client";
import { Navbar, SettingProfile } from "@/components";
import React, { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <div className="w-full grid grid-flow-row gap-10">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <SettingProfile />
    </div>
  );
};

export default page;
