"use client";
import {
  About,
  Button,
  Navbar,
  TeacherNavbar,
  TeacherNavbarComponent,
  Typography,
} from "@/components";

import React, { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <div className="w-full grid grid-flow-row gap-10">
      <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div>
      <About />
    </div>
  );
};

export default page;
