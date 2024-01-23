import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SuccessToast from "../../shared/SuccessToast";
import ErrorToast from "../../shared/ErrorToast";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("EMPLOYEE");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const [successmodalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errormodalIsOpen, setErrorModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSelectChange = (event) => {
    setUserType(event.target.value);
    console.log(event.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, firstName, lastName, phoneNumber, userType);

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      data: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        userType: userType,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: () => true,
    })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.code === 201) {
          setModalMessage(response.data.message);
          setSuccessModalIsOpen(true);
          setTimeout(function () {
            navigate("/login");
          }, 3000);
        } else {
          setModalMessage(response.data.message);
          setErrorModalIsOpen(true);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        toast.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#F6F6FA]">
        <div className="flex flex-col justify-center py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
            <p className="mt-6 text-center text-sm text-text">
              Have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#4187ED] hover:text-primary-accent"
              >
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md md:max-w-3xl">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <h1 className="text-center text-3xl font-normal text-heading">
                Register
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="mt-6 grid gap-4 md:grid-cols-2 items-center">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-heading"
                    >
                      First Name
                    </label>
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-normal text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-heading"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-normal text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-heading"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-normal text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phonenumber"
                      className="block text-sm font-medium text-heading"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      placeholder="+233xxxxxxxxx"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-normal text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="usertype"
                      className="block text-sm font-medium text-heading"
                    >
                      Usertype
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={userType}
                      onChange={handleSelectChange}
                      // onChange={(e) => setUserType(e.target.value)}

                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent py-2.5 pl-4 pr-8 font-medium text-text focus:border-primary disabled:opacity-30 sm:text-sm"
                    >
                      <option value="EMPLOYEE">Employee</option>
                      <option value="EMPLOYER">Employer</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-heading"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-normal text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid mt-6">
                  <button
                    type="submit"
                    className="inline-flex relative cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#4187ED] px-4 py-2.5 text-sm font-normal text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <SuccessToast
            isOpen={successmodalIsOpen}
            message={modalMessage}
            onRequestClose={() => setSuccessModalIsOpen(false)}
          />
          <ErrorToast
            isOpen={errormodalIsOpen}
            message={modalMessage}
            onRequestClose={() => setErrorModalIsOpen(false)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
