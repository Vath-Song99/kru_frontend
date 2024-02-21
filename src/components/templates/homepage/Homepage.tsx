"use client";
import {
  Button,
  ProfileCard,
  ImageCard,
  HeaderImage,
  Typography,
  Banner,
  HomepageSlider
} from "@/components";
import AllSubjectList from "@/components/organisms/all-subject-list";
import TopTeachersList from "@/components/organisms/top-teachers-list";
import React from "react";


const Homepage = () => {
  return (
    <div className="md:w-[80%] lg:w-[1200px] w-[80%] h-[1700px] ">
      {/* Homepage Benner */}

      <HomepageSlider className="mt-10"/>

      {/*  all subject */}

      <AllSubjectList/>

      {/* Top Teachers rate card */}
      <TopTeachersList/>

      {/* benner card */}

      <Banner/>
    </div>
  );
};

export { Homepage };
