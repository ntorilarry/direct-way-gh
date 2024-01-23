import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/hero-img2.webp";
import { TbSettingsCog } from "react-icons/tb";
import { HiBadgeCheck } from "react-icons/hi";
import { MdOutlineManageSearch } from "react-icons/md";
import Profess2 from "../../assets/images/proffesionalism2.webp";
import Profess3 from "../../assets/images/proffesionalism3.webp";
import { CgCommunity } from "react-icons/cg";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

function AboutUs() {
  return (
    <div>
      <Navbar />
      {/* hero */}
      <section className="bg-white bg-opacity-30 pt-24 pb-10 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="">
              {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A social media for learners
              </p> */}
              <h1 className="mt-4 text-4xl text-center lg:text-left font-semibold text-black lg:mt-8 sm:text-4xl lg:text-6xl ">
                Welcome to DirectWayz GH
              </h1>
              <p className="mt-4 text-base text-center lg:text-left text-black lg:mt-8 sm:text-xl">
                Where Professionals Meet Needs!
              </p>
              <div className="grid lg:block">
                <Link
                  to="/"
                  className="relative flex-auto mt-4 lg:mt-8 mx-auto inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#4187ED] transition duration-300 ease-out border-2 border-[#4187ED] rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4187ED] group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#4187ED] transition-all duration-300 transform group-hover:translate-x-full ease">
                    Explore
                  </span>
                  <span className="relative invisible">Getting Started</span>
                </Link>
              </div>
            </div>

            <div>
              <img className="w-full lg:w-[80%] mx-auto" src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="bg-[#F6F6FA] p-6 md:p-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mx-auto mb-10 text-center text-3xl font-semibold tracking-tight text-heading md:max-w-2xl md:text-4xl">
            Why choose DirectWayz GH?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 md:px-8 md:py-6">
              <span className="leading-sm inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 py-0.5 text-xs font-semibold uppercase text-blue-600 shadow-sm">
                <TbSettingsCog className="mr-1 h-5 w-5" />
                Efficiency
              </span>

              <p className="mt-4 text-sm md:text-base text-text">
                We understand the value of your time. Our advanced search and
                filtering tools allow you to quickly narrow down your options,
                saving you hours of endless scrolling and frustration.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 md:px-8 md:py-6">
              <span className="leading-sm inline-flex items-center rounded-full border-2 border-purple-200 bg-purple-200 px-2 py-0.5 text-xs font-semibold uppercase text-purple-600 shadow-sm">
                <HiBadgeCheck className="mr-1 h-5 w-5" />
                Quality
              </span>

              <p className="mt-4 text-sm md:text-base text-text">
                We strive for excellence, which is why we handpick professionals
                who possess the right expertise, qualifications, and track
                record of success. You can trust that you'll be working with the
                best in the field.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 md:px-8 md:py-6">
              <span className="leading-sm inline-flex items-center rounded-full border-2 border-green-200 bg-green-200 px-2 py-0.5 text-xs font-semibold uppercase text-green-600 shadow-sm">
                <MdOutlineManageSearch className="mr-1 h-5 w-5" />
                Transparency
              </span>

              <p className="mt-4 text-sm md:text-base text-text">
                We believe in transparency and accountability. Our platform
                provides comprehensive profiles, client reviews, and ratings,
                giving you valuable insights to make informed decisions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 md:px-8 md:py-6">
              <span className="leading-sm inline-flex items-center rounded-full border-2 border-pink-200 bg-pink-200 px-2 py-0.5 text-xs font-semibold uppercase text-pink-600 shadow-sm">
                <CgCommunity className="mr-1 h-5 w-5" />
                Community
              </span>

              <p className="mt-4 text-sm md:text-base text-text">
                Join a thriving community of professionals and individuals with
                diverse backgrounds and interests. Connect, collaborate, and
                grow together in an environment built on respect and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:py-24">
        <div className="mx-auto max-w-6xl space-y-24">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse">
            <div className="max-w-xl space-y-6 text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-heading lg:text-4xl">
                Professionals
              </h3>
              <p className="text-sm md:text-base">
                Are you searching for the perfect professional to meet your
                specific needs? Look no further! Our innovative platform
                connects individuals like you with a wide range of skilled
                professionals, making it easier than ever to find the perfect
                match for your requirements. Whether you're seeking a
                contractor, consultant, therapist, or any other expert, we have
                the solution for you.
              </p>
              <p className="text-sm md:text-base">
                Finding the right and trusted professional with good work rates
                can be a daunting task, but we've simplified the process making
                your dreams possible! Your price, your project, your way! Our
                user-friendly website provides a seamless experience, allowing
                you to effortlessly browse through a diverse pool of talented
                professionals who are ready to assist you, just name your price,
                negotiate the price, and you’re good to go!
              </p>
            </div>

            <div className="max-w-lg">
              <img src={Profess2} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row ">
            <div className="max-w-xl space-y-6 text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-heading lg:text-4xl">
                Individuals in need of professional help
              </h3>
              <p className="text-sm md:text-base">
                Are you a professional looking to showcase your skills and
                expertise to individuals in need? Look no further! Our platform
                offers an exceptional opportunity to expand your client base and
                connect with those seeking your specific services. Create a
                captivating profile, highlight your experience, and let
                potential clients know why you're the perfect fit for their
                needs.
              </p>
              <p className="text-sm md:text-base">
                At DirectWayz GH, we believe in empowering individuals and
                professionals alike. Our platform fosters a vibrant community,
                encouraging meaningful connections and mutually beneficial
                collaborations. Whether you're a professional looking to take
                your career to new heights or an individual seeking exceptional
                services, we've got you covered
              </p>
            </div>

            <div className="max-w-lg">
              <img src={Profess3} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 text- mb-2 text-lg text-[#4187ED] hover:text-[#1e215e] rounded-md sm:w-auto sm:mb-0"
            data-primary="green-400"
            data-rounded="rounded-2xl"
            data-primary-reset="{}"
          >
            Get Started
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
