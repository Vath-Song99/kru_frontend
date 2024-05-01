import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { BecomeTeacherFormTypes } from "./@types";

const DescriptionForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  fileLabel
}: BecomeTeacherFormTypes) => {
  return (
    <div className="w-[464px] h-auto ">
      <Typography align="left" fontSize="lg" variant="bold" className="py-2">
        {title}
      </Typography>
      <Typography align="left" fontSize="sm" className="py-2">
        {description}
      </Typography>
      <div className="w-full grid grid-flow-row gap-3 py-3">
        <div className="flex justify-end ">
          <label htmlFor="bio" className="text-sm mr-5">
            write about your self
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            cols={40}
            placeholder="at least 50 characters"
            className="outline-none px-2 py-1 text-sm border border-black"
          ></textarea>
        </div>
        <div className="flex justify-end ">
          <label htmlFor="bio" className="text-sm mr-5">
            teaching experience
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={3}
            cols={40}
            placeholder="at least 40 characters"
            className="outline-none px-2 py-1 text-sm border border-black"
          ></textarea>
        </div>
        <div className="flex justify-end ">
          <label htmlFor="bio" className="text-sm">
            Motivate potential study
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={2}
            cols={42}
            placeholder="at least 25 characters"
            className="outline-none px-2 py-1 text-sm border border-black"
          ></textarea>
        </div>
        <label htmlFor="fileLabel" className=" cursor-pointer mt-2 ">
          please input the video about yourself
          <div className="">
            <span className="text-sm flex justify-center" >{fileLabel}</span>
            <label className="w-full h-27 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-400">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">Select a Video</span>
              <input type='file' className="hidden" />
            </label>
          </div>

        </label>
      </div>

    </div>
  );
};

export { DescriptionForm };
