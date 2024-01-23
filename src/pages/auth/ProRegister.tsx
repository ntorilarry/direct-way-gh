import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

function ProRegister() {
  return (
    <div>
      <Navbar />
      <div className="relative  overflow-hidden">
        <div className="mx-auto max-w-screen-md pt-28 pb-14 px-4 sm:px-6 md:max-w-screen-xl  lg:py-32 md:px-8">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:leading-tight lg:leading-tight">
              Become a <span className="text-blue-600">Pro</span>
            </h1>
            <p className="my-3 text-sm text-gray-500">
              Are you a professional looking to showcase your skills and
              expertise to individuals in need? Look no further! Create a
              captivating profile, highlight your experience, and let potential
              clients know why you're the perfect fit for their needs.
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="hs-hero-name-2"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Full name</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-name-2"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Full name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hs-hero-email-2"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-email-2"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hs-hero-email-2"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Categories</span>
                </label>
                <select className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option value="64b2c464456c908e2784659d">
                    Cleaning Jobs
                  </option>
                  <option value="64b2c4c5456c908e278465a0">
                    Health, Beauty & Fashion
                  </option>
                  <option value="64b2c4ee456c908e278465a2">
                    Computing & IT
                  </option>
                  <option value="64b2c506456c908e278465a4">
                    Photography & Videography
                  </option>
                  <option value="64b2c51d456c908e278465a6">
                    Drivers. Retail & Sales
                  </option>
                  <option value="64b2c529456c908e278465a8">Electrician</option>
                  <option value="64b2c533456c908e278465aa">
                    Carpentry & Construction
                  </option>
                  <option value="64b2c541456c908e278465ac">Mechanics</option>
                  <option value="64b2c553456c908e278465ae">
                    Shipping & Logistics
                  </option>
                  <option value="64b2c56a456c908e278465b0">
                    Hospitality & Hotel
                  </option>
                  <option value="64b2c57c456c908e278465b2">
                    Enforcement & Security
                  </option>
                  <option value="64b2c593e4703e84268b87f1">Others</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hs-hero-email-2"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Phone Number</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-email-2"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hs-hero-password-2"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Password</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-password-2"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Password"
                />
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Become a Pro
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ProRegister;
