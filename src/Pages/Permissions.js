import React from "react";
import { FaSearch } from "react-icons/fa";
import permissionaction from "../Assests/permissionaction.svg";
import userprofiles from "../Assests/userprofiles.svg";
const Permissions = () => {
  return (
    <div className="shadow-2xl rounded h-[600px]">
      <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
        <div className="text-2xl mb-5 text-[#525252]">Rolls & Permissions</div>

        <div className="relative mt-2 rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="bg-[#165DB2] p-2  rounded-tl rounded-bl text-white">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            className="placeholder: ml-2 block w-[350px] rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search in Service"
          />
        </div>
      </div>

      <div className="mt-10 ml-1 mr-1">
        <table className="w-full border-collapse border border-slate-400 ... ">
          <thead>
            <tr>
              <th className="w-[200px] border border-slate-300 ... bg-[#F6F9FF] text-[#165DB2]">
                Name
              </th>
              <th className="text-center text-[#165DB2] w-[300px] border border-slate-300 ... bg-[#F6F9FF]">
                Languages
              </th>
              <th className="w-[300px] text-center text-[#165DB2] border border-slate-300 ... bg-[#F6F9FF]">
                Tag
              </th>

              <th className="w-[400px] text-center text-[#165DB2]  border border-slate-300 ... bg-[#F6F9FF]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-center border border-slate-300 ... bg-[#F6F9FF] flex items-center">
                <img src={userprofiles} alt="" />
                <span>
                  <div className="text-xl">siddharth</div>
                  <span className="text-[#165DB2]">Real Estate</span>
                </span>
              </td>
              <td className=" text-center border border-slate-300 ... bg-[#F6F9FF]">
                Hindi, Gujrati
              </td>
              <td className="text-center border border-slate-300 ... bg-[#F6F9FF]">
                Legal advisor
              </td>

              <td className=" text-center border border-slate-300 ... bg-[#F6F9FF]">
                <span className="flex gap-2">
                  <img src={permissionaction} alt=""/> <img src={permissionaction} alt=""/>
                  <img src={permissionaction} alt=""/> <img src={permissionaction} alt=""/>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Permissions;
