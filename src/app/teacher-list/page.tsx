/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Navbar, Footer } from "@/components";
import { TeacherList } from "@/components";
import React, { useState } from "react";

const page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <div className="max-w-full grid gap-5">
      <div className="w-full flex justify-center items-center border shadow-sm">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <TeacherList />
      <div className="w-full flex justify-center items-start bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default page;
