"use client";
import { Banner, HomepageSlider } from "@/components";
import { SearchInput } from "@/components/molecules/search-input";
import AllSubjectList from "@/components/organisms/all-subject-list";
import HomeBenner from "@/components/organisms/home-benner";
import TopTeachersList from "@/components/organisms/top-teachers-list";
import React from "react";

const Homepage = () => {
  return (
    <div className="md:w-[80%] lg:w-full w-[80%] h-[1700px] ">
      {/* Homepage Benner */}

      <HomepageSlider className="mt-10" />


      {/* Home-Benner */}

      <HomeBenner/>

      {/* Search Input */}

      <SearchInput/>

      {/*  all subject */}


      {/* Top Teachers rate card */}

      {/* benner card */}
    </div>
  );
};

export { Homepage };
