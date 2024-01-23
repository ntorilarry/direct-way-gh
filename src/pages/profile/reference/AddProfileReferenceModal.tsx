import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import ErrorToast from "../../../shared/ErrorToast";
import SuccessToast from "../../../shared/SuccessToast";

interface dataType {
  reference: {
    name: string;
    position: string;
    companyName: string;
    description: string;
  };
}
function AddProfileReferenceModal() {
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

  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [successmodalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errormodalIsOpen, setErrorModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const AddReferenceProfile = async (e) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/reference`,
        {
          position: position,
          companyName: companyName,
          name: name,
          description: description,
        }, // Assuming profile holds the upddescriptiond data
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
        setSuccessModalIsOpen(true);
        setTimeout(function () {
          setSuccessModalIsOpen(false);

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
      // Handle error and show an error message
    }
  };

  useEffect(() => {
    if (profile) {
      setPosition(profile.reference.position);
      setCompanyName(profile.reference.companyName);
      setName(profile.reference.name);
      setDescription(profile.reference.description);
    }
  }, [profile]);

  return (
    <div>
      <button
        type="button"
        onClick={openEditModal}
        className=" cursor-pointer px-2 py-2 text-sm font-semibold"
      >
        <RiAddCircleFill className="text-2xl hover:text-[#4187ED] " />
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
                    Add Reference
                  </Dialog.Title>
                </div>

                <hr className="border-hr" />

                <div className="flex-1 space-y-3 px-6 py-5 sm:py-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Position
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Company Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-heading"
                    >
                      Description
                    </label>
                    <textarea
                      id="name"
                      name="name"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                    onClick={AddReferenceProfile}
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

export default AddProfileReferenceModal;
