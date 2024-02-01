"use client";
import { Dropdown, LinkDropdown, ShowDropdown, Typography } from "@/components";
import Image from "next/image";
import React from "react";
interface NavbarProps {
  className?: string;
}
interface ImageProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
interface LanguageProps {
  className?: string
}
// freedom customize 

const LanguageDropdown: React.FC<LanguageProps> = ({ className }) => {
  return (
    <Dropdown
      className={` w-36 ${className}`}
      buttonContent={`
          Language
        `}
    >
      <ShowDropdown className="w-36  p-1" aling="right-0">
        
        <LinkDropdown className="px-1 flex h-full items-center">
           <Image src={"/Logos/Flag_of_Cambodia.svg.png"} alt="Flage Icon" width={20} height={20} className="ml-2"></Image>
           <Typography className="ml-6">Khmer</Typography>
        </LinkDropdown>
        <LinkDropdown className="px-1 flex h-full items-center">
        <Image src={"/Logos/Flag_of_the_United_Kingdom.svg.webp"} alt="Flage Icon" width={20} height={20} className="ml-2"></Image>
           <Typography className="ml-6">English</Typography>
        </LinkDropdown>
      </ShowDropdown>
    </Dropdown>
  );
};
// freedom customize 
const ProfileImage: React.FC<ImageProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={`   ${className}`}
    ></Image>
  );
};
// call it when it static 
const NavbarRightClient:React.FC <NavbarProps> = ({ className}) =>{
    return (
      <div className= {` flex items-center   ${className}`}>
        <LanguageDropdown></LanguageDropdown>
        <ProfileImage src="/Profiles/profile2.jpg" width={50} height={50} alt="Image Profile" className="w-20 h-20 object-cover border border-gray-400 rounded-full ml-5"></ProfileImage>
      </div>
    )
}


export { NavbarRightClient, ProfileImage,LanguageDropdown };
