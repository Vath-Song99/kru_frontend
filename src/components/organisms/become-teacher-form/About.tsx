import { Button, InputForm, Typography } from "@/components/atoms";
import React from "react";
import { BecomeTeacherFormTypes } from "./@types";

const AboutForm = ({
    title,
    description,
    inputForms,
    buttonTitle,
}: BecomeTeacherFormTypes) => {
    const lastItem = inputForms ? inputForms[inputForms.length - 1] : undefined;
    const otherItems = inputForms ? inputForms.slice(0, -1) : [];

    return (
        <div className="w-[464px] h-auto">
            <Typography align="left" fontSize="lg" variant="bold" className="py-2">
                {title}
            </Typography>
            <Typography align="left" fontSize="sm" className="py-2">
                {description}
            </Typography>
            <div className="relative">
                <InputForm
                    type="number"
                    placeholder="Phone Number"
                    className="pl-20 pr-4 py-2 border border-gray-300 rounded-md "
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
                <label htmlFor="text" className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400">
                    855
                </label>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
                {otherItems.map((inputForm: any, index: number) => (
                    <div key={index} className="flex">
                        <div className="flex">
                            <InputForm
                                {...inputForm}
                                className="outline-none w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {lastItem && (
                <div className="flex">
                    <div className="flex">
                        <InputForm
                            paddingX="sm"
                            borderSize="sm"
                            paddingY="sm"
                            type="text"
                            placeholder=""
                            {...lastItem}
                            className="outline-none w-[464px]"
                        />
                    </div>
                </div>
            )}


        </div>
    );
};

export { AboutForm };
