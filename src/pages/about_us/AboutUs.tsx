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
      <div className="w-full overflow-y-auto scrollbar">
        <div className="mx-auto max-w-6xl px-6 pb-24 md:pt-8 md:pb-32 xl:px-1.5">
          <main className="mt-4 md:mt-20">
            {/* Header section */}
            <header className="flex flex-col gap-6 sm:gap-12">
              {/* Hero image */}
              <div className="relative">
                <img src={Profess3} alt="" className=" w-full  rounded-xl" />
              </div>

              <div className="mx-auto max-w-5xl text-center sm:px-8">
                <h1 className="text-xl font-semibold text-heading sm:text-5xl">
                  Welcome to DirectWayz GH - Where Professionals Meet Needs!
                </h1>
              </div>
            </header>

            {/* Article content */}
            <div className="prose prose-saas mx-auto mt-6 dark:prose-invert sm:prose-lg sm:prose-saas-lg sm:mt-16">
              <h2 className="text-lg font-semibold py-2">Professionals</h2>
              <p className="py-2">
                Are you searching for the perfect professional to meet your
                specific needs? Look no further! Our innovative platform
                connects individuals like you with a wide range of skilled
                professionals, making it easier than ever to find the perfect
                match for your requirements. Whether you're seeking a
                contractor, consultant, therapist, or any other expert, we have
                the solution for you.
              </p>
              <p className="py-2">
                Finding the right and trusted professional with good work rates
                can be a daunting task, but we've simplified the process making
                your dreams possible! Your price, your project, your way! Our
                user-friendly website provides a seamless experience, allowing
                you to effortlessly browse through a diverse pool of talented
                professionals who are ready to assist you, just name your price,
                negotiate the price, and you’re good to go!
              </p>
              <h2 className="text-lg font-semibold py-2">
                Individuals in need of professional help
              </h2>
              <p className="py-2">
                Are you a professional looking to showcase your skills and
                expertise to individuals in need? Look no further! Our platform
                offers an exceptional opportunity to expand your client base and
                connect with those seeking your specific services. Create a
                captivating profile, highlight your experience, and let
                potential clients know why you're the perfect fit for their
                needs.
              </p>
              <p className="py-2">
                At DirectWayz GH, we believe in empowering individuals and
                professionals alike. Our platform fosters a vibrant community,
                encouraging meaningful connections and mutually beneficial
                collaborations. Whether you're a professional looking to take
                your career to new heights or an individual seeking exceptional
                services, we've got you covered.
              </p>
              <section className="p-6 md:p-20">
                <div className="mx-auto w-full max-w-6xl">
                  <h2 className="mx-auto mb-10 text-center text-3xl font-semibold tracking-tight text-heading md:max-w-2xl md:text-4xl">
                    Why choose DirectWayz GH?
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-3xl bg-[#F6F6FA] p-5 md:px-8 md:py-6">
                      <span className="leading-sm inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 py-0.5 text-xs font-semibold uppercase text-blue-600 shadow-sm">
                        <TbSettingsCog className="mr-1 h-5 w-5" />
                        Efficiency
                      </span>

                      <p className="mt-4 text-sm md:text-base text-text">
                        We understand the value of your time. Our advanced
                        search and filtering tools allow you to quickly narrow
                        down your options, saving you hours of endless scrolling
                        and frustration.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-[#F6F6FA] p-5 md:px-8 md:py-6">
                      <span className="leading-sm inline-flex items-center rounded-full border-2 border-purple-200 bg-purple-200 px-2 py-0.5 text-xs font-semibold uppercase text-purple-600 shadow-sm">
                        <HiBadgeCheck className="mr-1 h-5 w-5" />
                        Quality
                      </span>

                      <p className="mt-4 text-sm md:text-base text-text">
                        We strive for excellence, which is why we handpick
                        professionals who possess the right expertise,
                        qualifications, and track record of success. You can
                        trust that you'll be working with the best in the field.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-[#F6F6FA] p-5 md:px-8 md:py-6">
                      <span className="leading-sm inline-flex items-center rounded-full border-2 border-green-200 bg-green-200 px-2 py-0.5 text-xs font-semibold uppercase text-green-600 shadow-sm">
                        <MdOutlineManageSearch className="mr-1 h-5 w-5" />
                        Transparency
                      </span>

                      <p className="mt-4 text-sm md:text-base text-text">
                        We believe in transparency and accountability. Our
                        platform provides comprehensive profiles, client
                        reviews, and ratings, giving you valuable insights to
                        make informed decisions.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-[#F6F6FA] p-5 md:px-8 md:py-6">
                      <span className="leading-sm inline-flex items-center rounded-full border-2 border-pink-200 bg-pink-200 px-2 py-0.5 text-xs font-semibold uppercase text-pink-600 shadow-sm">
                        <CgCommunity className="mr-1 h-5 w-5" />
                        Community
                      </span>

                      <p className="mt-4 text-sm md:text-base text-text">
                        Join a thriving community of professionals and
                        individuals with diverse backgrounds and interests.
                        Connect, collaborate, and grow together in an
                        environment built on respect and support.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <p className="py-2">
                Ready to find the perfect professional or showcase your skills
                to a wider audience? Join us today and unlock a world of
                opportunities. Whether you're in need or have something
                incredible to offer, DirectWayz GH is the ultimate destination
                to connect and make a difference. Sign up now and let us help
                you turn your needs into solutions or your expertise into
                success!
              </p>
              <h1 className="text-xl font-semibold text-center text-heading sm:text-5xl">
                For professionals.
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-text sm:mt-6 sm:text-lg">
                Welcome to DirectWayz GH - Where Professions Connect with
                Opportunities!
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
