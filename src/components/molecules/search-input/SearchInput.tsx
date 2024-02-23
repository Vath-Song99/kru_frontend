import React from "react";
import { InputForm, Typography } from "@/components/atoms";

const SearchInput = ({ className }: { className?: string }) => {
  return (
    <div className={`w-screen h-[60px] relative   ${className}`}>
      <InputForm
        type="text"
        borderColor="none"
        className="w-full h-full pl-12 sm:px-28 md:px-36 outline-none border shadow-sm lg:px-44 "
        placeholder="Searching ..."
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-5 right-14 sm:left-20 md:left-[85px] lg:left-[140px]  text-[#455445]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="lg:w-[75%] w-[80%] flex items-center justify-between ">
          <div className="flex items-center md:gap-4 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-7 md:h-7 w-5 text-[#455445]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <Typography
             className="text-xs"
             fontSize="sm"
             colorscheme="secondary"
             variant="semibold"
            >Choose Option</Typography>
          </div>
          <Typography
            className="tracking-wide hover:underline  text-xs md:text-base"
            align="justify"
            colorscheme="secondary"
            variant="normal"
            
          >
            see more
          </Typography>
        </div>
      </div>
    </div>
  );
};

export { SearchInput };
