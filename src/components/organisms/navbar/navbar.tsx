"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  ButtonIcon,
  Dropdown,
  LinkDropdown,
  LinkDropdownPage,
  ShowDropdown,
  Typography,
} from "@/components";
import { Modal } from "@/components";

interface NavbarProps {
  className?: string;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModal: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  className,
  setIsShowModal,
  isShowModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`w-[80%] h-[100px] flex justify-between items-center  ${className}`}
    >
      <div className="h-full w-1/2 flex items-center justify-start">
        <Image
          src={"/Logos/KruLogo.png"}
          height={500}
          width={500}
          alt="Kru Logo"
          className="h-full w-[100px] object-cover"
        />
        <div className="hidden   lg:w-[80%] lg:flex  lg:justify-start lg:items-center lg:gap-5">
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>
            Home
          </Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>
            Become a teacher
          </Link>
          <Link className="text-[#455445] text-sm hover:underline" href={"#"}>
            Find teacher
          </Link>
        </div>
      </div>

      {/* right */}

      <div className="hidden lg:w-1/2 lg:h-full lg:flex lg:items-center lg:justify-end ">
        <Link
          href={"/Login"}
          className="text-[#455445] text-sm hover:underline"
        >
          Log in
        </Link>

        <div className="w-1/3 flex items-center justify-evenly ">
          {/* verticle Line */}
          <div className="h-5 w-[1px] border-l-2 border-[#455445]"></div>
          <Link
            href={"Sign up"}
            className="text-[#9B90C2] text-sm hover:underline"
          >
            Sign up for free
          </Link>
        </div>
        <Button className="px-4 py-2" colorScheme="primary">
          Get Started
        </Button>
      </div>

      {/* Start mobile screen */}
      <button
        onClick={toggleModal}
        className="lg:hidden xl:hidden cursor-pointer top-4 right-4 md:top-6 md:right-6 z-50 flex items-center justify-center w-10 h-10  rounded-full"
      >
        {/* Hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h12M4 10h12m-8 4h8"
          />
        </svg>
      </button>
      {/* Slider Navbar Content */}
      <div
        className={`fixed lg:hidden xl:hidden inset-y-0 right-0 flex flex-col items-start z-50 bg-white w-64 md:w-72 lg:w-80 xl:w-96 shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 py-2">
          <div className="flex">
            <button className="">
              <div className="flex w-[30px] h-[30px] bg-gray-200 justify-center items-center rounded-md hover:bg-gray-200 hover:rounded-md">
                {/* Account icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="#0A0A0A"
                    stroke="#A9A9A9"
                    stroke-dasharray="28"
                    stroke-dashoffset="28"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.4s"
                        values="28;0"
                      />
                    </path>
                    <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.4s"
                        values="28;0"
                      />
                    </path>
                  </g>
                </svg>
              </div>
            </button>
            <Typography fontSize="md" className="pl-3 cursor-pointer">
              Log In
            </Typography>
          </div>
          <button
            onClick={toggleModal}
            className="text-gray-600 focus:outline-none "
          >
            {/* Close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#F01C1C"
                d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6l-5.6 5.6Z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-[1.2px] bg-gray-200"></div>
        <nav className="flex mt-10 py-2 flex-col items-start justify-start">
          <ul className="ml-5">
            <li
              className="cursor-pointer py-5 relative"
              onClick={() => handleItemClick("Home")}
            >
              {selectedItem === "Home" && (
                <span
                  className="absolute left-[-15px] top-[9px] h-[50%] w-1 bg-[#7B2CBF]"
                  style={{ marginTop: "0.5rem" }}
                />
              )}
              Home
            </li>
            <li
              className="cursor-pointer py-5 relative"
              onClick={() => handleItemClick("Become a teacher")}
            >
              {selectedItem === "Become a teacher" && (
                <span
                  className="absolute left-[-15px] top-[9px] h-[50%] w-1 bg-[#7B2CBF]"
                  style={{ marginTop: "0.5rem" }}
                />
              )}
              Become a teacher
            </li>
            <li
              className="cursor-pointer py-5 relative"
              onClick={() => handleItemClick("Find teacher")}
            >
              {selectedItem === "Find teacher" && (
                <span
                  className="absolute left-[-15px] top-[9px] h-[50%] w-1 bg-[#7B2CBF]"
                  style={{ marginTop: "0.5rem" }}
                />
              )}
              Find teacher
            </li>
          </ul>
        </nav>
      </div>
      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal}
        ></div>
      )}
      {/* End mobile screen */}
    </nav>
  );
};

export { Navbar };
