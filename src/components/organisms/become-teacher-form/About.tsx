import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { BecomeTeacherFormTypes } from "./@types";
import Image from "next/image";

const AboutForm = ({
    title,
    description,
    inputForms,
    buttonTitle,
}: BecomeTeacherFormTypes) => {
    const lastItem = inputForms ? inputForms[inputForms.length - 1] : undefined;
    const otherItems = inputForms ? inputForms.slice(0, -1) : [];

    return (
        <div className=" h-auto w-[464px]">
            <Typography align="left" fontSize="lg" variant="bold" className="py-2">
                {title}
            </Typography>
            <Typography align="left" fontSize="sm" className="py-2">
                {description}
            </Typography>
            <div className=" flex justify-between p-5">


            </div>
            <div className="w-full flex p-5 gap-5">
                <div className="w-[50%] flex flex-col gap-4  ">
                    <InputForm
                        className=" border border-gray-700  w-full "
                        type={"text"}
                        placeholder="First Name"
                    />
                    <form className="max-w-sm mx-auto w-full  border border-gray-700 ">
                        <div className="flex items-center ">
                            <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" className=" w-[50%] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border border-gray-300 hover:bg-gray-200" type="button">
                                <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2" /><mask id="a" className="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2" /></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" /><path fill="#46467F" d="M0 .5h8.4v6.533H0z" /><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd" /></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" /><stop offset="1" stop-color="#F0F0F0" /></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="1" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" /></filter></defs></svg>
                                +855
                            </button>
                            <div className="relative w-[133px]">
                                <input type="ph" aria-describedby="helper-text-explanation" className="outline-none pl-2 w-full text-sm text-gray-900 bg-gray-50  dark:placeholder-gray-400 " placeholder="123-456-7890" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" w-[50%] flex flex-col gap-4   ">
                    <InputForm
                        className="w-full h-full  border border-gray-700 rounded-lg"
                        type={"text"}
                        placeholder="Last Name"
                    />
                    <InputForm
                        type="text"
                        placeholder="Subject"
                        className=" w-full h-full  border border-gray-700 rounded-lg "
                    />
                </div>
            </div>
            <div className=" flex justify-center     ">

                <InputForm
                    type={"text"}
                    placeholder="Address"
                    className="w-[422px]  border border-gray-700 rounded-lg mt-3"
                />

            </div>
        </div>
    );
};

export { AboutForm };
