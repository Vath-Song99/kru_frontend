"use client";
import { AuthForm } from "@/@types/users/users";
import { Button, InputForm } from "@/components";
import { AuthValidateSchema } from "@/schema/UserValidateSchema";
import * as Yup from "yup";
import React, { ChangeEvent, FC, FormEventHandler, useState } from "react";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";
interface Formprop {}
const DEFAULT_FORM_VALUE = {
  name: "",
  lastname: "",
  firstname: "",
  email: "",
  password: "",
};
const FormSignup: FC<Formprop> = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<AuthForm>(DEFAULT_FORM_VALUE);
  const { addNewAuth } = useUser();
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await AuthValidateSchema.validate(formData, { abortEarly: false });
      addNewAuth(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        error.inner.forEach((e) => {
          if (e.path) {
            newErrors[e.path] = e.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };
  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="">First Name:</label>
          <InputForm
            type="text"
            placeholder="First Name"
            className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none text-xs"
            name="firstname"
            value={formData.firstname}
            onChange={onChangeInput}
          />
          {errors.firstname && (
            <p className="mt-2" style={{ color: "red" }}>
              {errors.firstname}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Last Name:</label>
          <InputForm
            type="text"
            placeholder="Last Name"
            className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none text-xs"
            name="lastname"
            value={formData.lastname}
            onChange={onChangeInput}
          />
          {errors.lastname && (
            <p className="mt-2" style={{ color: "red" }}>
              {errors.lastname}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Email</label>
          <InputForm
            type="email"
            placeholder="email"
            className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none text-xs"
            name="email"
            onChange={onChangeInput}
          />
          {errors.email && (
            <p className="mt-2" style={{ color: "red" }}>
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <InputForm
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none text-xs"
              name="password"
              value={formData.password}
              onChange={onChangeInput}
            />
            {errors.password && (
              <p className="mt-2" style={{ color: "red" }}>
                {errors.password}
              </p>
            )}

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute  right-3 top-2">
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}{" "}
            </button>
          </div>
        </div>
        <div className=" flex items-center  justify-between my-5 mb-[10px]">
          <div className="flex items-center gap-1">
            <input type="checkbox" className=" outline-none" />
            <Link href={"/signup"} className="text-sm">
              Remember me
            </Link>
          </div>
          <Link
            href={"/login"}
            className="inline-block align-baseline text-xs hover:underline   text-[#455445]">
            Already have an account?
          </Link>
        </div>
        <Button type="submit" className="w-full py-2.5 text-sm">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default FormSignup;
