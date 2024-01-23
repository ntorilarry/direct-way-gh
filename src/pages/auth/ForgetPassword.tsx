import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessToast from "../../shared/SuccessToast";
import ErrorToast from "../../shared/ErrorToast";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

function FogetPassword() {
  const [email, setEmail] = useState("");
  const access_token = localStorage.getItem("token");
  let navigate = useNavigate();

  const [successmodalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errormodalIsOpen, setErrorModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/auth/request-password-reset`,
      data: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      validateStatus: () => true,
    })
      .then((response) => {
        console.log("lbbjb", response.data);

        setModalMessage(response.data.message);
        setSuccessModalIsOpen(true);
        if (
          response.data.statusCode === 401 ||
          response.status === 500 ||
          response.status === 400
        ) {
          setModalMessage(response.data.message);
          setErrorModalIsOpen(true);
        }
      })
      .catch((error) => {
        console.log("AXIOS ERROR: ", error);
        setModalMessage(error.message);
        setErrorModalIsOpen(true);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#F6F6FA]">
        <div className="flex flex-col justify-center pt-24 pb-14 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <h1 className="text-center text-3xl font-semibold text-heading">
                Forget Password
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col space-y-4"
              >
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
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#4187ED] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Reset
                </button>
              </form>
            </div>
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
      <Footer />
    </div>
  );
}

export default FogetPassword;
