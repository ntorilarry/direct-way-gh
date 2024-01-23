import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import WithAuth from "../auth/utils/WithAuth";

const ApplyJob = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full py-24 md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form method="POST" action="https://herotofu.com/start">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  required
                  name="name"
                  type="text"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="joe.bloggs@example.com"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">
                  Tell us more about yourself
                </span>
                <textarea
                  name="message"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="What motivates you?"
                ></textarea>
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Your CV</span>
                <input
                  required
                  name="cv"
                  type="file"
                  className="block w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <div className="mb-6">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        name="remote"
                        value="yes"
                        type="radio"
                        className="text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                        checked
                      />
                      <span className="ml-2">You'd like to work remotely</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        name="re"
                        value="no"
                        type="radio"
                        className="text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2">You'd prefer to work onsite</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WithAuth(ApplyJob);
