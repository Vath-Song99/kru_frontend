"use client"
import React, { useState } from "react";
import { TeacherNavbarComponent } from "../../molecules";
import { BecomeTeacherForm, TeacherNavbar, DescriptionForm, TimeAvailableForm, AboutForm } from "../../organisms";
import { Typography } from "../../atoms";

const BecomeTeacher = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(4);

    const inputFormsArray = [
        // Define input forms for each page
        // Adjust inputFormsArray for each page as needed
        [
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "First name",
            },
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Last name",
            },
            {
                type: "number",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Phone Number",
            },
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Subject",
            },
            {
                type: "text",
                borderColor: "black",
                borderRadius: "md",
                placeholder: "Address",
            },
        ],
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
            inputForms={inputFormsArray[0]}
            title="About"
        />,
        <BecomeTeacherForm
            fileLabel="Please Input Your Degree To verify"
            buttonTitle="next"
            description="Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more students."
            inputForms={inputFormsArray[1]}
            title="Education"
            checkboxtext="Don't have a Degree?"
        />,
        <DescriptionForm
            buttonTitle="next"
            description="This info will go on your public profile. Write it in the language you’ll be teaching"
            title="Profile Description" checkboxtext={""} />,
        <TimeAvailableForm
            buttonTitle="next"
            title="Time available"
            description="This is table that you can see all time in a week and you can select what time you available "
            setTimeAvailable="Set your Available"
            setTimeDescription="Availability shows your potential working hours. Students can book lessons at these times."
            test="Hi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career.. I am very passionate with assisting both Kids and Adults to confidently achieve their goal of easily communicating and participating in multilingual environments, both at home and professionalHi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career.. I am very passionate with assisting both Kids and Adults to confidently achieve their goal of easily communicating and participating in multilingual environments, both at home and professionalHi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career.. I am very passionate with assisting both Kids and Adults to confidently achieve their goal of easily communicating and participating in multilingual environments, both at home and professionalHi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career.. I am very passionate with assisting both Kids and Adults to confidently achieve their goal of easily communicating and participating in multilingual environments, both at home and professionalHi there, I’m Abigail, a Ghanaian English tutor with Bachelor in Arts; specifically History and Political Studies. I find great joy in meeting, teaching and learning from people with diverse cultural backgrounds, hence, my ability to adapt to any challenges I find in line with my teaching career.. I am very passionate with assisting both Kids and Adults to confidently achieve their goal of easily communicating and participating in multilingual environments, both at home and professional"
        />,
        <BecomeTeacherForm
            buttonTitle="Submit"
            description="Fill your price per hour. It will be shown in the profile’s list"
            inputForms={inputFormsArray[2]}
            title="Pricing per month"
            checkboxtext="Agree with Termcondition"
        />,
    ];

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length));
    };



    const handleButtonClick = (pageIndex: any) => {
        setButtonClicked(pageIndex);
    };

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <div className="">
                <TeacherNavbar className="py-2">
                    {Array.from({ length: pages.length }, (_, index) => (
                        <TeacherNavbarComponent key={index}>
                            <div className={`w-[35px] h-[36px] ${buttonClicked ? 'bg-[black]' : 'bg-[green]'} rounded-md text-white flex justify-center items-center`}>
                                {index + 1}
                            </div>
                            <Typography>
                                {index === 0 ? "About" : index === 1 ? "Education" : index === 2 ? "Description" : index === 3 ? "Time Available" : "Pricing"}
                            </Typography>
                        </TeacherNavbarComponent>
                    ))}
                </TeacherNavbar>
                {/* Content */}
                <div className="w-full flex justify-center pt-10">
                    {pages[currentPage - 1]}
                </div>

                {/* Pagination controls */}
                <div className=" flex items-end justify-center mt-5 ">
                    <button className="bg-[#7B2CBF] text-[white] w-[100px] h-[30px] rounded-sm ml-4" onClick={nextPage} disabled={currentPage === pages.length}>Next</button>
                </div>
            </div>


        </div>
    );
};

export { BecomeTeacher };


{/* <button className="bg-[#7B2CBF] text-[white] w-[100px] h-[30px] rounded-sm  " onClick={nextPage} disabled={currentPage === pages.length}>Next</button> */ }