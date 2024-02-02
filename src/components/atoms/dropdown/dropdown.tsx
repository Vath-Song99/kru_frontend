"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown  relative inline-block text-left${className || ""}`}
    >
      
      <button
        className='inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true'
        onClick={toggleDropdown}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

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
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={`${className}`}>
          <ShowDropdown>
            <LinkDropdown>{children}</LinkDropdown>
          </ShowDropdown>
        </div>
      )}
    </div>
  );
};

const ShowDropdown: React.FC<ShowDropProps> = ({
  children,
  className,
  role,
  aling,
}) => {
  return (
    <div
      className={`absolute ${aling} right-0 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${className}`}
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      role={`${role}`}
    >
      
      {children}
    </div>
  );
};

const LinkDropdown: React.FC<LinkDropdownProps> = ({
  children,
  className,
  role,
}) => {
  return (
    <div className={`${className}`} role={`${role}`}>
      {children}
    </div>
  );
};
// dropdown
const LinkDropdownPage: React.FC<LinkDropdownPageProps> = ({
  children,
  className,
  href,
  id,
  role,
}) => {
  return (
    <Link
      className={`${className}`}
      href={`${href}`}
      id={`${id}`}
      role={`${role}`}
    >
      {children}
    </Link>
  );
};

export { Dropdown, ShowDropdown, LinkDropdown, LinkDropdownPage };
