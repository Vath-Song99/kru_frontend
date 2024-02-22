import React from "react";
import { Typography } from "@/components";
import Image from "next/image";
import { Button } from "@/components";

const HomepageSlider = ({ className }: { className?: string }) => {
  return (
    <div className="w-full h-[479px bg-[#252525] relative">
      <Image
        src={"/Benner/Benner.jpg"}
        alt="Benner"
        width={1728}
        height={479}
        className="w-full h-[479px] object-cover opacity-30 relative"
      ></Image>
      {/* <h1>Hello world</h1> */}
      <div className="w-full h-full absolute inset-0">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-1/2 h-1/2 grid gap-5">
            <Typography
              className="leading-10 tracking-widest capitalize"
              fontSize="2xl"
              colorscheme="white"
              variant="bold"
              align="center"
              tags="h1"
            >
              The teachers are around you now
            </Typography>
            <Typography
              className=""
              fontSize="base"
              colorscheme="white"
              variant="normal"
              tags="p"
              align="center"
            >
              Stop wasting your time Learnwithkru platform are provide you the
              easier way to find the teacher{" "}
            </Typography>

            <div className="w-full flex justify-center">
              <Button
                className="px-14 py-1 border-2  "
                colorScheme="outline"
                fontSize="md"
                radius="md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSlider;
