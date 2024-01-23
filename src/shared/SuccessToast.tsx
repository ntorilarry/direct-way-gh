import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Success from "../assets/icons/sucess.gif";

function SuccessToast({ isOpen, message, onRequestClose }) {
  function closeEditModal() {
    onRequestClose(false);
  }

  function openEditModal() {
    isOpen(true);
  }
  return (
    <div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
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

            <div className="fixed inset-0 flex min-h-screen items-center justify-center overflow-hidden px-4 z-50 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative inline-flex w-full transform flex-col overflow-hidden rounded-xl bg-white text-left align-bottom shadow-2xl transition-all my-28 sm:my-36 sm:max-w-md sm:align-middle">
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

                  <div className="flex-1 space-y-3 px-6 py-5 sm:py-6">
                    <div className="mx-auto">
                      <img className="mx-auto" src={Success} alt="" />
                    </div>
                    <p className="text-center">{message}</p>
                  </div>

                  {/* <div className="flex h-16 flex-shrink-0 items-center justify-end space-x-2 bg-layer-3 px-6 shadow-lg">
                    <button
                      type="button"
                      onClick={closeEditModal}
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-[#424867] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#4187ED] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                    >
                      Save
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}

export default SuccessToast;
