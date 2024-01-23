import React from "react";
import { Link } from "react-router-dom";

function CalltoAction() {
  return (
    <div>
      {/* <section className="py-8 px-4 sm:py-10">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center rounded-3xl bg-[#4187ED] bg-opacity-20 py-8 px-6 text-center sm:py-12">
          <div className="mx-auto max-w-3xl ">
            <h2 className="mt-6 text-3xl font-semibold text-heading md:mt-8 md:text-4xl md:leading-tight">
              Join DirectWayz GH
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-normal md:mt-8">
              Unlock a world of endless possibilities by joining DirectWayz GH,
              the leading platform connecting professionals like you with
              diverse work offers from individuals seeking your expertise.
            </p>


            <Link
              to="/contact-us"
              className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#4187ED]  px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80 md:mt-8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
      <section className="px-0 mx-auto">
        <div className="text-white bg-green-800 border-green-800 rounded-none card card-body sm:rounded-lg">
          <div className="flex flex-col items-center justify-between px-1 py-4 lg:flex-row sm:py-3 sm:px-3">
            <p className="mb-6 text-base font-semibold lg:mb-0">
              Sleep peacefully knowing that your website is performing at it’s
              best.
            </p>
            <a
              href="#"
              className="w-full text-green-800 shadow btn btn-white btn-lg sm:w-auto"
            >
              Start for free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalltoAction;
