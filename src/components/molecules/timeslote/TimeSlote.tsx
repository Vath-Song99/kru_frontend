import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";

const TimeSlote = ({ day }: { day: string }) => {
  return (
    <div className="w-full">
      <div className="flex items-center  gap-2">
        <InputForm type="checkbox" className="h-[16px] w-[16px]" />
        <label htmlFor="" className="font-bold">
          {day}
        </label>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="grid ">
          <label htmlFor="timeslote" className="inline-block font-bold text-sm">
            From
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            className="pr-20 pl-2 py-[5px] border border-black rounded-md outline-none "
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
          </select>
        </div>
        <div className="grid ">
          <label htmlFor="timeslote" className="inline-block font-bold text-sm">
            To
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            className="pr-20 pl-2 py-[5px] border border-black rounded-md outline-none "
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
          </select>
        </div>
      </div>
      <Typography
        align="left"
        fontSize="sm"
        variant="semibold"
        className="hover:underline py-2"
      >
        Add another timeslote +
      </Typography>
    </div>
  );
};

export { TimeSlote };
