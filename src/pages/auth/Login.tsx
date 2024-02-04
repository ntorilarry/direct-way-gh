import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorToast from "../../shared/ErrorToast";
import SuccessToast from "../../shared/SuccessToast";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { ThreeDots } from "react-loader-spinner";
import AuthContext from "./utils/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [successmodalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errormodalIsOpen, setErrorModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(username, password);
    setUsername("");
    setPassword("");
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/auth/login`,
      data: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: () => true,
    })
      .then((response) => {
        setLoading(false);
        console.log("login", response.data);
        if (response.data.code === 200) {
          localStorage.setItem("token", response.data.data.token);
          console.log("token", response.data.data.token);
          authContext.login(response.data.data.user.id);
          console.log("user login id", response.data.data.user.id);
          navigate("/");
        } else {
          setModalMessage("Invalid email or password");
          setErrorModalIsOpen(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("AXIOS ERROR: ", error);
        setModalMessage(error.message);
        setErrorModalIsOpen(true);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#F6F6FA]">
        <div className="flex flex-col justify-center py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
            <p className="mt-6 text-center text-sm text-text">
              No account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#4187ED] hover:text-primary-accent"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <h1 className="text-center text-3xl font-semibold text-heading">
                Welcome Back!
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
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
                    required
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/forget-password"
                    className="text-sm font-medium text-[#4187ED] hover:text-primary-accent"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#4187ED] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                  disabled={loading}
                >
                  {loading ? (
                    <ThreeDots color="#FFF" height={20} width={20} />
                  ) : (
                    "Login"
                  )}
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

export default Login;
