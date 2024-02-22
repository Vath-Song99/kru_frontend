import React from "react";
import { InputForm } from "@/components/atoms";

const SearchInput = ({ className }: { className: string }) => {
  return (
    <div className={`w-full h-[60px] relative   ${className}`}>
      <InputForm
        type="text"
        borderColor="none"
        className="w-full h-full outline-none border shadow-sm px-[280px] "
        placeholder="Searching ..."
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-5 inset-x-60 text-[#455445]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export { SearchInput };
