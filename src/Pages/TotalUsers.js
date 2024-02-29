import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import download from "../Assests/download.svg";
import userprofiles from "../Assests/userprofiles.svg";
import userpro from "../Assests/userpro.svg";
import deletebtn from "../Assests/deletebtn.svg";
import editbtn from "../Assests/editbtn.svg";
import useprofile from "../Assests/userprofiles.svg";
import btn from "../Assests/deletebtn.svg";

const TotalUsers = () => {
  const [adduser, setAdduser] = useState(false);
  return (
    <>
      {adduser ? (
        <>
          <div className="shadow-2xl rounded h-[750px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-[#525252]">
                User Profile
                <br />
                <span className="text-[15px]">View ,edit User Information</span>
              </div>
              <div>
                <button
                  className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]"
                  onClick={() => setAdduser(false)}
                >
                  Go Back
                </button>
              </div>
            </div>
            <hr />
            <div className="flex justify-between m-10">
              <div className="flex gap-5">
                <img src={useprofile} alt="" />
                <div className="flex flex-col">
                  <div className="flex gap-2 ">
                    <div className="text-2xl font-semibold">Partner name</div>

                    <div className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      New
                    </div>
                  </div>
                  <span className="text-[#EAA800]">incomplete profile</span>
                </div>
              </div>
              <div>
                <img src={btn} alt="" />
              </div>
            </div>
            <div className="flex justify-around">
              <div>
                <label>First Name</label>
                <br />
                <input
                  placeholder="First Name"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                {" "}
                <label>Last Name</label>
                <br />
                <input
                  placeholder="Last Name"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label>Email</label>
                <br />
                <input
                  placeholder="Email"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <br />
                <input
                  placeholder="Phone Number"
                  type="tel"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-around mt-10">
              <div>
                <label>First Line Address</label>
                <br />
                <input
                  placeholder="First Line Address"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                {" "}
                <label>Second Line Address</label>
                <br />
                <input
                  placeholder="Second Line Address"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label>Country</label>
                <br />
                <input
                  placeholder="Country"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>State</label>
                <br />
                <input
                  placeholder="State"
                  type="tel"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-around mt-10">
              <div>
                <label>District</label>
                <br />
                <input
                  placeholder="District"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                {" "}
                <label>Pin Code</label>
                <br />
                <input
                  placeholder="Pin Code"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label>Kyc</label>
                <br />
                <input
                  placeholder="Kyc"
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label> Adaahar card No.</label>
                <br />
                <input
                  placeholder="Adaahar card No."
                  className="placeholder: block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-5">
              <span className="m-10">Save As</span>
              <div className="flex gap-5 ml-5">
                <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]">
                  Home
                </button>
                <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]">
                  Work
                </button>
                <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]">
                  Other
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-5 mr-5">
              <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]">
                Cancel
              </button>
              <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                Save Changes
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="shadow-2xl rounded">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-[#525252]">
                Total Users
                <br />
                <span className="text-[15px]">
                  View & edit User List of app..
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                  Download Excel List
                  <img src={download}  alt=""/>
                </button>
                <div className="relative mt-2 rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="bg-[#165DB2] p-2  rounded-tl rounded-bl text-white">
                      <FaSearch />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="placeholder: ml-2 block w-[350px] rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search in Users"
                  />
                </div>

                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => setAdduser(true)}
                >
                  Add User
                </button>
              </div>
            </div>
            <hr />

            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-3 px-6"></th>
                  <th className="text-left text-[#6D6D6D] w-[300px]">
                    User name
                  </th>
                  <th className="w-[300px] text-left text-[#6D6D6D]">Email</th>
                  <th className="w-[150px] text-left text-[#6D6D6D]">
                    Phone no.
                  </th>
                  <th className="w-[150px] text-center text-[#6D6D6D]">
                    Service Added
                  </th>
                </tr>
              </thead>
              <tbody className="mt-4">
                <tr className="shadow-lg">
                  <td className="text-center">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      New
                    </span>
                  </td>
                  <td className="w-[200px] flex items-center p-4">
                    <img src={userprofiles} alt="" />
                    siddharth
                  </td>
                  <td className="w-[300px] p-4">siddhartharay47@gmail.com</td>
                  <td className="w-[150px] text-left p-4">299999999</td>
                  <td className="w-[50px] text-center p-4">29</td>
                  <td className="w-[50px] ml-2">
                    <img src={userpro} alt="" />
                  </td>
                  <td className="w-[50px] ">
                    <img src={deletebtn} alt=""/>
                  </td>
                  <td className="w-[50px]">
                    <img src={editbtn} alt="" />
                  </td>
                </tr>
                <tr className="shadow-lg">
                  <td className="text-center">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      New
                    </span>
                  </td>
                  <td className="w-[200px] flex items-center p-4">
                    <img src={userprofiles} alt="" />
                    siddharth
                  </td>
                  <td className="w-[300px] p-4">siddhartharay47@gmail.com</td>
                  <td className="w-[150px] text-left p-4">299999999</td>
                  <td className="w-[50px] text-center p-4">29</td>
                  <td className="w-[50px] ml-2">
                    <img src={userpro} alt="" />
                  </td>
                  <td className="w-[50px]">
                    <img src={deletebtn} alt="" />
                  </td>
                  <td className="w-[50px]">
                    <img src={editbtn} alt=""/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default TotalUsers;