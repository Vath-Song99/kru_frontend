"use client";
import { HomepageSlider } from "@/components";
import { SearchInput } from "@/components/molecules/search-input";
import HomeBenner from "@/components/organisms/home-benner";
import TopTeachersList from "@/components/organisms/top-teachers-list";
import React from "react";
import ProfileCard from "@/components/molecules/profile-card-teacher";

const Homepage = () => {
  return (
    <div className="w-full h-[1700px] ">
      {/* Homepage Benner */}

      <HomepageSlider />


      {/* Home-Benner */}

      <HomeBenner/>

      {/* Search Input */}

      <SearchInput/>

      {/*  all subject */}

     <TopTeachersList/>

      {/* Top Teachers rate card */}

      {/* benner card */}
    </div>
  );
};

export { Homepage };
