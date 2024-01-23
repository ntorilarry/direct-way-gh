import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import AuthContext from "../auth/utils/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import WithAuth from "../auth/utils/WithAuth";

function ProfileNav() {
  const { token, logout } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogout = () => {
    //
    // Call the logout function to log the user out
    logout();
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="pl-2 z-90 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-10 h-10 rounded-full justify-center items-center bg-black bg-opacity-20  text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              className="absolute w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
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
        >
          <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={`${
                      active && "bg-violet-500 text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/chats"
                    className={`${
                      active && "bg-violet-500 text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    My Chats
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/myjobs"
                    className={`${
                      active && "bg-violet-500 text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    My Jobs
                  </Link>
                )}
              </Menu.Item>
              {token ? (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${
                        active && "bg-violet-500 text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              ) : (
                <p className="hidden">Please login to see the content.</p>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default WithAuth(ProfileNav);
