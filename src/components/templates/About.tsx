import React from "react";
import { TeacherNavbarComponent } from "../molecules";
import { BecomeTeacherForm, TeacherNavbar } from "../organisms";
import { Typography } from "../atoms";

const About = () => {
  const inputFormsArray = [
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "phone number",
    },
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "subject",
    },
  ];
  return (
    <div className="">
      <div className="w-full flex justify-center items-center">
        <TeacherNavbar className="py-3 ">
          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-black rounded-md text-white flex justify-center items-center">
              1
            </div>
            <Typography>about</Typography>
          </TeacherNavbarComponent>

          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-black rounded-md text-white flex justify-center items-center">
              2
            </div>
            <Typography>Education</Typography>
          </TeacherNavbarComponent>

          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-black rounded-md text-white flex justify-center items-center">
              3
            </div>
            <Typography>Description</Typography>
          </TeacherNavbarComponent>
          <TeacherNavbarComponent>
            <div className="w-[35px] h-[36px] bg-black rounded-md text-white flex justify-center items-center">
              4
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
          buttonTitle="next"
          description="Start creating your public tutor profile. Your progress will be automatically saved as you complete each section. You can return at any time to finish your registration"
          inputForms={inputFormsArray}
          title="About"
        />
      </div>
    </div>
  );
};

export { About };
