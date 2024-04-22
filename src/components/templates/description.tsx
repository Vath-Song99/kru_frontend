import React from "react";
import { TeacherNavbarComponent } from "../molecules";
import { TeacherNavbar } from "../organisms";
import { Button, Typography } from "../atoms";
import BecomeTeacherForm from "../organisms/become-teacher-form";

const Description = () => {
  const inputFormsArray = [
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "University",
    },
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "Year of experience",
    },
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "Specialization",
    },
    {
      type: "text",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "Type of Degree",
    },
    {
      type: "file",
      borderColor: "black",
      borderRadius: "md",
      placeholder: "Type of Degree",
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
          description="This info will go on your public profile. Write it in the language you’ll be teaching"
          inputForms={inputFormsArray}
          title="Profile Description"
        />
      </div>
    </div>
  );
};

export { Description };
