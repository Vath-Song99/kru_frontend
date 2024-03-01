/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { Homepage } from "@/components";
import React, { useState } from "react";
import { Modal } from "@/components";
import { Navbar } from "@/components";
import { Login, Signup } from "@/components/organisms/login";
import { Input } from "postcss";

const Page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);


  console.log(isShowModal)

  return (
    <div className="max-w-full ">
      <Signup />
    </div>
  );
};

export default Page;
