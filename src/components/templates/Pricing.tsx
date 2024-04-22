import React from "react";
import { TeacherNavbarComponent } from "../molecules";
import { BecomeTeacherForm, TeacherNavbar } from "../organisms";
import { Typography } from "../atoms";

const Pricing = () => {
  const inputFormsArray = [
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "set your pricing",
    },
  ];
  return (
    <div className="">
      <div className="w-full flex justify-center items-center">
        <TeacherNavbar className="py-3 ">
          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-green-600 rounded-md flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13.0278L10.6 19.25L19 5.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Typography>about</Typography>
          </TeacherNavbarComponent>

          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-green-600 rounded-md flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13.0278L10.6 19.25L19 5.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Typography>Education</Typography>
          </TeacherNavbarComponent>

          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-green-600 rounded-md flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13.0278L10.6 19.25L19 5.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Typography>Description</Typography>
          </TeacherNavbarComponent>
          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-green-600 rounded-md flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13.0278L10.6 19.25L19 5.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Typography>Time Available</Typography>
          </TeacherNavbarComponent>
          <TeacherNavbarComponent icon={false}>
            <div className="w-[35px] h-[36px] bg-black rounded-md text-white flex justify-center items-center">
              5
            </div>
            <Typography>Pricing</Typography>
          </TeacherNavbarComponent>
        </TeacherNavbar>
      </div>

      <div className="w-full flex justify-center pt-10">
        <BecomeTeacherForm
          buttonTitle="Submit"
          description="fill your price per hour. it’s will be show in the profile’s list"
          inputForms={inputFormsArray}
          title="Pricing per month"
        />
      </div>
    </div>
  );
};

export { Pricing };
