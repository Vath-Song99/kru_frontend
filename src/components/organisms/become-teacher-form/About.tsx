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
            <div className=" flex justify-between p-5"></div>
            <div className="w-full flex p-5 gap-5">
                <div className="w-[50%] flex flex-col gap-4  ">
                    <InputForm
                        className=" border border-gray-700  w-full "
                        type={"text"}
                        placeholder="First Name"
                    />
                    <form className="max-w-sm mx-auto w-full  border border-gray-700 ">
                        <div className="flex items-center ">
                            <button
                                id="dropdown-phone-button"
                                data-dropdown-toggle="dropdown-phone"
                                className=" w-[50%] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border border-gray-300 hover:bg-gray-200"
                                type="button"
                            >
                                <Image
                                    alt="flag"
                                    src="/Logos/flag.svg"
                                    width={24}
                                    height={24}
                                    className="pr-1"
                                ></Image>
                                +855
                            </button>
                            <div className="relative w-[133px]">
                                <input
                                    type="ph"
                                    aria-describedby="helper-text-explanation"
                                    className="outline-none pl-2 w-full text-sm text-gray-900 bg-gray-50  dark:placeholder-gray-400 "
                                    placeholder="123-456-7890"
                                />
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
