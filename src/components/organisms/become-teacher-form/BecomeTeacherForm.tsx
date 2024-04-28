import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { BecomeTeacherFormTypes } from "./@types";

const BecomeTeacherForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  fileLabel,
  checkboxtext,
}: BecomeTeacherFormTypes) => {
  return (
    <div className="w-[464px] ">
      <Typography align="left" fontSize="lg" variant="bold" className="py-2">
        {title}
      </Typography>
      <Typography align="left" fontSize="sm" className="py-2">
        {description}
      </Typography>
      <Typography
        align="left"
        fontSize="sm"
        className="py-2 flex gap-x-5 rounded-none"
      >
        {<input type="checkbox" />}
        {checkboxtext}
      </Typography>

      <div className="w-full grid grid-flow-row gap-2 py-2">
        {inputForms?.map((inputForm: any, index: number) =>
          inputForm.type === "file" ? (
            <>
              <label htmlFor="fileLabel" className="relative cursor-pointer">
                {fileLabel}
                <InputForm
                  {...inputForm}
                  className="outline-none w-full hover:cursor-pointer "
                  id="fileLabel"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute top-11 transform -translate-y-1/2 right-2 w-6 h-6 pointer-events-none "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>
            </>
          ) : (
            <InputForm
              key={index}
              {...inputForm}
              className="outline-none w-full"
            />
          )
        )}
      </div>

      <div className="w-full flex justify-end ">
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

export { BecomeTeacherForm };
