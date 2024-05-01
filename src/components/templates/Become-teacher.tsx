"use client";
import React, { useState } from "react";
import { TeacherNavbarComponent } from "../molecules";
import {
    BecomeTeacherForm,
    TeacherNavbar,
    DescriptionForm,
    TimeAvailableForm,
    AboutForm,
} from "../organisms";
import { Typography } from "../atoms";

const BecomeTeacher = () => {
    const [currentPage, setCurrentPage] = useState(0); // Changed initial page to 0

    const inputFormsArray = [
        // Define input forms for each page
        // Adjust inputFormsArray for each page as needed
        [
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "University",
            },
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Year of experience",
            },
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Specialization",
            },
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Type of Degree",
            },
            {
                type: "file",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Type of Degree",
            },
        ],
        [
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Set your pricing",
            },
        ],
    ];

    const pages = [
        // Define components for each page
        <AboutForm
            buttonTitle="next"
            description="Start creating your public tutor profile. Your progress will be automatically saved as you complete each section. You can return at any time to finish your registration"
            title="About"
        />,
        <BecomeTeacherForm
            fileLabel="Please Input Your Degree To verify"
            buttonTitle="next"
            description="Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more students."
            inputForms={inputFormsArray[0]}
            title="Education"
            checkboxtext="Don't have a Degree?"
        />,
        <DescriptionForm
            buttonTitle="next"
            description="This info will go on your public profile. Write it in the language you’ll be teaching"
            title="Profile Description"
            checkboxtext={""}
        />,
        <TimeAvailableForm
            buttonTitle="next"
            title="Time available"
            description="This is table that you can see all time in a week and you can select what time you available "
            setTimeAvailable="Set your Available"
            setTimeDescription="Availability shows your potential working hours. Students can book lessons at these times."
        />,
        <BecomeTeacherForm
            buttonTitle="Submit"
            description="Fill your price per Month. It will be shown in the profile’s list"
            inputForms={inputFormsArray[1]}
            title="Pricing per month"
            checkboxtext="Agree with Termcondition"
        />,
    ];

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
    };

    return (
        <div className="min-h-screen">
            <div className="h-screen">
                <TeacherNavbar className="py-2" >
                    {pages.map((_, index) => (
                        <TeacherNavbarComponent >
                            <div
                                className={`w-[35px] h-[36px] ${currentPage >= index + 1 ? "bg-green-500 " : "bg-black"
                                    } rounded-md text-white flex justify-center items-center`}
                            >
                                <div className={`${currentPage >= index + 1 ?
                                    "hideen" : "font-bold"}`}>
                                    {currentPage >= index + 1 && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 stroke-white p-"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m4.5 12.75 6 6 9-13.5"
                                            />
                                        </svg>
                                    )}

                                </div>


                                <span className={currentPage >= index + 1 ? "hidden" : "font-bold"}>
                                    {index + 1}
                                </span>
                            </div>
                            <Typography>
                                {index === 0
                                    ? "About"
                                    : index === 1
                                        ? "Education"
                                        : index === 2
                                            ? "Description"
                                            : index === 3
                                                ? "Time Available"
                                                : "Pricing"}
                            </Typography>
                        </TeacherNavbarComponent>
                    ))}
                </TeacherNavbar>
                <div className="w-full flex justify-center pt-10">
                    {pages[currentPage]}
                </div>
                {/* Pagination controls */}
                <div className=" flex items-end justify-center mt-4">
                    <button
                        className="bg-[#7B2CBF] text-[white] w-[100px] h-[30px] rounded-sm "
                        onClick={nextPage}
                        disabled={currentPage === pages.length - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export { BecomeTeacher };
