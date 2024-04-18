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
      className={`w-full flex justify-center items-center bg-[#F4F4F8] ${className}`}
    >
      <div className="w-[80%] flex justify-center items-center">{children}</div>
    </div>
  );
};

export { TeacherNavbar };
