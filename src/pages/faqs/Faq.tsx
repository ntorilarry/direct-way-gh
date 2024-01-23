import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

function Faq() {
  return (
    <div>
      <Navbar />
      <section className="py-28 bg-white">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Questions & Answers
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed text-gray-600">
              Welcome to our website's FAQs! We're thrilled to have you here.
              Below are some frequently asked questions about our platform,
              where we connect individuals with professionals, offer job
              opportunities, and allow individuals to set prices for services:
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">1</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  What is your website all about?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  Our website is a platform that facilitates connections between
                  individuals seeking professional services and skilled
                  professionals. It's designed to make it easy for users to find
                  the right professionals for their specific needs and set
                  competitive prices for their services.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">2</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  How does the platform work?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  As a user looking for professional services, you can browse
                  through our database of skilled professionals, view their
                  profiles, and select the ones that best match your
                  requirements. You can then post a job listing, and interested
                  professionals will have the opportunity to apply.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">3</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  How do I become a professional on your platform?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  To become a professional on our website, you need to create a
                  profile detailing your skills, experience, qualifications, and
                  services offered. Our team will review your application to
                  ensure it meets our quality standards, and once approved,
                  you'll be able to apply for jobs posted by users.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">4</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  How do professionals set their prices for services?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  Our platform allows professionals to set their own prices for
                  the services they offer. During the profile creation process,
                  you'll have the option to specify your rates based on various
                  factors such as the type of service, complexity, and time
                  required.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">5</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  Can users negotiate prices with professionals?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  Yes, users can negotiate prices with professionals, but it
                  ultimately depends on the preferences of both parties. We
                  encourage open communication to reach a mutual agreement that
                  satisfies both the user and the professional.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">6</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  Is there a fee for using the platform?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  As a user looking for professional services, signing up and
                  browsing through profiles is free. However, when you decide to
                  hire a professional, there might be a nominal service fee
                  associated with the transaction to support the maintenance and
                  improvement of the platform.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">7</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  How do you ensure the quality of professionals on your
                  platform?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  We take quality seriously and have a rigorous vetting process
                  for professionals applying to join our platform. We verify
                  their qualifications, credentials, and work history to ensure
                  they meet our standards of excellence.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">8</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  Can users leave reviews and ratings for professionals?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  Yes, users can provide feedback and leave reviews for
                  professionals they've worked with. This feature helps maintain
                  transparency and accountability within the community, aiding
                  others in making informed decisions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">9</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  What measures do you have in place for user safety and data
                  security?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  We prioritize user safety and data security. Our platform uses
                  advanced encryption techniques to protect user data, and we
                  have strict guidelines to prevent fraudulent activities. User
                  identities are verified to foster a trustworthy environment.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">10</span>
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  How can I get in touch with customer support if I have further
                  questions or issues?
                </p>
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  If you have any questions, concerns, or need assistance, you
                  can reach out to our customer support team through the
                  "Contact Us" section on our website or via email or phone,
                  which will be provided on the platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Didn’t find the answer you are looking for?{" "}
                <Link
                  to="/contact-us"
                  title=""
                  className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
                >
                  Contact our support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Faq;
