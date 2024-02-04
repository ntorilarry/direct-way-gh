import { Fragment, useState, useContext } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo1 from "../assets/icons/Logo1.png";
import { Link } from "react-router-dom";

import AuthContext from "../pages/auth/utils/AuthContext";
import ProfileNav from "../pages/profile/ProfileNav";

const navigation = {
  pages: [
    { name: "All Jobs", href: "/jobs" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ],
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const { token } = useContext(AuthContext);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to="/post-job"
                      className="-m-2 block p-2 font-medium text-gray-900 "
                    >
                      Post a Job
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to="/pro/login"
                      className="-m-2 block p-2 font-medium text-gray-900 "
                    >
                      Sign in as pro
                    </Link>
                    <Link
                      to="/pro/register"
                      className="-m-2 block p-2 font-medium text-gray-900 "
                    >
                      Register as pro
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="bg-white fixed z-10 py-2 w-full shadow-md">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <img className="h-14 w-auto" src={Logo1} alt="" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    to="/jobs"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Services
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Blog
                  </Link>

                  <Popover className="relative flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-800">
                      Help Center
                      <ChevronDownIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-40 overflow-hidden  bg-white shadow-md">
                        <div className="p-2">
                          <div className="group relative flex items-center gap-x-6  p-2 text-sm leading-6 ">
                            <div className="flex-auto gap-y-6">
                              <Link
                                to="/faqs"
                                className="block font-semibold text-gray-900 p-2 hover:bg-gray-50"
                              >
                                FAQ
                              </Link>
                              <Link
                                to="/privacy-policy"
                                className="block font-semibold text-gray-900 p-2 hover:bg-gray-50"
                              >
                                Privacy Policy
                              </Link>
                              <Link
                                to="/contact-us"
                                className="block font-semibold text-gray-900 p-2 hover:bg-gray-50"
                              >
                                Contact Us
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Popover className="relative flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 hover:text-gray-800">
                      Become a Pro
                      <ChevronDownIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-40 overflow-hidden  bg-white shadow-md">
                        <div className="p-2">
                          <div className="group relative flex items-center gap-x-6  p-2 text-sm leading-6 ">
                            <div className="flex-auto gap-y-6">
                              <Link
                                to="/pro/login"
                                className="block font-normal text-gray-900 p-2 hover:bg-gray-50"
                              >
                                Sign in as pro
                              </Link>
                              <Link
                                to="/pro/register"
                                className="block font-normal text-gray-900 p-2 hover:bg-gray-50"
                              >
                                Register as pro
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  {!token ? (
                    <Link
                      to="/login"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                  ) : (
                    <ProfileNav />
                  )}

                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    to="/post-job"
                    className="text-sm font-medium bg-[#4187ED] p-2 text-white rounded"
                  >
                    Post a Job
                  </Link>
                </div>

                {/* Cart */}
                <div className="lg:hidden">
                  {!token ? (
                    <Link
                      to="/login"
                      className="-m-2 block rounded-md bg-[#4187ED] p-2 font-medium text-white"
                    >
                      Sign in
                    </Link>
                  ) : (
                    <ProfileNav />
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
