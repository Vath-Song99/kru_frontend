import React from "react";
import { TeacherNavbarComponent } from "../molecules";
import { TeacherNavbar } from "../organisms";
import { Button, Typography } from "../atoms";
import BecomeTeacherForm from "../organisms/become-teacher-form";

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
            <Button
              className="w-[35px] h-[36px] bg-black rounded-md"
              fontSize="md"
            >
              1
            </Button>
            <Typography>about</Typography>
          </TeacherNavbarComponent>

          <TeacherNavbarComponent>
            <Button
              className="w-[35px] h-[36px] bg-black rounded-md"
              fontSize="md"
            >
              2
            </Button>
            <Typography>Education</Typography>
          </TeacherNavbarComponent>

          <TeacherNavbarComponent>
            <Button
              className="w-[35px] h-[36px] bg-black rounded-md"
              fontSize="md"
            >
              3
            </Button>
            <Typography>Description</Typography>
          </TeacherNavbarComponent>
          <TeacherNavbarComponent>
            <Button
              className="w-[35px] h-[36px] bg-black rounded-md"
              fontSize="md"
            >
              4
            </Button>
            <Typography>Time Available</Typography>
          </TeacherNavbarComponent>
          <TeacherNavbarComponent icon={false}>
            <Button
              className="w-[35px] h-[36px] bg-black rounded-md"
              fontSize="md"
            >
              5
            </Button>
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
