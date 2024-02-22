import { Typography } from "@/components/atoms";
import { Button } from "@nextui-org/react";
import React from "react";

const HomeBenner: React.FC = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full h-[505px] flex justify-center items-center  bg-[#F6FAFC]   ${className}`}
    >
      <div className="w-[63%] h-[63%] grid grid-flow-row gap-5">
        <Typography
          className="capitalize"
          fontSize="md"
          variant="bold"
          colorscheme="secondary"
          align="center"
        >
          May i ask who <span className="text-[#7B2CBF]">you</span> are?
        </Typography>

        <Typography
          className=""
          fontSize="sm"
          colorscheme="secondary"
          variant="normal"
          align="center"
        >
          select one to show a right distination you what you want from our
          appication
        </Typography>

        <div className="w-full h-full flex justify-between items-center gap-10 ">
          <div className="w-[400px] h-[260px] shadow-md border px-10 py-8 grid grid-flow-row gap-4">
            <div className="flex items-center justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-[#9243D6] p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <Typography
                className=""
                fontSize="lg"
                colorscheme="secondary"
                align="left"
                variant="bold"
              >
                Teacher
              </Typography>
            </div>
            <Typography
              className="overflow-y-hidden hover:text-clip"
              fontSize="sm"
              colorscheme="secondary"
              align="left"
            >
              Through our platform, teachers will have access to a diverse range
              of resources, personalized learning opportunities, and a
              supportive community to enhance their teaching practices
            </Typography>

            <div className="w-full flex justify-end items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-5 bg-[#E9E9E9] rounded-full hover:bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>

          <div className="w-[400px] h-[260px] shadow-md border px-10 py-8 grid grid-flow-row gap-4">
            <div className="flex items-center justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-[#E5E501] p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <Typography
                className=""
                fontSize="lg"
                colorscheme="secondary"
                align="left"
                variant="bold"
              >
                Student
              </Typography>
            </div>
            <Typography
              className="overflow-y-hidden hover:text-clip"
              fontSize="sm"
              colorscheme="secondary"
              align="left"
            >
              Through our platform, teachers will have access to a diverse range
              of resources, personalized learning opportunities, and a
              supportive community to enhance their teaching practices
            </Typography>

            <div className="w-full flex justify-end items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-5 bg-[#E9E9E9] rounded-full hover:bg-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBenner;
