import React from "react";
import { FaSearch } from "react-icons/fa";
import deletebtn from "../Assests/deletebtn.svg";
import editbtn from "../Assests/editbtn.svg";
import bell from "../Assests/bell.svg";
import editicon from "../Assests/editicon.svg";
const Natofication = () => {
  return (
    <div className="shadow-2xl rounded h-[600px]">
      <div className="flex justify-between items-center pt-5 ml-10 mr-10">
        <div className="text-2xl mb-5 text-[black] font-semibold">
          Notification Manager
          <br />
          <span className="text-[15px] text-[#525252]">
            Edit , Delete or push notification
          </span>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="relative mt-2 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="bg-[#165DB2] p-2  rounded-tl rounded-bl text-white">
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              className="placeholder: ml-2 block w-[350px] rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search in Notifications"
            />
          </div>

          <div className="flex">
            <img src={deletebtn} alt=""/>
            <img src={editbtn} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-around">
        <div className="flex flex-col">
          <span className="text-black font-semibold">Notification Title</span>

          <input className="placeholder:block w-[250px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div>
          <span className="text-black font-semibold">Send to</span>

          <input
            className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search Individual"
          />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <span>or</span>

          <button className="bg-[#0B50B3] p-2 pl-3 pr-3 rounded text-white flex justify-center items-center gap-2">
            All
          </button>
        </div>

        <div>
          <label className="text-black font-semibold">Send Through</label>
          <form className="w-[220px]">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Type Of Notification</option>
              <option value="sms">Trough Sms</option>
              <option value="Email">Email</option>
              <option value="App">App Notification</option>
              <option value="Alert">Notification Alert</option>
            </select>
          </form>
        </div>
        <div>
          <span className="text-black font-semibold">Notification Status</span>
          <div className="flex gap-2">
            <button className="bg-[#0B50B3] p-2 pl-4 pr-3 rounded text-white flex justify-center items-center gap-2">
              Enable
            </button>
            <button className="bg-[#0B50B3] p-2 pl-3 pr-3 rounded text-white flex justify-center items-center gap-2">
              Disable
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className="text-black font-semibold ml-10">
          Notification Content
        </span>
        <div className="flex justify-around items-center">
          <input className="w-[700px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <span className="text-black font-semibold">Date Added</span>
          <div className="flex flex-col">
            <input
              type="date"
              className="w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex mr-10 mt-5 gap-2 justify-end">
          <button className="bg-[#0B50B3] p-2 pl-3 pr-3 rounded text-white flex justify-center items-center gap-2">
            Cancel
          </button>
          <button className="bg-[#0B50B3] p-2 pl-3 pr-3 rounded text-white flex justify-center items-center gap-2">
            Save
          </button>
        </div>
      </div>

      <div className="mt-10 ml-1 mr-1">
        <table className="w-full border-collapse border border-slate-400 ... ">
          <thead>
            <tr>
              <th className="w-[20px] text-[#6D6D6D] border border-slate-300 ...">
                <input type="checkbox" />
              </th>
              <th className="text-center text-[#6D6D6D] w-[300px] border border-slate-300 ...">
                Notification Title
              </th>
              <th className="w-[300px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Notification Content
              </th>

              <th className="w-[200px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Notification Status
              </th>

              <th className="w-[150px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Date Added
              </th>
              <th className="w-[100px] text-center text-[#6D6D6D] border border-slate-300 ...">
                Edit or Push
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-center p-5 border border-slate-300 ...">
                <input type="checkbox" />
              </td>
              <td className="w-[200px] text-center border border-slate-300 ..."></td>
              <td className="w-[200px] text-center border border-slate-300 ..."></td>

              <td className="w-[50px] text-center border border-slate-300 ..."></td>

              <td className="w-[50px] text-center border border-slate-300 ..."></td>
              <td className="w-[50px] text-center border border-slate-300 ...">
                <span className="flex gap-1 justify-center">
                  <img src={bell} alt=""/> <img src={editicon} alt=""/>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Natofication;
