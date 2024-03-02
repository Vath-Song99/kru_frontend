/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Homepage } from "@/components";
import React, { useState } from "react";


const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);


  console.log(isShowModal)

  return (
    <div className="max-w-full ">
      <Homepage/>
    </div>
  );
};

export default Page;
