import axios from "axios";
import React, { useEffect, useState } from "react";
import WithAuth from "../auth/utils/WithAuth";
import toast from "react-hot-toast";
import SuccessToast from "../../shared/SuccessToast";
import ErrorToast from "../../shared/ErrorToast";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

interface categoryType {
  id: string;
  name: string;
}

function PostJob(props) {
  const [getcategories, setGetCategories] = useState<categoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/jobs/category`
    );
    setGetCategories(response.data.data);
    console.log("categories", response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [category, setCategory] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [jobType, setJobType] = useState("");

  const [successmodalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errormodalIsOpen, setErrorModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const access_token = localStorage.getItem("token");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      title,
      companyName,
      location,
      minSalary,
      maxSalary,
      jobDescription,
      category,
      minExperience,
      jobType
    );
    setTitle("");
    setCompanyName("");
    setLocation("");
    setMinSalary("");
    setMaxSalary("");
    setJobDescription("");
    setCategory("");
    setMinExperience("");
    setJobType("");
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/jobs`,
      data: JSON.stringify({
        title: title,
        companyName: companyName,
        location: location,
        minSalary: parseFloat(minSalary),
        maxSalary: parseFloat(maxSalary),
        jobDescription: jobDescription,
        category: category,
        minExperience: parseFloat(minExperience),
        jobType: jobType,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      validateStatus: () => true,
    })
      .then((response) => {
        console.log("lmlml", response.data);
        // toast.success("Job Post Successful");
        if (response.data.code === 201) {
          setModalMessage(response.data.message);
          setSuccessModalIsOpen(true);
        } else {
          setModalMessage(response.data.message);
          setErrorModalIsOpen(true);
        }
        // navigate("/");
      })
      .catch((err) => {
        setModalMessage(err);
        setErrorModalIsOpen(true);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#F6F6FA] pt-32 pb-16">
        <div className="relative w-auto  mx-auto max-w-4xl">
          {/*content*/}
          <div className="relative rounded-xl flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-center p-8">
              <h3 className="text-3xl text-black font-semibold">Post a job</h3>
            </div>
            <div className="relative px-4 sm:px-10 flex-auto">
              <div className="flex items-center justify-center ">
                <div className="mx-auto w-full max-w-4xl ">
                  <form onSubmit={handleSubmit}>
                    <div className="-mx-3 flex justify-center flex-wrap">
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="job-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="job-name"
                            id="job-name"
                            placeholder="eg. Cleaners needed"
                            className="w-full placeholder:font-normal bg-[#EEEEEE] py-4 px-6 rounded-xl text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Person/Company Name
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            placeholder="ABC Enterprise"
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Category
                          </label>

                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1]"
                          >
                            <option value="" disabled>
                              Select Category
                            </option>
                            {getcategories.map((item, key) => (
                              <option key={key} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Location
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            placeholder="Trinity East Legon"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Minimum Experience
                          </label>
                          <input
                            type="number"
                            name="company-name"
                            id="company-name"
                            placeholder="3"
                            value={minExperience}
                            onChange={(e) => setMinExperience(e.target.value)}
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Minimum Salary(GHS)
                          </label>
                          <input
                            type="number"
                            name="company-name"
                            id="company-name"
                            placeholder="200"
                            value={minSalary}
                            onChange={(e) => setMinSalary(e.target.value)}
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Maximum Salary(GHS)
                          </label>
                          <input
                            type="number"
                            name="company-name"
                            id="company-name"
                            placeholder="2000"
                            value={maxSalary}
                            onChange={(e) => setMaxSalary(e.target.value)}
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[50%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Job Type
                          </label>
                          <select
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            className="w-full bg-[#EEEEEE] rounded-xl placeholder:font-normal py-4 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1]"
                          >
                            <option value="" disabled>
                              Select Job Type
                            </option>
                            <option value="Full Time">Full Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Remote">Remote</option>
                            <option value="Remote">Hybrid</option>
                            <option value="Internship">Internship</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[100%]">
                        <div className="mb-5">
                          <label
                            htmlFor="company-name"
                            className="block text-sm py-2 font-medium text-heading"
                          >
                            Job Description
                          </label>
                          <textarea
                            className="w-full bg-[#EEEEEE] h-48 rounded-xl placeholder:font-normal py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                            placeholder="Tell something about yourself!"
                            id="textarea"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-[100%]">
                        <button
                          type="submit"
                          className="block w-full rounded-xl bg-[#4187ED] px-4 py-4 mt-4 mb-10 text-sm font-bold text-white  hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                        >
                          Post a job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <SuccessToast
            isOpen={successmodalIsOpen}
            message={modalMessage}
            onRequestClose={() => setSuccessModalIsOpen(false)}
          />
          <ErrorToast
            isOpen={errormodalIsOpen}
            message={modalMessage}
            onRequestClose={() => setErrorModalIsOpen(false)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WithAuth(PostJob);
