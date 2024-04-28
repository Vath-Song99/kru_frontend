import React from "react";

const TeacherNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-[1440px] flex justify-evenly items-start bg-[#F4F4F8] ${className}`}
    >
      <div className="w-[100%] flex justify-center items-start">{children}</div>
    </div>
  );
};

export { TeacherNavbar };
