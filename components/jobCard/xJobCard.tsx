import React from "react";
import {
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import { capitalizeFirstLetter, formatTimeAgo } from "@/utils/helper";

const xJobDataProps = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
  companyLogo: PropTypes.string,
  minSalary: PropTypes.number,
  maxSalary: PropTypes.number,
  seniority: PropTypes.array,
  categories: PropTypes.array,
  publishedDate: PropTypes.string,
  expiryDate: PropTypes.string,
  applicationLink: PropTypes.string,
};

const XJobCard = ({
  title, description,
  companyLogo, companyName,
  minSalary, maxSalary,
  seniority, categories,
  publishedDate, expiryDate,
  applicationLink
}: InferProps<typeof xJobDataProps>): JSX.Element => {
  function addCommasToNumber(numberString:any) {
    // Convert the string to a number and back to a string with commas as thousand separators
    return Number(numberString).toLocaleString();
  }

  return (
    <>
      <div className="bg-white rounded-xl border cursor-pointer border-gray-200 p-3  mt-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className=" bg-gray-50  border-[1px] border-solid border-gray-300 rounded-xl">
              <Image
                src={companyLogo as string}
                alt={companyName as string}
                width={43}
                height={43}
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center">
                <h1 className="font-semibold text-lg">
                  {capitalizeFirstLetter(title as string)}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <p className="opacity-60  font-semibold text-base">{companyName}</p>
                <div className="flex items-center gap-2 bg-light_green px-4 py-2 rounded-full">
                  <CheckCircleIcon className="w-5 h-5 bg-primary_green text-gray-200 rounded-full" />
                  <p className="text-primary_green text-xs font-bold">
                    {seniority?.[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 my-5">
          <p className="font-inter  font-normal text-base lg:ml-[60px] ">{description}</p>
        </div>
        {/* <div>
          <p>Catergory  {categories}</p>
        </div> */}

        <div
          className={`flex  flex-wrap sm:flex-col md:flex-row sm:gap-3 items-center md:justify-between mt-3 py-3 px-5 rounded-2xl bg-light_green`}
        >
          <div className="flex  flex-wrap sm:justify-between md:gap-40">
            <p className="font-semibold text-base w-full md:w-auto">
              Salary : USD  {addCommasToNumber(minSalary)} - {addCommasToNumber(maxSalary)}
            </p>
            <p className="font-semibold text-base w-full md:w-auto">
              Posted : {formatTimeAgo(publishedDate as string)}
            </p>
            <p className="font-semibold text-base w-full md:w-auto">
              Expires : {new Date(expiryDate as string).toDateString()}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center sm:justify-between w-full md:w-auto my-4 md:my-0">

            <div className="flex gap-3 w-full  items-center md:w-auto">
              <a className="bg-primary_green text-sm text-white px-6 py-1.5 rounded-lg w-1/2  md:w-auto"
                target="_blank" rel="noopener noreferrer"
                href={applicationLink as string}
              >
                Apply
                </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default XJobCard;
