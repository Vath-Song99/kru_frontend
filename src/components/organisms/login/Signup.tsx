import { Button } from "@/components";
import React, { useState } from "react";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [Password, setPassword] = useState("");
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="w-full h-full flex justify-center items-center mt-20 mx-auto">
            <div className="border-[1px] border-[#f3f3f3]-500 w-[500px] h-[700px] flex items-center justify-center shadow-[0_1px_3px_rgb(0,0,0,0.2)]">
                <div className="flex">
                    <div className="space-y-5">
                        <div className="flex flex-col   ">
                            <h1 className="text-[30px] font-bold ">Sign up with Kru</h1>
                            <h4 className="underline">
                                Sign up as a teacher?{" "}
                                <a className="text-[#7b2cbf] underline hover:text-purple-700">
                                    Sign up
                                </a>
                            </h4>
                        </div>
                        <div className="space-y-5">
                            <Button className="flex items-center justify-center w-[360px] h-[50px]  bg-[#f3f3f3] rounded-md hover:bg-[#d2d0d0]">
                                <div className="w-[80%] flex justify-between items-center">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 9.81836V14.4656H18.4582C18.1746 15.9602 17.3236 17.2257 16.0472 18.0766L19.9417 21.0984C22.2108 19.0039 23.5199 15.9276 23.5199 12.273C23.5199 11.4221 23.4436 10.6039 23.3017 9.81849L12 9.81836Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M5.27461 14.2842L4.39625 14.9566L1.28711 17.3783C3.26165 21.2947 7.30862 24.0002 11.9995 24.0002C15.2394 24.0002 17.9557 22.9311 19.9412 21.0984L16.0467 18.0765C14.9776 18.7965 13.614 19.2329 11.9995 19.2329C8.87951 19.2329 6.22868 17.1275 5.27952 14.2911L5.27461 14.2842Z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M1.28718 6.62158C0.469042 8.23606 0 10.0579 0 11.9997C0 13.9415 0.469042 15.7633 1.28718 17.3778C1.28718 17.3886 5.27997 14.2796 5.27997 14.2796C5.03998 13.5596 4.89812 12.796 4.89812 11.9996C4.89812 11.2031 5.03998 10.4395 5.27997 9.71951L1.28718 6.62158Z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M11.9997 4.77818C13.767 4.77818 15.3379 5.38907 16.5925 6.56727L20.0288 3.13095C17.9452 1.18917 15.2398 0 11.9997 0C7.30887 0 3.26165 2.69454 1.28711 6.62183L5.27978 9.72001C6.22882 6.88362 8.87976 4.77818 11.9997 4.77818Z"
                                            fill="#EA4335"
                                        />
                                    </svg>

                                    <p className="text-base text-slate-950 mr-[40px] ">
                                        Continue with Google
                                    </p>
                                </div>
                            </Button>
                            <Button className="flex items-center  justify-center w-[360px] h-[50px]   bg-[#f3f3f3] rounded-md  hover:bg-[#d2d0d0] ">

                                <div className="w-[80%] flex gap-[40px] items-center">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_2243_1312)">
                                            <path
                                                d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z"
                                                fill="#0866FF"
                                            />
                                            <path
                                                d="M16.7002 15.6672L17.3737 12H13.454V10.703C13.454 8.76526 14.2143 8.01982 16.1818 8.01982C16.7929 8.01982 17.2849 8.0347 17.5681 8.06446V4.74046C17.0314 4.59118 15.7196 4.44238 14.9593 4.44238C10.9493 4.44238 9.10087 6.3355 9.10087 10.4198V12H6.62646V15.6672H9.10087V23.6467C10.0292 23.8771 11.0002 24 11.9996 24C12.4916 24 12.9769 23.9697 13.4535 23.9121V15.6672H16.6997H16.7002Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2243_1312">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="text-base text-slate-950 ">
                                        Continue with Facebook
                                    </p>

                                </div>
                            </Button>
                            <div className="w-full flex items-center mt-4 justify-evenly pr-3">


                                <div className="border-t border-black w-[40%] "></div>
                                <div className=" text-black px-5">or</div>
                                <div className="border-t border-black w-[40%] "></div>
                            </div>
                            <div className="">
                                <form>
                                    <div className="flex flex-col">
                                        <label htmlFor="">First Name:</label>
                                        <input
                                            outline-none placeholder="First Name"
                                            type="text"
                                            className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Last Name:</label>
                                        <input
                                            outline-none placeholder="Last Name"
                                            type="text"
                                            className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="username">Email</label>
                                        <input
                                            outline-none type="email"
                                            placeholder="example@gmail.com"
                                            className="border border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col ">
                                        <label htmlFor="password">Password</label>
                                        <div className="relative">
                                            <input
                                                outline-none type={showPassword ? "text" : "password"}
                                                value={Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="*********"
                                                className="border  border-purple-500 rounded-md w-[360px] h-[40px] pl-3 outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute  right-3 top-2"
                                            >
                                                {showPassword ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
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
                                                        className="w-6 h-6"
                                                    >
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
                                    <div className=" flex items-center justify-between mt-[8px] mb-[10px]">
                                        <div className="flex items-center gap-1">
                                            <input type="checkbox" className=" outline-none" />
                                            <a href="" className="text-sm">
                                                Remember me
                                            </a>
                                        </div>
                                        <a
                                            className="inline-block align-baseline text-xs hover:underline   text-[#455445]"
                                            href="index"
                                        >
                                            Already have an account?
                                        </a>
                                    </div>
                                    <Button className="rounded-m hover:bg-white hover:border-[#7b2cbc] hover:border-2 hover:text-black hover:rounded-md
                                        text-white text-[16px] flex justify-center w-[360px]  py-2 px-4 focus:outline-none focus:shadow-outline ">
                                        Sign up
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
