"use client";

import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
} from "@/components/organisms";
import { SearchInput, ShowEasyText, KruVision } from "@/components/molecules";

const Homepage = () => {
  return (
    <div className="max-w-full ">
      {/* Homepage Benner */}

      <HomepageSlider />
      {/* Home-Benner */}

      <HomeBenner />

      {/* Search Input */}

     
        <SearchInput />

        {/*  all subject */}

        <TopTeachersList />

        {/* benner card */}

        <KruVision />
        <ShowEasyText />
    
    </div>
  );
};

export { Homepage };
