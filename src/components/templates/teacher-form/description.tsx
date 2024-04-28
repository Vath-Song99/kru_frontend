// import React from "react";
// import { TeacherNavbarComponent } from "../../molecules";
// import { DescriptionForm, TeacherNavbar } from "../../organisms";
// import { Typography } from "../../atoms";

// const Description = () => {
//   const inputFormsArray = [
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "Write at least 50 Charaters",
//     },
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "at least 40 characters",
//     },
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "at least 25 charaters",
//     },
//     {
//       type: "file",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "input video for yourself",
//     },
//   ];
//   return (
//     <div className="">
//       <div className="w-full flex justify-center items-center">
//         <TeacherNavbar className="py-3 ">
//           <TeacherNavbarComponent>
//             <div className="w-[35px] h-[36px] bg-green-600 rounded-md flex justify-center items-center">
//               <svg
//                 width="25"
//                 height="24"
//                 viewBox="0 0 25 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M5 13.0278L10.6 19.25L19 5.25"
//                   stroke="white"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//             <Typography>about</Typography>
//           </TeacherNavbarComponent>

//           <TeacherNavbarComponent>
//             <div className="w-[35px] h-[36px] bg-green-600 rounded-md flex justify-center items-center">
//               <svg
//                 width="25"
//                 height="24"
//                 viewBox="0 0 25 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M5 13.0278L10.6 19.25L19 5.25"
//                   stroke="white"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//             <Typography>Education</Typography>
//           </TeacherNavbarComponent>

//           <TeacherNavbarComponent>
//             <div className="w-[35px] h-[36px] bg-black rounded-md flex justify-center items-center text-white">
//               3
//             </div>
//             <Typography>Description</Typography>
//           </TeacherNavbarComponent>
//           <TeacherNavbarComponent>
//             <div className="w-[35px] h-[36px] bg-black rounded-md flex justify-center items-center text-white">
//               4
//             </div>
//             <Typography>Time Available</Typography>
//           </TeacherNavbarComponent>
//           <TeacherNavbarComponent icon={false}>
//             <div className="w-[35px] h-[36px] bg-black rounded-md flex justify-center items-center text-white">
//               5
//             </div>
//             <Typography>Pricing</Typography>
//           </TeacherNavbarComponent>
//         </TeacherNavbar>
//       </div>

//       <div className="w-full flex justify-center pt-10">
//         <DescriptionForm
//           buttonTitle="next"
//           description="This info will go on your public profile. Write it in the language you’ll be teaching"
//           inputForms={inputFormsArray}
//           title="Profile Description"
//         />
//       </div>
//     </div>
//   );
// };

// export { Description };
