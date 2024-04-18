import React from "react";
import { TeacherNavbarComponent } from "../molecules";
import { TeacherNavbar } from "../organisms";
import { Button, Typography } from "../atoms";

const About = () => {
  return (
    <div>
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
  );
};

export { About };
