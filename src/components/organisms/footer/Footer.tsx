import React, { ReactNode } from "react";

  const Footer: React.FC = () => {
    return (
        <footer className="footer bg-gray-900 py-16 mt-16">
        <div className="container mx-[5%]">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-white text-lg m-0">1-ON-1 TUTORS</h4>
              <div className="w-10 h-[2px] bg-[#e91e63] mt-1"></div>
              <ul className="flex flex-col mt-5 gap-y-5">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    English teacher
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Math teacher
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Khmer teacher
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Computer teacher
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Physics teacher
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Biology teacher
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-white text-lg m-0">Get help</h4>
              <div className="w-10 h-[2px] bg-[#e91e63] mt-1"></div>
              <ul className="flex flex-col mt-5 gap-y-5 ">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    returns
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-white text-xl m-0">Contact</h4>
              <div className="w-10 h-[2px] bg-[#e91e63] mt-1"></div>
              <ul className="flex flex-col mt-5 gap-y-5">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-all hover:ml-4">
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-white text-lg m-0">follow us</h4>
              <div className="w-10 h-[2px] bg-[#e91e63] mt-1"></div>
              <div className="flex mt-5 gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> 
    );
  }

  export {Footer};