"use client";

import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
} from "@/components/organisms";
import { SearchInput, ShowEasyText, KruVision } from "@/components/molecules";

const Homepage = () => {
  return (
    <div className="w-screen">
      {/* Homepage Benner */}

      <HomepageSlider />

      {/* Home-Benner */}

      <HomeBenner />

      {/* Search Input */}

      <div className="w-screen grid grid-flow-row gap-10 md:gap-16">
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
