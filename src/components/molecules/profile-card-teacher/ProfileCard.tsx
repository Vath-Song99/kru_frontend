import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms";
import Link from "next/link";

interface ProfileCardProps {
  className?: string;
  imageUrl: string;
  username: string;
  subjectname: string;
  rateStar: number;
  price: number;
  students: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  className,
  imageUrl,
  username,
  subjectname,
  rateStar,
  price,
  students,
}) => {
  return (
    <div
      className={`w-[353px] h-[388px] rounded-md border shadow-md p-4 ${className}`}
    >
      <Image
        className="w-[317px] h-[235px] rounded-md object-cover"
        src={imageUrl}
        alt="Image Card"
        width={500}
        height={500}
      ></Image>

      <div className="grid grid-flow-row justify-start gap-2 mt-2">
       <div className="p-0 m-0">
       <Typography
          className="capitalize"
          fontSize="md"
          colorscheme="secondary"
          variant="semibold"
          align="left"
        >
          {username}
        </Typography>

        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 py-1 pr-2 text-[#455445]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <Typography
            className="capitalize"
            fontSize="sm"
            colorscheme="secondary"
            variant="normal"
            align="left"
          >
            {subjectname}
          </Typography>
        </div>
       </div>

        <div className="w-[144px]  flex items-center justify-between">
          <div className="flex items-center">
            <Typography className=""
             fontSize="sm"
             colorscheme="secondary"
             variant="normal"
             align="left"
             tags="p"
            >{rateStar}</Typography>
            <svg
            
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
            >
              <path
                d="M13.0811 5.32044C13.0281 5.15713 12.9282 5.01302 12.7939 4.90606C12.6596 4.79909 12.4969 4.73399 12.3258 4.71888L9.07794 4.43888L7.80482 1.41138C7.73853 1.25252 7.62673 1.11682 7.48348 1.02138C7.34023 0.925929 7.17195 0.875 6.99982 0.875C6.82768 0.875 6.6594 0.925929 6.51615 1.02138C6.37291 1.11682 6.2611 1.25252 6.19482 1.41138L4.92552 4.43888L1.6738 4.72052C1.5021 4.73494 1.33848 4.79974 1.20347 4.90679C1.06845 5.01384 0.968039 5.15836 0.914833 5.32225C0.861626 5.48613 0.857989 5.66208 0.904379 5.82802C0.950768 5.99396 1.04512 6.14251 1.1756 6.25505L3.64255 8.41083L2.90318 11.6122C2.86408 11.7798 2.87524 11.9551 2.93525 12.1163C2.99526 12.2776 3.10147 12.4175 3.2406 12.5187C3.37972 12.6199 3.54559 12.6778 3.71746 12.6853C3.88933 12.6927 4.05958 12.6493 4.20693 12.5605L6.99599 10.8652L9.79107 12.5605C9.93841 12.6493 10.1087 12.6927 10.2805 12.6853C10.4524 12.6778 10.6183 12.6199 10.7574 12.5187C10.8965 12.4175 11.0027 12.2776 11.0627 12.1163C11.1228 11.9551 11.1339 11.7798 11.0948 11.6122L10.356 8.40755L12.8224 6.25505C12.9529 6.14212 13.047 5.99315 13.093 5.82686C13.1391 5.66056 13.1349 5.48437 13.0811 5.32044ZM12.2487 5.59388L9.78232 7.74638C9.66228 7.85079 9.57298 7.98596 9.52403 8.13734C9.47508 8.28872 9.46833 8.45059 9.5045 8.60552L10.2455 11.8124L7.45263 10.1171C7.31637 10.0341 7.1599 9.9902 7.00036 9.9902C6.84082 9.9902 6.68436 10.0341 6.5481 10.1171L3.75904 11.8124L4.49513 8.6077C4.5313 8.45277 4.52455 8.29091 4.4756 8.13953C4.42665 7.98815 4.33736 7.85298 4.21732 7.74856L1.74982 5.59716C1.74962 5.59552 1.74962 5.59387 1.74982 5.59224L5.00044 5.31114C5.15915 5.29715 5.31102 5.2401 5.43968 5.14613C5.56834 5.05217 5.6689 4.92486 5.73052 4.77794L6.99982 1.75427L8.26857 4.77794C8.33018 4.92486 8.43075 5.05217 8.55941 5.14613C8.68807 5.2401 8.83994 5.29715 8.99864 5.31114L12.2498 5.59224V5.59606L12.2487 5.59388Z"
                fill="#FFE600"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <Typography className=""
             fontSize="sm"
             colorscheme="secondary"
             variant="normal"
             align="left"
             tags="p"
            >{price}</Typography>
            <svg
            
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M4.0835 8.75H5.25016C5.25016 9.38 6.04933 9.91667 7.00016 9.91667C7.951 9.91667 8.75016 9.38 8.75016 8.75C8.75016 8.10833 8.1435 7.875 6.86016 7.56583C5.6235 7.25667 4.0835 6.87167 4.0835 5.25C4.0835 4.20583 4.941 3.31917 6.12516 3.02167V1.75H7.87516V3.02167C9.05933 3.31917 9.91683 4.20583 9.91683 5.25H8.75016C8.75016 4.62 7.951 4.08333 7.00016 4.08333C6.04933 4.08333 5.25016 4.62 5.25016 5.25C5.25016 5.89167 5.85683 6.125 7.14016 6.43417C8.37683 6.74333 9.91683 7.12833 9.91683 8.75C9.91683 9.79417 9.05933 10.6808 7.87516 10.9783V12.25H6.12516V10.9783C4.941 10.6808 4.0835 9.79417 4.0835 8.75Z"
                fill="#008000"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <Typography className="mr-1"
             fontSize="sm"
             colorscheme="secondary"
             variant="normal"
             align="left"
             tags="p"
            >{students}</Typography>
            <svg
            
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mb-[3px]"
            >
              <path
                d="M7 3.2085C7.54148 3.2085 8.06079 3.4236 8.44368 3.80649C8.82656 4.18937 9.04167 4.70868 9.04167 5.25016C9.04167 5.79165 8.82656 6.31095 8.44368 6.69384C8.06079 7.07673 7.54148 7.29183 7 7.29183C6.45852 7.29183 5.93921 7.07673 5.55632 6.69384C5.17344 6.31095 4.95833 5.79165 4.95833 5.25016C4.95833 4.70868 5.17344 4.18937 5.55632 3.80649C5.93921 3.4236 6.45852 3.2085 7 3.2085ZM2.91667 4.66683C3.24333 4.66683 3.54667 4.75433 3.80917 4.91183C3.72167 5.746 3.96667 6.57433 4.46833 7.22183C4.17667 7.78183 3.59333 8.16683 2.91667 8.16683C2.45254 8.16683 2.00742 7.98246 1.67923 7.65427C1.35104 7.32608 1.16667 6.88096 1.16667 6.41683C1.16667 5.9527 1.35104 5.50758 1.67923 5.17939C2.00742 4.8512 2.45254 4.66683 2.91667 4.66683ZM11.0833 4.66683C11.5475 4.66683 11.9926 4.8512 12.3208 5.17939C12.649 5.50758 12.8333 5.9527 12.8333 6.41683C12.8333 6.88096 12.649 7.32608 12.3208 7.65427C11.9926 7.98246 11.5475 8.16683 11.0833 8.16683C10.4067 8.16683 9.82333 7.78183 9.53167 7.22183C10.0403 6.56524 10.2763 5.73794 10.1908 4.91183C10.4533 4.75433 10.7567 4.66683 11.0833 4.66683ZM3.20833 10.646C3.20833 9.4385 4.90583 8.4585 7 8.4585C9.09417 8.4585 10.7917 9.4385 10.7917 10.646V11.6668H3.20833V10.646ZM0 11.6668V10.7918C0 9.981 1.1025 9.2985 2.59583 9.10016C2.25167 9.49683 2.04167 10.0452 2.04167 10.646V11.6668H0ZM14 11.6668H11.9583V10.646C11.9583 10.0452 11.7483 9.49683 11.4042 9.10016C12.8975 9.2985 14 9.981 14 10.7918V11.6668Z"
                fill="#0866FF"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
        <Link
        href={""}
        className="text-[#0157FF] text-sm">See more detail about teacher</Link>
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.22017 0.229106C5.3608 0.0886552 5.55142 0.00976563 5.75017 0.00976563C5.94892 0.00976563 6.13955 0.0886552 6.28017 0.229106L10.5302 4.4791C10.6706 4.61973 10.7495 4.81035 10.7495 5.00911C10.7495 5.20786 10.6706 5.39848 10.5302 5.5391L6.28017 9.7891C6.13791 9.92151 5.94986 9.99362 5.75554 9.99026C5.56123 9.9869 5.37578 9.90835 5.23817 9.7711C5.10093 9.6335 5.02237 9.44805 5.01902 9.25373C5.01566 9.05942 5.08776 8.87137 5.22017 8.7291L8.19017 5.7591L0.750173 5.7591C0.55126 5.7591 0.360496 5.68009 0.219843 5.53943C0.0791906 5.39878 0.000172943 5.20802 0.000172943 5.00911C0.000172943 4.81019 0.0791906 4.61943 0.219843 4.47877C0.360496 4.33812 0.55126 4.25911 0.750173 4.25911L8.19017 4.25911L5.22017 1.28911C5.07972 1.14848 5.00083 0.957856 5.00083 0.759106C5.00083 0.560355 5.07972 0.369731 5.22017 0.229106Z" fill="#0157FF"/>
</svg>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
