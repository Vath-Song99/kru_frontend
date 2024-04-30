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
    <div className="w-[464px]">
      <Typography align="left" fontSize="lg" variant="bold" className="py-2">
        {title}
      </Typography>
      <Typography align="left" fontSize="sm" className="py-2">
        {description}
      </Typography>
      <div className="py-2 flex items-center">
        <input type="checkbox" id="checkbox" className="mr-2" />
        <label htmlFor="checkbox" className="text-sm">
          {checkboxtext}
        </label>
      </div>

      <div className="grid gap-2">
        {inputForms?.map((inputForm: any, index: number) => (
          <React.Fragment key={index}>
            {inputForm.type === "file" ? (
              <div className="r">
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
                  <span className="mt-2 text-base leading-normal">Select a picture</span>
                  <input type='file' className="hidden" />
                </label>
              </div>
            ) : (
              <InputForm {...inputForm} className="w-full" />
            )}
          </React.Fragment>
        ))}
      </div>


    </div>
  );
};

export { BecomeTeacherForm };
