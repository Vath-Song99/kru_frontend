"use client";
import Link from "next/link";
import React, { useState } from "react";

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
  buttonContent: React.ReactNode;
}
interface ShowDropProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  aling?: string;
}

interface LinkDropdownProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
}

interface LinkDropdownPageProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  href?: string;
  id?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  className,
  buttonContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown  relative inline-block text-left${className || ""}`}
    >
      <button
        className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true'
        onClick={toggleDropdown}
      >
        {buttonContent}
        <svg
          className={`-mr-1 h-5 w-5 text-gray-400 transition-all duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={`${className}`}>
          <ShowDropdown
          >
           <LinkDropdown >
           {children}
           </LinkDropdown>
          </ShowDropdown>
        </div>
      )}
    </div>
  );
};

const ShowDropdown: React.FC<ShowDropProps> = ({ children, className,role,aling }) => {
  return <div className={`absolute ${aling} right-0 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${className}`}  aria-orientation="vertical" aria-labelledby="menu-button" role={`${role}`}>{children}</div>;
};

const LinkDropdown: React.FC<LinkDropdownProps> = ({ children, className,role }) => {
  return <div className={`${className}`} role={`${role}`}>
        {children}
  </div>;
};


const LinkDropdownPage: React.FC<LinkDropdownPageProps> = ({
  children,
  className,
  href,
  id,
  role,
}) => {
  return (
    <Link className={`${className}`} href={`${href}`}id={`${id}`} role={`${role}`}>{children}</Link>
  )
}


export { Dropdown, ShowDropdown, LinkDropdown ,LinkDropdownPage};
