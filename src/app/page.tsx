import React from "react";
import { Button, ButtonIcon } from "@/components";
const Home = () => {
  return (
    <div>
      <Button
        rightIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        }
        colorScheme="primary"
        isDisabled={false}
        className="border rounded-full px-4 py-2 w-[205px] h-[50px] mx-5"
      >
        Get Started
      </Button>
      <ButtonIcon icon={<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>} >
      </ButtonIcon>
    </div>
  );
};

export default Home;
