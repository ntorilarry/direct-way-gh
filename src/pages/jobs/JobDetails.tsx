import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../shared/Loader";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import WithAuth from "../auth/utils/WithAuth";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { GoBriefcase } from "react-icons/go";
import { FaGamepad } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosTrendingUp } from "react-icons/io";
import { FaCediSign } from "react-icons/fa6";

interface dataType {
  job: {
    id: string;
    title: string;
    companyName: string;
    jobType: string;
    location: string;
    minSalary: number;
    maxSalary: number;
    jobDescription: string;
    minExperience: number;
    category: string;
    createdAt: string;
    updatedAt: string;
    tags: any;
    __v: number;
  };
}

function JobDetails() {
  const [jobDetails, setJobDetails] = useState<dataType>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(`this is the id ${id}`);

  const fetchJobDetails = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/jobs/${id}`
    );
    setJobDetails(response.data.data);
    console.log("job details", response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobDetails();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <section className="p-4 md:p-10 bg-[#F6F6FA]">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20 my-16">
            {/* 1/3 and 2/3 */}

            {/* 2/3 and 1/3 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-3xl mt-16 bg-white p-4 md:p-8 md:col-span-2">
                <div>
                  <h1 className="text-[19px] leading-none font-semibold text-black mb-2 ">
                    {jobDetails && jobDetails.job.title}
                  </h1>
                  <div className="flex gap-x-4 flex-row flex-wrap">
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <CiUser className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        {jobDetails && jobDetails.job.companyName}
                      </h1>
                    </div>
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <GoBriefcase className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        {jobDetails && jobDetails.job.jobType}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-x-4 flex-row flex-wrap">
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <BiCategoryAlt className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        {jobDetails && jobDetails.job.category}
                      </h1>
                    </div>
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <IoIosTrendingUp className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        Minimum Experience -{" "}
                        {jobDetails && jobDetails.job.minExperience}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-x-4 flex-row flex-wrap">
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <FaCediSign className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        GHS{jobDetails && jobDetails.job.minSalary} - GHS
                        {jobDetails && jobDetails.job.maxSalary}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-x-4 flex-row flex-wrap">
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <CiLocationOn className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        {jobDetails && jobDetails.job.location}
                      </h1>
                    </div>
                    <div className="flex flex-wrap text-[#53575A] items-center">
                      <CiCalendar className="text-[17px] " />
                      <h1 className="text-[15px] pl-2 font-normal">
                        {" "}
                        {new Date(
                          jobDetails && jobDetails.job.createdAt
                        ).toLocaleDateString()}
                      </h1>
                    </div>
                  </div>
                  <div className="flex text-[#53575A] py-2 items-center">
                    <FaGamepad className="text-[17px] " />
                    <hr className=" w-full"></hr>
                  </div>
                  <div className="flex text-[15px] leading-5 text-[#53575A] items-center">
                    <p>{jobDetails && jobDetails.job.jobDescription}</p>
                  </div>
                </div>
                {/* <ApplyJobModal jobId={jobDetails && jobDetails.id} /> */}
                <Link
                  to="/apply-job"
                  className="inline-flex w-1/2 mt-4 relative cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#4187ED] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent"
                >
                  Apply Now
                </Link>
              </div>
              <div className="flex flex-col mt-16 rounded-3xl bg-white p-8">
                <h2 className="bg-gradient-to-r text-2xl font-semibold text-[#4187ED]">
                  Important Safety Tips
                </h2>
                <p className="mt-4 text-[15px]">
                  Do not pay money to anyone or any official of directwayz for a
                  job
                </p>
                <div className="mt-6 grid flex-1 place-items-center">
                  <svg
                    className="h-40 w-40"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M59.2425 89.2988C58.1984 89.2917 57.1792 89.1106 56.1849 88.7555C55.1906 88.3932 54.2957 87.8073 53.5003 86.9976C52.7048 86.1809 52.0727 85.0978 51.604 83.7484C51.1352 82.3918 50.9044 80.7121 50.9115 78.7093C50.9115 76.8414 51.1104 75.1759 51.5081 73.7128C51.9058 72.2498 52.4775 71.014 53.2233 70.0055C53.969 68.9898 54.8675 68.2157 55.9186 67.683C56.9768 67.1503 58.1594 66.884 59.4662 66.884C60.8369 66.884 62.0514 67.1539 63.1096 67.6937C64.175 68.2334 65.0344 68.9721 65.6878 69.9096C66.3412 70.84 66.746 71.8911 66.9023 73.063H63.0138C62.8149 72.2249 62.4065 71.5573 61.7886 71.0601C61.1778 70.5559 60.4037 70.3038 59.4662 70.3038C57.9534 70.3038 56.7886 70.9607 55.9719 72.2746C55.1622 73.5886 54.7538 75.3925 54.7467 77.6866H54.8959C55.2439 77.0616 55.6949 76.5253 56.2488 76.0779C56.8028 75.6305 57.4278 75.286 58.1238 75.0445C58.827 74.7959 59.5692 74.6717 60.3504 74.6717C61.6288 74.6717 62.7758 74.9771 63.7915 75.5878C64.8142 76.1986 65.6238 77.0403 66.2204 78.1127C66.817 79.178 67.1118 80.3996 67.1047 81.7775C67.1118 83.2121 66.7851 84.5012 66.1246 85.6447C65.464 86.781 64.5443 87.6759 63.3653 88.3293C62.1863 88.9827 60.8121 89.3059 59.2425 89.2988ZM59.2211 86.1028C59.9953 86.1028 60.6878 85.9146 61.2986 85.5381C61.9094 85.1617 62.3923 84.6539 62.7474 84.0147C63.1025 83.3755 63.2765 82.6582 63.2694 81.8627C63.2765 81.0815 63.1061 80.3748 62.7581 79.7427C62.4172 79.1106 61.9449 78.6099 61.3412 78.2405C60.7375 77.8712 60.0486 77.6866 59.2744 77.6866C58.6991 77.6866 58.1629 77.7967 57.6657 78.0168C57.1686 78.237 56.7354 78.5424 56.366 78.933C55.9967 79.3165 55.7055 79.764 55.4925 80.2753C55.2865 80.7796 55.18 81.3194 55.1729 81.8947C55.18 82.6546 55.3575 83.3542 55.7055 83.9934C56.0535 84.6326 56.5329 85.144 57.1437 85.5275C57.7545 85.911 58.447 86.1028 59.2211 86.1028ZM71.5045 89.0005L80.7836 70.634V70.4849H70.0131V67.1823H84.8746V70.5594L75.6061 89.0005H71.5045ZM99.9784 84.9096V83.759C99.9784 82.9138 100.156 82.1361 100.511 81.4259C100.873 80.7157 101.399 80.144 102.088 79.7107C102.777 79.2775 103.611 79.0609 104.591 79.0609C105.6 79.0609 106.445 79.2775 107.127 79.7107C107.809 80.1369 108.324 80.705 108.672 81.4153C109.027 82.1255 109.204 82.9067 109.204 83.759V84.9096C109.204 85.7547 109.027 86.5324 108.672 87.2427C108.316 87.9529 107.794 88.5246 107.106 88.9579C106.424 89.3911 105.586 89.6077 104.591 89.6077C103.597 89.6077 102.755 89.3911 102.066 88.9579C101.378 88.5246 100.856 87.9529 100.5 87.2427C100.152 86.5324 99.9784 85.7547 99.9784 84.9096ZM102.759 83.759V84.9096C102.759 85.4707 102.894 85.9856 103.164 86.4543C103.434 86.9231 103.91 87.1574 104.591 87.1574C105.28 87.1574 105.753 86.9266 106.008 86.465C106.271 85.9962 106.402 85.4778 106.402 84.9096V83.759C106.402 83.1908 106.278 82.6724 106.03 82.2036C105.781 81.7278 105.302 81.4898 104.591 81.4898C103.924 81.4898 103.451 81.7278 103.174 82.2036C102.897 82.6724 102.759 83.1908 102.759 83.759ZM88.8882 72.4238V71.2732C88.8882 70.4209 89.0693 69.6397 89.4316 68.9295C89.7938 68.2192 90.3193 67.6511 91.0083 67.2249C91.6972 66.7917 92.5317 66.5751 93.5118 66.5751C94.5132 66.5751 95.3548 66.7917 96.0367 67.2249C96.7256 67.6511 97.2441 68.2192 97.5921 68.9295C97.9401 69.6397 98.1141 70.4209 98.1141 71.2732V72.4238C98.1141 73.2761 97.9365 74.0573 97.5814 74.7675C97.2334 75.4707 96.7149 76.0353 96.026 76.4614C95.3371 76.8876 94.499 77.1006 93.5118 77.1006C92.5104 77.1006 91.6652 76.8876 90.9763 76.4614C90.2945 76.0353 89.776 75.4671 89.4209 74.7569C89.0658 74.0467 88.8882 73.269 88.8882 72.4238ZM91.6901 71.2732V72.4238C91.6901 72.992 91.8215 73.5104 92.0843 73.9792C92.3541 74.4408 92.83 74.6717 93.5118 74.6717C94.1936 74.6717 94.6624 74.4408 94.9181 73.9792C95.1808 73.5104 95.3122 72.992 95.3122 72.4238V71.2732C95.3122 70.705 95.1879 70.1866 94.9394 69.7178C94.6908 69.242 94.2149 69.004 93.5118 69.004C92.8371 69.004 92.3648 69.242 92.0949 69.7178C91.825 70.1937 91.6901 70.7121 91.6901 71.2732ZM90.1027 89.0005L105.103 67.1823H107.766L92.7661 89.0005H90.1027Z"
                      fill="white"
                    />
                    <path
                      d="M160 80.0005C160 124.183 124.183 160 80 160C35.8172 160 0 124.183 0 80.0005C0 35.8177 35.8172 0.000488281 80 0.000488281C124.183 0.000488281 160 35.8177 160 80.0005ZM8.82417 80.0005C8.82417 119.31 40.6907 151.176 80 151.176C119.309 151.176 151.176 119.31 151.176 80.0005C151.176 40.6912 119.309 8.82465 80 8.82465C40.6907 8.82465 8.82417 40.6912 8.82417 80.0005Z"
                      fill="#424867"
                    />
                    <path
                      d="M80 4.41257C80 1.97585 81.977 -0.0121908 84.41 0.122117C96.99 0.816575 109.251 4.47443 120.181 10.8234C132.386 17.9124 142.498 28.104 149.491 40.3638C156.483 52.6236 160.108 66.5153 159.998 80.6288C159.887 94.7423 156.044 108.575 148.859 120.724C141.675 132.872 131.404 142.904 119.09 149.8C106.775 156.697 92.8556 160.212 78.7434 159.991C64.6312 159.769 50.8288 155.818 38.7371 148.538C27.9076 142.018 18.7956 133.036 12.1266 122.347C10.8368 120.279 11.6265 117.589 13.7618 116.415C15.8971 115.241 18.5683 116.029 19.8722 118.088C25.7816 127.417 33.793 135.261 43.2885 140.978C54.0465 147.455 66.3264 150.97 78.882 151.168C91.4376 151.365 103.822 148.237 114.778 142.101C125.734 135.965 134.872 127.04 141.264 116.232C147.656 105.423 151.075 93.1163 151.174 80.5595C151.272 68.0027 148.047 55.6434 141.826 44.7358C135.604 33.8283 126.608 24.7608 115.749 18.4538C106.165 12.8869 95.4315 9.64543 84.4094 8.96135C81.9774 8.81041 80 6.84929 80 4.41257Z"
                      fill="url(#paint0_linear_2756_51790)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2756_51790"
                        x1="0"
                        y1="160"
                        x2="0.127962"
                        y2="-0.126884"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F974EB" />
                        <stop offset="1" stopColor="#9F7CE0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default JobDetails;
