import React, { useEffect, useState } from "react";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoBriefcase } from "react-icons/go";
import axios from "axios";
import Loader from "../../../shared/Loader";
import { FaGamepad } from "react-icons/fa";
import { BsSendCheck } from "react-icons/bs";

interface dataType {
  title: string;
  companyName: string;
  jobType: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  jobDescription: string;
  category: {
    id: string;
    name: string;
  };
  minExperience: number;
  id: string;
  createdAt: string;
  updatedAt: string;
  tags: any;
  __v: number;
}

function RecentJob() {
  const [recentjob, setRecentJob] = useState<dataType[]>([]);
  const [sortOrder, setSortOrder] = useState<"up" | "down">("up");
  const [loading, setLoading] = useState(true);

  const fetchRecentJob = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/jobs?sort=${sortOrder}`
    );
    setRecentJob(response.data.data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchRecentJob();
  }, [sortOrder]);
  return (
    <div>
      <div className="px-4 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg text-3xl font-semibold leading-none tracking-tight text-gray-900 md:mx-auto">
            Most Recent Job in Ghana
          </h1>
          <p className="text-sm pt-2 text-gray-700">
            Find the best paying jobs based on the job category. 100% safe
            recruitment process with transparent progress and real-time
            assessment.
          </p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className=" py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            {recentjob.length === 0 ? (
              <p className="text-center">No jobs available at the moment.</p>
            ) : (
              <div className="grid gap-4 row-gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recentjob.slice(0, 8).map((item, key) => (
                  <div
                    key={key}
                    className="bg-white rounded-lg flex flex-col justify-between p-4 border"
                  >
                    <div>
                      <h1 className="text-[18px] leading-none font-semibold text-black mb-2 ">
                        {item.title.substring(0, 100)}
                      </h1>
                      <div className="flex flex-wrap text-[#53575A] items-center">
                        <CiUser className="text-[16px] " />
                        <h1 className="text-[14px] pl-2 font-normal">
                          {item.companyName}
                        </h1>
                      </div>
                      <div className="flex flex-wrap text-[#53575A] items-center">
                        <GoBriefcase className="text-[16px] " />
                        <h1 className="text-[14px] pl-2 font-normal">
                          {item.jobType}
                        </h1>
                      </div>
                      <div className="flex flex-wrap text-[#53575A] items-center">
                        <CiLocationOn className="text-[16px] " />
                        <h1 className="text-[14px] pl-2 font-normal">
                          {item.location}
                        </h1>
                      </div>
                      <div className="flex flex-wrap text-[#53575A] items-center">
                        <CiCalendar className="text-[16px] " />
                        <h1 className="text-[14px] pl-2 font-normal">
                          {" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </h1>
                      </div>
                      <div className="flex text-[#53575A] py-2 items-center">
                        <FaGamepad className="text-[16px] " />
                        <hr className=" w-full"></hr>
                      </div>
                      <div className="flex text-[14px] leading-4 text-[#53575A] items-center">
                        <p>{item.jobDescription.substring(0, 100)}...</p>
                      </div>
                      <Link
                        to={`/job-details/${item.id}`}
                        className="inline-flex cursor-pointer my-2 items-center justify-center rounded-md bg-[#4187ED] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent"
                      >
                        View and Apply
                        <BsSendCheck className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <Link
          to="/jobs"
          className="group flex items-center mt-4 justify-center text-[#4187ED] text-opacity-70 hover:text-[#4187ED] hover:font-semibold transition ease-in-out duration-200"
        >
          View More{" "}
          <span
            aria-hidden="true"
            className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

export default RecentJob;
