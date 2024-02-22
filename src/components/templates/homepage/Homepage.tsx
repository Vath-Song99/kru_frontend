"use client";

import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
} from "@/components/organisms";
import { SearchInput, ShowEasyText, KruVision } from "@/components/molecules";

const Homepage = () => {
  return (
    <div className="w-full h-[1950px] ">
      {/* Homepage Benner */}

      <HomepageSlider />

      {/* Home-Benner */}

      <HomeBenner />

      {/* Search Input */}

      <div className="w-full grid grid-flow-row gap-16">
        <SearchInput />

        {/*  all subject */}

        <TopTeachersList />

        {/* benner card */}

        <KruVision />
        <ShowEasyText />
      </div>
    </div>
  );
};

export { Homepage };
