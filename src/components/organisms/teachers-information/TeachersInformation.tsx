import React from "react";
import Image from "next/image";
import { Typography } from "@/components";
const TeachersInformation = () => {
  return (
    <div className="w-full flex  justify-center items-center flex-wrap">
      <div className="w-[80%] h-auto flex justify-between">
        <div className="w-[360px] h-[316px] flex justify-start">
          {/* image handle */}
          <div className="flex flex-col">
            {/* use image class  */}
            <div className="w-[210px] h-[210px] relative">
              <svg
                className="w-[15px] h-[15px] absolute  my-[160px] ml-[160px]"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.8125 15C2.8125 8.26875 8.26875 2.8125 15 2.8125C21.7313 2.8125 27.1875 8.26875 27.1875 15C27.1875 21.7313 21.7313 27.1875 15 27.1875C8.26875 27.1875 2.8125 21.7313 2.8125 15ZM19.5125 12.7325C19.5875 12.6326 19.6418 12.5186 19.6721 12.3974C19.7025 12.2762 19.7083 12.1502 19.6892 12.0267C19.6701 11.9032 19.6266 11.7848 19.5611 11.6784C19.4956 11.572 19.4095 11.4797 19.3078 11.4071C19.2062 11.3344 19.091 11.2828 18.9691 11.2553C18.8473 11.2278 18.7211 11.2249 18.5981 11.2468C18.4751 11.2688 18.3577 11.3151 18.2528 11.383C18.148 11.451 18.0578 11.5392 17.9875 11.6425L13.9425 17.305L11.9125 15.275C11.7348 15.1094 11.4997 15.0192 11.2568 15.0235C11.014 15.0278 10.7822 15.1262 10.6105 15.298C10.4387 15.4697 10.3403 15.7015 10.336 15.9443C10.3317 16.1872 10.4219 16.4223 10.5875 16.6L13.4 19.4125C13.4962 19.5087 13.6123 19.5827 13.74 19.6296C13.8677 19.6764 14.0041 19.6948 14.1397 19.6837C14.2753 19.6725 14.4068 19.6319 14.5252 19.5648C14.6435 19.4977 14.7458 19.4056 14.825 19.295L19.5125 12.7325Z"
                  fill="#008000"
                />
              </svg>
              <Image
                className="rounded-full w-[200px] h-[200px] py-[5px] pl-[5px] object-cover"
                src="/Profiles/example1.jpg"
                width={300}
                height={200}
                alt="Picture of the author"
              />
            </div>
            {/* end image class */}
            <div className="flex justify-center ">
              <Typography fontSize="sm" variant="semibold">
                Ny Sreyneang
              </Typography>
            </div>
          </div>
          {/*end image handle */}
          <div className="py-[5px] flex flex-col">
            {/* subject for handle      */}
            <div className="flex justify-start">
              {/* icon study */}
              <svg
                className="w-[18px] h-[18px] pt-[2px]"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 3.67401C9.57688 1.94893 7.08346 0.996443 4.5 1.00001C3.27267 1.00001 2.09433 1.21001 1 1.59734V18.2223C2.12422 17.8257 3.30786 17.6237 4.5 17.625C7.18917 17.625 9.64267 18.6365 11.5 20.299M11.5 3.67401C13.4231 1.94883 15.9165 0.996333 18.5 1.00001C19.7273 1.00001 20.9057 1.21001 22 1.59734V18.2223C20.8758 17.8257 19.6921 17.6237 18.5 17.625C15.9165 17.6214 13.4231 18.5739 11.5 20.299M11.5 3.67401V20.299"
                  stroke="#455445"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Typography fontSize="sm" variant="bold" className="pl-[10px]">
                Ny Sreyneang
              </Typography>
              {/* end icon study  */}
            </div>
            {/* end subject for handle */}
            {/* this  star in card */}
            <div className="pt-[30px] flex justify-between">
              <div className="flex justify-start">
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9583 3.64461C12.0024 3.53714 12.0774 3.44521 12.1738 3.3805C12.2703 3.3158 12.3838 3.28125 12.5 3.28125C12.6161 3.28125 12.7296 3.3158 12.8261 3.3805C12.9225 3.44521 12.9976 3.53714 13.0416 3.64461L15.2552 8.96857C15.2966 9.06819 15.3647 9.15445 15.452 9.21785C15.5393 9.28126 15.6424 9.31935 15.75 9.32794L21.4979 9.78836C22.0177 9.83003 22.2281 10.479 21.8323 10.8175L17.4531 14.5696C17.3713 14.6396 17.3103 14.7308 17.2769 14.8331C17.2434 14.9354 17.2388 15.045 17.2635 15.1498L18.602 20.7592C18.629 20.8717 18.6219 20.9897 18.5818 21.0983C18.5417 21.2068 18.4703 21.301 18.3767 21.369C18.283 21.437 18.1714 21.4757 18.0557 21.4803C17.9401 21.4848 17.8257 21.455 17.727 21.3946L12.8052 18.3894C12.7133 18.3333 12.6077 18.3035 12.5 18.3035C12.3923 18.3035 12.2867 18.3333 12.1948 18.3894L7.27288 21.3956C7.17419 21.4561 7.05981 21.4859 6.94419 21.4813C6.82857 21.4767 6.7169 21.438 6.62327 21.37C6.52964 21.302 6.45826 21.2078 6.41815 21.0993C6.37803 20.9908 6.37098 20.8728 6.39788 20.7602L7.73643 15.1498C7.76125 15.045 7.75669 14.9354 7.72324 14.833C7.68979 14.7307 7.62875 14.6395 7.54684 14.5696L3.16768 10.8175C3.07949 10.7424 3.0156 10.6427 2.98409 10.5312C2.95258 10.4197 2.95488 10.3013 2.99069 10.1911C3.02649 10.0809 3.0942 9.98381 3.18523 9.91211C3.27626 9.84042 3.38652 9.79735 3.50205 9.78836L9.24997 9.32794C9.35752 9.31935 9.46061 9.28126 9.54791 9.21785C9.63521 9.15445 9.70332 9.06819 9.74476 8.96857L11.9583 3.64461Z"
                    stroke="#CFCF37"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Typography fontSize="sm" variant="normal" className="px-[4px]">
                  106
                </Typography>
              </div>

              <div className=" flex justify-start">
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.0835 8.75H5.25016C5.25016 9.38 6.04933 9.91667 7.00016 9.91667C7.951 9.91667 8.75016 9.38 8.75016 8.75C8.75016 8.10833 8.1435 7.875 6.86016 7.56583C5.6235 7.25667 4.0835 6.87167 4.0835 5.25C4.0835 4.20583 4.941 3.31917 6.12516 3.02167V1.75H7.87516V3.02167C9.05933 3.31917 9.91683 4.20583 9.91683 5.25H8.75016C8.75016 4.62 7.951 4.08333 7.00016 4.08333C6.04933 4.08333 5.25016 4.62 5.25016 5.25C5.25016 5.89167 5.85683 6.125 7.14016 6.43417C8.37683 6.74333 9.91683 7.12833 9.91683 8.75C9.91683 9.79417 9.05933 10.6808 7.87516 10.9783V12.25H6.12516V10.9783C4.941 10.6808 4.0835 9.79417 4.0835 8.75Z"
                    fill="#008000"
                  />
                </svg>

                <Typography fontSize="sm" variant="normal" className="px-[4px]">
                  25
                </Typography>
              </div>
            </div>
            {/* end star card */}
            {/* this handles card  title*/}
            <div className="flex justify-between">
             <div className="flex justify-start ">
               <small>56</small>
               <Typography fontSize="sm" variant="normal" className="px-[4px]">
                   reviews
                </Typography>
             </div>
             <div className="flex justify-start ">
               <small>par</small>
               <Typography fontSize="sm" variant="normal" className="px-[4px]">
               month
                </Typography>
             </div>
            </div>
            {/* end handles card title */}
            
          </div>
        </div>
        <div> helo</div>
      </div>
    </div>
  );
};

export default TeachersInformation;
