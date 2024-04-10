import React from "react";
import { Image } from "@nextui-org/react";
import { Button, InputForm, Typography } from "@/components/atoms";

const SignupToBecomeTeacher = () => {
  return (
    <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[150vh] flex  xl:justify-between justify-center items-center  xl:gap-20 ">
      <div className="w-[80%] md:w-full lg:w-[35%]  grid  lg:grid-flow-row gap-4 ">
        <Typography align="left" fontSize="lg" variant="bold">
          Sign up to become a teacher now
        </Typography>
        <Typography align="left">
          you must be fill all the form condition to become a teacher in our
          community
        </Typography>

        <form
          className="w-full  lg:w-full  lg:grid  lg:grid-flow-row  lg:gap-4"
          action=""
        >
          <div>
            <Typography align="left">Email</Typography>
            <InputForm
              type="text"
              placeholder="example@gmail.com"
              borderColor="primary"
              className="w-full outline-none"
            />
          </div>
          <div>
            <Typography align="left">Password</Typography>
            <InputForm
              type="password"
              placeholder="password"
              borderColor="primary"
              className="w-full outline-none"
            />
          </div>
          <Button
            colorScheme="primary"
            fontColor="white"
            fontSize="lg"
            className="py-[8px] md:py-2 w-full mt-4 text-sm"
          >
            Signup
          </Button>
        </form>
        <div className="w-full flex items-center  justify-between">
          <div className=" border-black border-b w-[40%]"></div>
          <Typography>or</Typography>
          <div className=" border-black border-b w-[40%]"></div>
        </div>

        <div className="w-full grid items-center  grid-flow-row gap-4">
          <Button
            className="grid justify-center items-center grid-flow-col gap-5  text-sm max-[640px]:text-md py-[9px]"
            leftIcon={
              <svg
                className=""
                width="25"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1429_3262)">
                  <path
                    d="M12.5 9.81836V14.4656H18.9582C18.6746 15.9602 17.8236 17.2257 16.5472 18.0766L20.4417 21.0984C22.7108 19.0039 24.0199 15.9276 24.0199 12.273C24.0199 11.4221 23.9436 10.6039 23.8017 9.81849L12.5 9.81836Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.77461 14.2842L4.89625 14.9566L1.78711 17.3783C3.76165 21.2947 7.80862 24.0002 12.4995 24.0002C15.7394 24.0002 18.4557 22.9311 20.4412 21.0984L16.5467 18.0765C15.4776 18.7965 14.114 19.2329 12.4995 19.2329C9.37951 19.2329 6.72868 17.1275 5.77952 14.2911L5.77461 14.2842Z"
                    fill="#34A853"
                  />
                  <path
                    d="M1.78718 6.62158C0.969042 8.23606 0.5 10.0579 0.5 11.9997C0.5 13.9415 0.969042 15.7633 1.78718 17.3778C1.78718 17.3886 5.77997 14.2796 5.77997 14.2796C5.53998 13.5596 5.39812 12.796 5.39812 11.9996C5.39812 11.2031 5.53998 10.4395 5.77997 9.71951L1.78718 6.62158Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.4997 4.77818C14.267 4.77818 15.8379 5.38907 17.0925 6.56727L20.5288 3.13095C18.4452 1.18917 15.7398 0 12.4997 0C7.80887 0 3.76165 2.69454 1.78711 6.62183L5.77978 9.72001C6.72882 6.88362 9.37976 4.77818 12.4997 4.77818Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1429_3262">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            colorScheme="tertiary"
            fontColor="black"
            fontSize="lg"
          >
            Continue with Google
          </Button>
          <Button
            className="grid justify-center items-center grid-flow-col gap-x-1 text-sm py-[9px]"
            leftIcon={
              <svg
                className=""
                width="25"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1429_3265)">
                  <path
                    d="M24.5 12C24.5 5.37264 19.1274 0 12.5 0C5.87264 0 0.5 5.37264 0.5 12C0.5 17.6275 4.37456 22.3498 9.60128 23.6467V15.6672H7.12688V12H9.60128V10.4198C9.60128 6.33552 11.4498 4.4424 15.4597 4.4424C16.22 4.4424 17.5318 4.59168 18.0685 4.74048V8.06448C17.7853 8.03472 17.2933 8.01984 16.6822 8.01984C14.7147 8.01984 13.9544 8.76528 13.9544 10.703V12H17.8741L17.2006 15.6672H13.9544V23.9122C19.8963 23.1946 24.5005 18.1354 24.5005 12H24.5Z"
                    fill="#0866FF"
                  />
                  <path
                    d="M17.2002 15.6672L17.8737 12H13.954V10.703C13.954 8.76526 14.7143 8.01982 16.6818 8.01982C17.2929 8.01982 17.7849 8.0347 18.0681 8.06446V4.74046C17.5314 4.59118 16.2196 4.44238 15.4593 4.44238C11.4493 4.44238 9.60087 6.3355 9.60087 10.4198V12H7.12646V15.6672H9.60087V23.6467C10.5292 23.8771 11.5002 24 12.4996 24C12.9916 24 13.4769 23.9697 13.9535 23.9121V15.6672H17.1997H17.2002Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1429_3265">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            colorScheme="tertiary"
            fontColor="black"
            fontSize="lg"
          >
            Continue with Facebook
          </Button>
        </div>
      </div>

      <Image
        className="w-[100%] hidden xl:block"
        src="/benner/teacher-signup.png"
        alt="sign up to become a teacher"
        width={500}
        height={500}
      ></Image>
    </div>
  );
};

export default SignupToBecomeTeacher;
