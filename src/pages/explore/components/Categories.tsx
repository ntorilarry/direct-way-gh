import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../shared/Loader";
import { Link } from "react-router-dom";

interface dataType {
  id: string;
  name: string;
  categoryImage: string;
  totalJobOpenings: number;
}

export const Categories = () => {
  const [category, setCategory] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/jobs/category`
    );
    setCategory(response.data.data);
    console.log("categories", response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="max-w-lg my-2 text-center text-3xl font-semibold leading-none tracking-tight text-gray-900 md:mx-auto">
        Explore our Job Categories
      </h1>
      <p className="text-center text-sm text-gray-700 py-2 mb-8">
        Get started by looking at our job categories. Hundreds of new jobs
        everyday!
      </p>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {category.map((item, key) => (
            <Link
              key={key}
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
              to={`/categories-jobs?category=${item.id}`}
              state={{ categoryName: item.name, categoryId: item.id }}
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.totalJobOpenings} job positions
                    </p>
                  </div>
                  <div className="pl-3">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
