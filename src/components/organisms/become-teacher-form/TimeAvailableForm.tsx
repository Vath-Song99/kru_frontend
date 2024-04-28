import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { TimeAvailableFormTypes } from "./@types";
import { TimeSlote } from "@/components/molecules/timeslote";

const TimeAvailableForm = ({
  title,
  description,
  inputForms,
  buttonTitle,
  setTimeAvailable,
  setTimeDescription,

}: TimeAvailableFormTypes) => {
  return (
    <div className=" mx-auto"> {/* Added max-height and overflow-y-auto for scrolling */}
      <div className="w-[464px] mx-auto">
        <Typography align="left" fontSize="lg" variant="bold" className="py-2">
          {title}
        </Typography>
        <Typography align="left" fontSize="sm" className="py-2">
          {description}
        </Typography>
        <Typography align="left" fontSize="lg" variant="bold" className="py-2">
          {setTimeAvailable}
        </Typography>
        <Typography align="left" fontSize="sm" className="py-2">
          {setTimeDescription}
        </Typography>
        <div className="w-full grid grid-flow-row gap-2 py-2">
          <TimeSlote day={"Monday"} />
          <TimeSlote day={"Tuesday"} />
          <TimeSlote day={"Wednesday"} />
          <TimeSlote day={"Thursday"} />
          <TimeSlote day={"Friday"} />
          <TimeSlote day={"Saturday"} /> {/* Fixed typo "Satursday" to "Saturday" */}
          <TimeSlote day={"Sunday"} />
        </div>
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

export { TimeAvailableForm };
