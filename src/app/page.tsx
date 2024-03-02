/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Homepage, Navbar } from "@/components";
import React, { useState } from "react";


const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);


  console.log(isShowModal)

  return (
    <div className="max-w-full ">

        <div className="w-full flex justify-center items-center">
              <Navbar setIsShowModal= {setIsShowModal} isShowModal={isShowModal}/>
        </div>

      <Homepage/>
    </div>
  );
};

export default Page;
