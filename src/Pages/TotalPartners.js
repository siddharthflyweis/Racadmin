import { FaSearch } from "react-icons/fa";
import download from "../Assests/download.svg";
import userprofiles from "../Assests/userprofiles.svg";
import userpro from "../Assests/userpro.svg";
import deletebtn from "../Assests/deletebtn.svg";
import editbtn from "../Assests/editbtn.svg";
import dwld from "../Assests/dwnld.svg";
import { useEffect, useState } from "react";
import { Baseurl } from "../Utils/apiService";
import axios from "axios";
import useprofile from "../Assests/userprofiles.svg";
const TotalPartners = () => {
  const [Visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTU3YjczYzM1ODFlY2E4NzMzMDYwMiIsImlhdCI6MTcwOTUzOTc4MCwiZXhwIjoxNzA5Nzk4OTgwfQ.1fvZQ7LMG30nliLFWHQlCAOXSXvf0aPpKhcuhDE5DZs",
    "Content-Type": "application/json",
  };

  function fetchTotalpartner() {
    axios
      .get(`${Baseurl}/api/v1/service`, { headers: headers })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchTotalpartner();
  }, []);
  return (
    <>
      {Visible ? (
        <>
          <div className="shadow-2xl rounded h-[750px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5  text-black font-semibold">
                Total Partners
                <br />
                <span className="text-[15px] text-[#525252]">
                  View ,edit Partner Profile
                </span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between m-10">
              <div className="flex gap-5 w-[300px]">
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
                <div className="flex  items-center justify-center gap-2">
                  <button
                    className="text-[#094DB3] bg-[#EEF4FF]  rounded-full h-[20px] w-[20px] flex items-center justify-center "
                    onClick={decrement}
                  >
                    -
                  </button>
                  <span className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded-2xl text-white flex justify-center items-center gap-2">
                    {count}
                  </span>

                  <button
                    className="text-[#094DB3] bg-[#EEF4FF]  rounded-full h-[20px] w-[20px] flex items-center justify-center "
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                <span className="font-semibold">Lead Increase/ Decrease</span>
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

            <div className="flex mt-20 gap-5 ml-5">
              <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-[#EEF4FF] border border-[#0B50B3]">
                Service offer
              </button>
              <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-[#EEF4FF]  border border-[#0B50B3]">
                Service offer
              </button>
              <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-[#EEF4FF] border border-[#0B50B3]">
                Service offer
              </button>
              <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-[#EEF4FF] border border-[#0B50B3]">
                Service offer
              </button>
            </div>
            <div className="mt-5 ml-5">
              <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                Download Partners Identity Card
                <img src={download} alt="" />
              </button>
            </div>
            <div className="flex justify-end gap-5 mr-5">
              <button
                className="text-[#0B50B3] h-[40px] w-[100px] rounded bg-white border border-[#0B50B3]"
                onClick={() => setVisible(false)}
              >
                Cancel
              </button>
              <button className="bg-[#0B50B3] h-[40px] w-[130px] rounded text-white flex justify-center items-center gap-2">
                Save Changes
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shadow-2xl rounded">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5  text-black font-semibold">
                Total Partners
                <br />
                <span className="text-[15px] text-[#525252]">
                  View ,edit & Add Partner
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                  Download Excel List
                  <img src={download} alt="" />
                </button>

                <div className="relative mt-2 rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="bg-[#165DB2] p-2  rounded-tl rounded-bl text-white">
                      <FaSearch />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="placeholder: ml-2.5 block w-[350px] rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search in Users"
                  />
                </div>

                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => setVisible(true)}
                >
                  Add Partner
                </button>
              </div>
            </div>
            <hr />

            <table className="w-full">
              <thead>
                <tr className="m-[50px] p-3">
                  <th className="w-[50px] p-3"></th>
                  <th className="text-left text-[#6D6D6D] w-[200px] p-3">
                    Partner name
                  </th>
                  <th className="w-[200px] text-left text-[#6D6D6D] p-3">
                    Service Offer
                  </th>
                  <th className=" w-[150px] text-left text-[#6D6D6D] p-3">
                    Phone no.
                  </th>
                  <th className="w-[200px] text-center text-[#6D6D6D] p-3">
                    Total Work Done
                  </th>
                  <th className="w-[150px] text-center text-[#6D6D6D] p-3">
                    Team With
                  </th>
                  <th className="w-[150px] text-center text-[#6D6D6D] p-3"></th>
                </tr>
              </thead>

              <tbody>
                {data?.msg?.map((item) => (
                  <tr key={item._id}>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        New
                      </span>
                    </td>
                    <td className=" flex items-center">
                      <img src={userprofiles} alt="" />
                      siddharth
                    </td>
                    <td className=" p-3">{item.name}</td>
                    <td className="text-left p-3">299999999</td>
                    <td className="text-center p-3">{item.price}</td>
                    <td className="text-center p-3">29</td>
                    <td className="flex gap-1 p-3">
                      <img src={userpro} alt="" />
                      <img src={dwld} alt="" />
                      <img src={deletebtn} alt="" />
                      <img src={editbtn} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
              <hr />
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default TotalPartners;
