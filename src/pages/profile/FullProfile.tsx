import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../shared/Loader";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import EditProfileModal from "./EditProfileModal";
import AddProfileEducationalModal from "./education/AddProfileEducationModal";
import EditProfileEducationalModal from "./education/EditProfileEducationalModal";
import DeleteProfileEducationModal from "./education/DeleteProfileEducationModal";
import AddProfileExperienceModal from "./experience/AddProfileExperienceModal";
import EditProfileExperienceModal from "./experience/EditProfileExperienceModal";
import DeleteProfileExperienceModal from "./experience/DeleteProfileExperienceModal";
import AddProfileReferenceModal from "./reference/AddProfileReferenceModal";
import EditProfileReferenceModal from "./reference/EditProfileReferenceModal";
import DeleteProfileReferenceModal from "./reference/DeleteProfileReferenceModal";
interface dataType {
  _id: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: number;
  userType: string;
  references: string;
  education: education[];
  experiences: string;
  summary: string;
  location: string;
  gender: string;
  skills: string[];
}

interface education {
  id: string;
  position: string;
  school: string;
  startDate: string;
  endDate: string;
  isPresentEducationPlace: boolean;
  summary: string;
  location: string;
}

interface experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  isPresentWorkPlace: boolean;
  summary: string;
}

interface reference {
  id: string;
  name: string;
  position: string;
  companyName: string;
  description: string;
}

export default function FullProfile() {

  const [profile, setProfile] = useState<dataType>();
  const [education, setEducation] = useState<education[]>([]);
  const [experience, setExperience] = useState<experience[]>([]);
  const [reference, setReference] = useState<reference[]>([]);
  const [loading, setLoading] = useState(true);
  const access_token = localStorage.getItem("token");

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
    setEducation(response.data.data.education);
    setExperience(response.data.data.experiences);
    setReference(response.data.data.references);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-[#F6F6FA]">
        <div className="pt-24 w-full mx-auto max-w-7xl overflow-hidden rounded-xl">
          {loading ? (
            <Loader />
          ) : (
            <div className="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
              <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex-none w-auto max-w-full px-3">
                    <div className="bg-black bg-opacity-20 text-base ease-soft-in-out h-14 w-14 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                      <svg
                        className="absolute h-14 w-14  text-gray-400"
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
                    </div>
                  </div>
                  <div className="flex-none w-auto max-w-full px-3 my-auto">
                    <div className="h-full">
                      <h5 className="mb-1">
                        {profile && profile.firstName}{" "}
                        {profile && profile.lastName}
                      </h5>
                      <p className="mb-0 font-semibold leading-normal text-sm">
                        {profile && profile.jobTitle ? (
                          profile.jobTitle
                        ) : (
                          <span className="italic">Update Job Title</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pb-6 mx-auto removable">
                <div className="flex flex-wrap xl:flex-nowrap -mx-3">
                  <div className="w-full max-w-full px-3 lg-max:mt-6 lg:w-4/12 mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <div className="flex flex-wrap -mx-3">
                          <div className="flex items-center justify-between w-full max-w-full px-3">
                            <h6 className="mb-0">Profile Information</h6>
                            <EditProfileModal />
                          </div>
                        </div>
                      </div>
                      <div className="flex-auto p-4">
                        <p className="leading-normal text-sm">
                          {profile && profile.summary ? (
                            profile.summary
                          ) : (
                            <span className="italic">Update summary</span>
                          )}
                        </p>
                        <hr className="h-px my-6 bg-transparent  bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                          <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                            <strong className="text-slate-700">Gender:</strong>{" "}
                            {profile && profile.gender ? (
                              profile.gender
                            ) : (
                              <span className="italic">Update gender</span>
                            )}
                          </li>
                          <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                            <strong className="text-slate-700">Mobile:</strong>{" "}
                            {profile && profile.phone}
                          </li>
                          <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                            <strong className="text-slate-700">Email:</strong>{" "}
                            {profile && profile.email}
                          </li>
                          <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                            <strong className="text-slate-700">
                              Location:
                            </strong>{" "}
                            {profile && profile.location ? (
                              profile.location
                            ) : (
                              <span className="italic">Update location</span>
                            )}
                          </li>
                          <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                            <strong className="text-slate-700">
                              Usertype:
                            </strong>{" "}
                            {profile && profile.userType}
                          </li>
                          <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                            <strong className="text-slate-700">Skills:</strong>{" "}
                            {profile && profile.skills ? (
                              profile.skills
                            ) : (
                              <span className="italic">Update skills</span>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 lg-max:mt-6 lg:w-4/12 mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words  border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 pb-0 mb-2 bg-white border-b-0 rounded-t-2xl">
                        <div className="flex flex-wrap -mx-3">
                          <div className="flex items-center justify-between w-full max-w-full px-3">
                            <h6 className="mb-0">Add Education Information</h6>
                            <AddProfileEducationalModal />
                          </div>
                        </div>
                      </div>
                      {education.map((item, key) => (
                        <div key={key} className="bg-white my-4 flex-auto p-4">
                          <div className="inline-flex w-full justify-end">
                            <EditProfileEducationalModal itemId={item.id} />{" "}
                            <DeleteProfileEducationModal itemId={item.id} />
                          </div>
                          <p className="leading-normal text-sm">
                            {item.summary}
                          </p>
                          <hr className="h-px my-6 bg-transparent  bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                              <strong className="text-slate-700">
                                School:
                              </strong>{" "}
                              {item.school}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Position
                              </strong>{" "}
                              {item.position}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Start Date:
                              </strong>{" "}
                              {item.startDate}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                End Date:
                              </strong>{" "}
                              {item.endDate}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Location:
                              </strong>{" "}
                              {item.location}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Current Edu. Place:
                              </strong>{" "}
                              {item.isPresentEducationPlace ? "true" : "false"}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 lg-max:mt-6 lg:w-4/12 mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words  border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 pb-0 mb-2 bg-white border-b-0 rounded-t-2xl">
                        <div className="flex flex-wrap -mx-3">
                          <div className="flex items-center justify-between w-full max-w-full px-3">
                            <h6 className="mb-0">Add Experience Information</h6>
                            <AddProfileExperienceModal />
                          </div>
                        </div>
                      </div>
                      {experience.map((item, key) => (
                        <div key={key} className="bg-white my-4 flex-auto p-4">
                          <div className="inline-flex w-full justify-end">
                            <EditProfileExperienceModal itemId={item.id} />{" "}
                            <DeleteProfileExperienceModal itemId={item.id} />
                          </div>
                          <p className="leading-normal text-sm">
                            {item.summary}
                          </p>
                          <hr className="h-px my-6 bg-transparent  bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                              <strong className="text-slate-700">
                                Company:
                              </strong>{" "}
                              {item.company}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Position
                              </strong>{" "}
                              {item.position}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Start Date:
                              </strong>{" "}
                              {item.startDate}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                End Date:
                              </strong>{" "}
                              {item.endDate}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Current Work Place:
                              </strong>{" "}
                              {item.isPresentWorkPlace ? "true" : "false"}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 lg-max:mt-6 lg:w-4/12 mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words  border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 pb-0 mb-2 bg-white border-b-0 rounded-t-2xl">
                        <div className="flex flex-wrap -mx-3">
                          <div className="flex items-center justify-between w-full max-w-full px-3">
                            <h6 className="mb-0">Add Reference Information</h6>
                            <AddProfileReferenceModal />
                          </div>
                        </div>
                      </div>
                      {reference.map((item, key) => (
                        <div key={key} className="bg-white my-4 flex-auto p-4">
                          <div className="inline-flex w-full justify-end">
                            <EditProfileReferenceModal itemId={item.id} />{" "}
                            <DeleteProfileReferenceModal itemId={item.id} />
                          </div>
                          <p className="leading-normal text-sm">
                            {item.description}
                          </p>
                          <hr className="h-px my-6 bg-transparent  bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                              <strong className="text-slate-700">Name:</strong>{" "}
                              {item.name}
                            </li>
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                              <strong className="text-slate-700">
                                Company Name:
                              </strong>{" "}
                              {item.companyName}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                              <strong className="text-slate-700">
                                Position
                              </strong>{" "}
                              {item.position}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
