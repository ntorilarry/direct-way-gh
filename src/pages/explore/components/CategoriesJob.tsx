import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import CalltoAction from "./CalltoAction";
import axios from "axios";
import Pagination from "../../jobs/components/Pagination";
import { Link, useLocation } from "react-router-dom";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import Loader from "../../../shared/Loader";
import queryString from "query-string";
import Navbar from "../../../shared/Navbar";
import Footer from "../../../shared/Footer";
import { GoBriefcase } from "react-icons/go";
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

interface categoryType {
  id: string;
  name: string;
}

const filters = [
  {
    id: "category",
    name: "Category",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoriesJob() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [categories, setCategories] = useState<categoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/jobs/category`
    );
    setCategories(response.data.data);

    const categoryIDs = response.data.data.map((category) => category.id);
    console.log("categoryIDs", categoryIDs);

    categoryIDs.forEach((categoryID) => {
      console.log("Processing category ID:", categoryID);
    });

    setLoading(false);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const [alljobs, setAllJobs] = useState<dataType[]>([]);
  const [page, setPage] = useState(1);
  const limit = 9;
  const [totalItems, setTotalItems] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const fetchAllJob = async (page: number) => {
    setLoading(true);

    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/jobs?page=${page}&limit=${limit}&categories=${selectedCategory}`
    );
    setAllJobs(response.data.data.results);
    setTotalItems(response.data.data.totalCount);
    setLoading(false);
  };
  useEffect(() => {
    fetchAllJob(page);
  }, [page, selectedCategory]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    // Fetch jobs when the selectedCategory changes
    if (selectedCategory) {
      setSelectedIds([selectedCategory]);
    } else {
      setSelectedIds([]);
    }

    fetchAllJob(page);
  }, [page, selectedCategory]);

  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
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
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>

                      {filters.map((section) => (
                        <Disclosure
                          defaultOpen
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {categories.map((category) => (
                                    <div
                                      key={category.id}
                                      className="flex items-center"
                                    >
                                      <Link
                                        to={`/categories-jobs?category=${category.id}`}
                                      >
                                        <input
                                          checked={selectedIds.includes(
                                            category.id
                                          )}
                                          type="checkbox"
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                          htmlFor={category.id}
                                          className="ml-3 min-w-0 flex-1 text-sm text-gray-500"
                                        >
                                          {category.name}
                                        </label>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl pt-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
              <Link
                to="/jobs"
                className="text-3xl font-semibold tracking-tight text-gray-900"
              >
                All Jobs
              </Link>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>

                  {filters.map((section) => (
                    <Disclosure
                      defaultOpen
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {categories.map((category) => (
                                <div
                                  key={category.id}
                                  className="flex items-center"
                                >
                                  <Link
                                    to={`/categories-jobs?category=${category.id}`}
                                  >
                                    <input
                                      checked={selectedIds.includes(
                                        category.id
                                      )}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={category.id}
                                      className="ml-3 min-w-0 flex-1 text-sm text-gray-500"
                                    >
                                      {category.name}
                                    </label>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div>
                    {loading ? (
                      <Loader />
                    ) : (
                      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-0">
                        <div className=" py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-0">
                          <div className="grid gap-2 row-gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {alljobs.length === 0 ? (
                              <p>No data available.</p>
                            ) : (
                              alljobs.map((item) => (
                                <div
                                  key={item.id}
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
                                        {new Date(
                                          item.createdAt
                                        ).toLocaleDateString()}
                                      </h1>
                                    </div>
                                    <div className="flex text-[#53575A] py-2 items-center">
                                      <FaGamepad className="text-[16px] " />
                                      <hr className=" w-full"></hr>
                                    </div>
                                    <div className="flex text-[14px] leading-4 text-[#53575A] items-center">
                                      <p>
                                        {item.jobDescription.substring(0, 100)}
                                        ...
                                      </p>
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
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    <Pagination
                      totalItems={totalItems}
                      page={page}
                      limit={limit}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        {/* <CalltoAction /> */}
      </div>
      <Footer />
    </div>
  );
}
