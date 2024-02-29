"use client";

import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
} from "@/components/organisms";
import { SearchInput, ShowEasyText, KruVision } from "@/components/molecules";
import { Modal } from "@/components/molecules";

const Homepage: React.FC = () => {
  return (
    <div className="max-w-full ">
      {/* Homepage Benner */}

     
      <HomepageSlider />

      {/* Home-Benner */}

      <HomeBenner />

      {/* Search Input */}

      <SearchInput />

      <div className="grid gap-8 md:gap-12">
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
