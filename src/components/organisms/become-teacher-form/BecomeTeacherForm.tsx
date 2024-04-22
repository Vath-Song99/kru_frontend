import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { BecomeTeacherFormTypes } from "./@types";

const BecomeTeacherForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
}: BecomeTeacherFormTypes) => {
  return (
    <div className="w-[464px] h-auto ">
      <Typography align="left" fontSize="lg" variant="bold" className="py-2">
        {title}
      </Typography>
      <Typography align="left" fontSize="sm" className="py-2">
        {description}
      </Typography>

      <div className="w-full grid grid-flow-row gap-2 py-2">
        {inputForms.map((inputForm: any, index: number) => (
          <InputForm
            key={index}
            {...inputForm}
            className="outline-none w-full"
          />
        ))}
      </div>
      <div className="w-full flex justify-end items-center">
        <Button
          colorScheme="primary"
          fontSize="sm"
          fontColor="white"
          className="px-8 py-2"
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export { BecomeTeacherForm };
