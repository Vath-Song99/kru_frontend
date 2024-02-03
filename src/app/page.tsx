import React from "react";
import Image from "next/image";
import {
  Dropdown,
  LinkDropdown,
  LinkDropdownPage,
  ShowDropdown,
  Typography,
  ProfileCard,
  ImageCard,
  HeaderImage,
  Button,
} from "@/components";
const Page = () => {
  return (
    <div>
      <ProfileCard toptext="1" NameTutorTitle="Ny Sreyneang" NameSubject="English teacher" RetingTutor="20" Studentsqty="100" PriceTutor="200">
        <HeaderImage>
          <ImageCard
            alt="this pic"
            ImageSrc="sreyneang.png"
          >
          
          </ImageCard>
        </HeaderImage>
      </ProfileCard>
    </div>
  );
};

export default Page;
