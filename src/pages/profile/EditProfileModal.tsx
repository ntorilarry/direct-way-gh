import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import SuccessToast from "../../shared/SuccessToast";
import ErrorToast from "../../shared/ErrorToast";

interface dataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  userType: string;
  reference: string;
  education: string;
  experience: string;
  summary: string;
  location: string;
  gender: string;
  skills: string[];
}

function EditProfileModal() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  function openEditModal() {
    setIsEditModalOpen(true);
  }

  const [profile, setProfile] = useState<dataType>();
  const [loading, setLoading] = useState(true);
  const access_token = localStorage.getItem("token");

  const [successmodalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errormodalIsOpen, setErrorModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");
  const [gender, setGender] = useState(profile?.gender || "MALE");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [jobTitle, setJobTitle] = useState(profile?.jobTitle || "");
  const [summary, setSummary] = useState(profile?.summary || "");
  const [location, setLocation] = useState(profile?.location || "");
  const [skills, setSkills] = useState(profile ? profile.skills : []);

  const fetchJobProfile = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setProfile(response.data.data);
    console.log(response.data.data);
    setLoading(false);
  };

  const updateProfile = async (e) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/profile/update`,
        {
          firstName: firstName,
          lastName: lastName,
          gender: gender || "MALE",
          phone: phone,
          jobTitle: jobTitle,
          summary: summary,
          location: location,
          skills: skills,
        }, // Assuming profile holds the updated data
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.code === 200) {
        setIsEditModalOpen(false);
        setModalMessage(response.data.message);
        console.log("happy", response.data.message);
        setSuccessModalIsOpen(true);

        setTimeout(function () {
          window.location.reload();
        }, 5000);
      } else {
        setModalMessage(response.data.message);
        setErrorModalIsOpen(true);
      }

      // You might want to show a success message or update the UI accordingly
    } catch (error) {
      console.error("Error updating profile", error);
      setModalMessage(error.message);
      setErrorModalIsOpen(true);
    }
  };
  useEffect(() => {
    fetchJobProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setGender(profile.gender);
      setPhone(profile.phone);
      setJobTitle(profile.jobTitle);
      setSummary(profile.summary);
      setLocation(profile.location);
      setSkills(profile.skills);
    }
  }, [profile]);

  return (
    <div>
      <button
        type="button"
        onClick={openEditModal}
        className=" cursor-pointer rounded-xl px-2 py-2"
      >
        <FaUserEdit className="h-5 w-5" />
      </button>
      <Transition appear show={isEditModalOpen} as={Fragment}>
        <Dialog as="div" onClose={closeEditModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-layer-1/60 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 flex min-h-screen items-center justify-center overflow-y-auto px-4  text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative inline-flex w-full transform flex-col overflow-hidden rounded-xl bg-white text-left align-bottom shadow-2xl transition-all mt-[34rem] mb-10 sm:my-36 sm:max-w-md sm:align-middle">
                <div className="absolute top-3 right-5">
                  <button
                    type="button"
                    onClick={closeEditModal}
                    className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text child-svg:h-5 child-svg:w-5"
                  >
                    <span className="sr-only">Close</span>
                    <AiFillCloseCircle className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex h-16 flex-shrink-0 items-center justify-between px-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-heading"
                  >
                    My Profile
                  </Dialog.Title>
                </div>

                <hr className="border-hr" />

                <div className="flex-1 space-y-3 px-6 py-5 sm:py-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      First Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Last Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Phone
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="plan"
                      className="block text-sm font-semibold text-heading"
                    >
                      Gender
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent py-2.5 pl-4 pr-8 font-medium text-text focus:border-primary disabled:opacity-30 sm:text-sm"
                    >
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHERS">Others</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Job Title
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Location
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Skills
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={skills.join(", ")}
                      onChange={(e) =>
                        setSkills(
                          e.target.value
                            .split(", ")
                            .filter((skill) => skill.trim())
                        )
                      }
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Summary
                    </label>
                    <textarea
                      id="name"
                      name="name"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="mt-2 h-36 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex h-16 flex-shrink-0 items-center justify-end space-x-2 bg-layer-3 px-6 shadow-lg">
                  <button
                    type="button"
                    onClick={closeEditModal}
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-[#424867] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateProfile}
                    type="button"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#4187ED] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
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
  );
}

export default EditProfileModal;
