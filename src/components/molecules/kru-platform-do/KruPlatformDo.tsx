import React from "react";
import { Typography } from "@/components";

const KruPlatformDo = () => {
  return (
    <>
      <div className="w-[80%] flex gap-x-10 m-auto my-20">
        <KruPlatformDoComponent
        title="Scheduling"
        describtion="Students can easily search for tutors based on criteria sucPreply provides built-in messaging and scheduling tools, allowing students to communicate with tutors, schedule lessons, and manage their appointments seamlessly.h as language, subject, price, availability, and tutor reviews."
        >
        </KruPlatformDoComponent>
        <KruPlatformDoComponent
        title="Search Filters"
        describtion="Students can easily search for tutors based on criteria sucPreply provides built-in messaging and scheduling tools, allowing students to communicate with tutors, schedule lessons, and manage their appointments seamlessly.h as language, subject, price, availability, and tutor reviews."
        >
        </KruPlatformDoComponent>
        <KruPlatformDoComponent
        title="Reviews and Ratings"
        describtion="Students can easily search for tutors based on criteria sucPreply provides built-in messaging and scheduling tools, allowing students to communicate with tutors, schedule lessons, and manage their appointments seamlessly.h as language, subject, price, availability, and tutor reviews."
        >
        </KruPlatformDoComponent>
      </div>
    </>
  );
};
export { KruPlatformDo};
interface KruPlatformDoComponentProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
  describtion: string;
}

const KruPlatformDoComponent: React.FC<KruPlatformDoComponentProps> = ({
  describtion,
  title,
  className,
}) => {
  return (
    <>
      <div>
        <div>
          <Typography variant="semibold" fontSize="lg" className="pb-5 s">
            {title}
          </Typography>
          <Typography fontSize="base">{describtion}</Typography>
        </div>
      </div>
    </>
  );
};
export { KruPlatformDoComponent };


