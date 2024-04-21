import React from "react";
import { TeacherNavbarType } from "../@types/modules";

const TeacherNavbarComponent = ({
  children,
  className,
  icon = true,
}: TeacherNavbarType) => {
  return (
    <div className={`w-[20%] flex justify-around  items-center  ${className}`}>
      <div className=" flex justify-between items-center gap-2">{children}</div>

      {icon === true && (
        <svg
          className=""
          width="20"
          height="20"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.9375 5.25L17.0625 14L8.9375 22.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default TeacherNavbarComponent;
