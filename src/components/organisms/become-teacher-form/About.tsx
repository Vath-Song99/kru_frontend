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
        <div className="w-[464px] h-auto">
            <Typography align="left" fontSize="lg" variant="bold" className="py-2">
                {title}
            </Typography>
            <Typography align="left" fontSize="sm" className="py-2">
                {description}
            </Typography>
            <div className="flex justify-between">
                <InputForm
                    className="w-[220px] border border-gray-300 rounded-lg "
                    type={"text"}
                    placeholder="First Name"
                >
                </InputForm>
                <InputForm
                    className="w-[220px] border border-gray-300 rounded-lg"
                    type={"text"}
                    placeholder="Last Name"
                ></InputForm>
            </div>
            <div className="flex mt-3 justify-between">
                <div className="relative  ">
                    <InputForm
                        type="text"
                        placeholder="Phone Number"
                        className="border border-gray-300 rounded-lg w-[220px] pl-[70px] "
                    />

                    <Image
                        src={"/Logos/cambodiaflag.png"}
                        alt={"cambodaiflag"}
                        width={10}
                        height={10}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    ></Image>

                    <label htmlFor="text" className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black ">
                        855
                    </label>
                </div>
                <div>
                    <InputForm
                        type={"text"}
                        placeholder="Subject"
                        className="w-[220px] border border-gray-300 rounded-lg "
                    >

                    </InputForm>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-2">

            </div>
            <div>
                <InputForm
                    type={"text"}
                    placeholder="Address"
                    className="w-[464px] border border-gray-300 rounded-lg "
                >

                </InputForm>
            </div>


        </div>
    );
};

export { AboutForm };
