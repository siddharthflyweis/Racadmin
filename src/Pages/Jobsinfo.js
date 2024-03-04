import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Baseurl } from "../Utils/apiService";
import axios from "axios";
const Jobsinfo = () => {
  const [data, setData] = useState([]);

  function fetchjob() {
    axios
      .get(`${Baseurl}/api/v1/admin/endJob`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchjob();
  }, []);
  return (
    <div className="shadow-2xl rounded h-[600px]">
      <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
        <div className="text-2xl mb-5 text-black font-semibold">
          Jobs Info
          <br />
          <span className="text-[15px] text-[#525252]">
            View Details / Status of job done/ Cancelled/ Confirmed
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
              placeholder="Search in Service"
            />
          </div>
        </div>
      </div>
      <div className="m-5">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-[200px] text-[#6D6D6D]">Job ID</th>
              <th className="text-center text-[#6D6D6D] w-[200px]">
                Partner Name
              </th>
              <th className="w-[200px] text-center text-[#6D6D6D]">Service</th>
              <th className=" w-[150px] text-center text-[#6D6D6D]">Price</th>
              <th className="w-[200px] text-center text-[#6D6D6D]">Date</th>
              <th className="w-[150px] text-center text-[#6D6D6D]">Team</th>
              <th className="w-[150px] text-center text-[#6D6D6D]">
                Refer Points
              </th>
              <th className="w-[150px] text-center text-[#6D6D6D]">
                Time Slot
              </th>
              <th className="w-[150px] text-center text-[#6D6D6D]">Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((job) => (
              <tr className="bg-[#F5F9FF]" key={job._id}>
                <td className="text-center p-3">{job._id}</td>
                <td className="text-center p-3">{job.name}</td>
                <td className="text-center p-3">Loreum Ipsum</td>
                <td className="text-center p-3">Rs.{job.price}</td>
                <td className="text-center p-3">2nd Feb 2023</td>
                <td className="text-center p-3">2</td>
                <td className="text-center p-3">3</td>
                <td className="text-center p-3 text-[#094DB3]">4pm-6pm</td>
                <td className="text-center p-3 text-[#09B31A]">done</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobsinfo;
