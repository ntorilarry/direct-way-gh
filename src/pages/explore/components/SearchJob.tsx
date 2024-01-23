import React, { useEffect, useState } from "react";
import Loader from "../../../shared/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

interface SearchResult {
  _id: string;
  title: string;
}

function SearchJob() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (searchTerm.trim() !== "") {
      const apiUrl = `${
        process.env.REACT_APP_BASE_URL
      }/jobs?search=${searchTerm.toLowerCase()}`;
      axios
        .get(apiUrl)
        .then((response) => setSearchResults(response.data.data.jobs))
        .catch((error) => console.error(error));
      setLoading(false);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="xl:max-w-2xl mx-auto">
      <div className="relative mt-6 group sm:rounded-xl">
        <form>
          <div className="relative flex space-x-3 rounded-full shadow-sm bg-white border-2">
            <div className="flex-[1_0_0%] ">
              <label
                htmlFor="hs-search-article-1"
                className="block text-sm text-gray-700 font-medium"
              >
                <span className="sr-only">Search Jobs</span>
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3 block w-full rounded-full  border-transparent focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search job"
              />
            </div>
          </div>
        </form>

        <ul className="mt-2 z-10 bg-white">
          {searchResults.map((item, key) => (
            <Link
              to={`/job-details/${item._id}`}
              key={key}
              className="my-1 py-2 bg-white border-b rounded-xl text-black flex p-4 border-gray-300"
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchJob;
