import React from "react";
import { Image } from "@nextui-org/react";
import { Button, InputForm, Typography } from "@/components/atoms";

const SignupToBecomeTeacher = () => {
  return (
    <div className="w-auto">
      <div className="w-[327px] px-2 border">
        <Typography>Sign to become a teacher now</Typography>
        <Typography>
          you must be fill all the form condition to become a teacher in our
          community
        </Typography>
        
        <form action="">
          <InputForm
            type="text"
            borderColor="primary"
            placeholder="example@gmail.com"
          />
          <InputForm type="password" borderColor="primary" placeholder="" />
            <Button className="" colorScheme="primary" fontColor="white">
              Sign up
            </Button>          
        </form>
      </div>

      <Image src="" alt=""></Image>
    </div>
  );
};

export default SignupToBecomeTeacher;
