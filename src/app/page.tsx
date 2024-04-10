/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Footer, Homepage, Navbar } from "@/components";
import React, { useState } from "react";
import {CreateClass} from "@/components/templates/createClass";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  console.log(isShowModal);

  return (
    <>
    <CreateClass />
    {/* <div className="max-w-full grid">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div> 
      <div className="w-full flex justify-center items-start bg-gray-900 mt-10">
        <Footer />
      </div>

    </div> */}
    </>
  );
};

export default Page;
