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
        <label htmlFor="fileLabel" className="relative cursor-pointer mt-2 ">
          please input the video about yourself
          <InputForm
            type="file"
            className="outline-none w-full hover:cursor-pointer border-black rounded  "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute top-12 transform -translate-y-1/2 right-2 w-6 h-6 pointer-events-none "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </label>
      </div>
      <div className="w-full flex justify-end items-center">
        {/* <Button
          colorScheme="primary"
          fontSize="sm"
          fontColor="white"
          className="px-8 py-2"
        >
          {buttonTitle}
        </Button> */}
      </div>
    </div>
  );
};

export { DescriptionForm };
