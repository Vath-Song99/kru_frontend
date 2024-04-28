// import React from "react";
// import { TeacherNavbarComponent } from "../../molecules";
// import { BecomeTeacherForm, TeacherNavbar } from "../../organisms";
// import { Typography } from "../../atoms";

// const Education = () => {
//   const inputFormsArray = [
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "University",
//     },
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "Year of experience",
//     },
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "Specialization",
//     },
//     {
//       type: "text",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "Type of Degree",
//     },
//     {
//       type: "file",
//       borderColor: "black",
//       borderRadius: "md",
//       placeholder: "Type of Degree",
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
//             <div className="w-[35px] h-[36px] bg-black rounded-md flex justify-center items-center text-white">
//               2
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
//         <BecomeTeacherForm
//           buttonTitle="next"
//           description="Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more students."
//           inputForms={inputFormsArray}
//           title="Teaching Certification"
//           checkboxtext={"Don't have degree?"} />
//       </div>
//     </div>
//   );
// };

// export { Education };
