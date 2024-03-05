import { FaSearch } from "react-icons/fa";
import userprofiles from "../Assests/userprofiles.svg";
import { useEffect, useState } from "react";
import { Baseurl } from "../Utils/apiService";
import axios from "axios";
const TodoList = () => {
  const [addlist, setAddlist] = useState(false);
  const [data, setData] = useState([]);
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTU3YjczYzM1ODFlY2E4NzMzMDYwMiIsImlhdCI6MTcwOTUzOTc4MCwiZXhwIjoxNzA5Nzk4OTgwfQ.1fvZQ7LMG30nliLFWHQlCAOXSXvf0aPpKhcuhDE5DZs",
    "Content-Type": "application/json",
  };
  function fetchPermissions() {
    axios
      .get(`${Baseurl}/api/v1/admin/todo`, { headers: headers })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchPermissions();
  }, []);

  return (
    <>
      {addlist ? (
        <>
          <div className="shadow-2xl rounded h-[500px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-black font-semibold">
                To-do List
                <br />
                <span className="text-[15px] text-[#525252]">
                  View, edit or add new to do to your app
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button
                  className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]"
                  onClick={() => {
                    setAddlist(false);
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>
            <hr />

            <div className="flex gap-5 m-10">
              <div>
                <label>Task Name</label>
                <br />
                <input
                  placeholder="Task Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label>Remind Me</label>
                <br />
                <input
                  placeholder="Remind Me"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-5 m-10">
              <div>
                <label>To-Do Task</label>
                <br />
                <input
                  placeholder="To-Do Task"
                  className="placeholder: block w-[700px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 mr-5">
              <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]">
                Cancel
              </button>
              <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                Add
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shadow-2xl rounded h-[600px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5  font-semibold text-black">
                To-do List
                <br />
                <span className="text-[15px] text-[#525252]">
                  View, edit or add new to do to your app
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

                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => {
                    setAddlist(true);
                  }}
                >
                  Add in List
                </button>
              </div>
            </div>
            <hr />
            {data?.data?.map((item) => (
              <div className="flex justify-between  items-center m-5 h-[70px]">
                <div className="flex gap-2">
                  <img src={userprofiles} alt="" />
                  <div>
                    <span>John Doe {item.createdAt}</span>
                    <div className="w-[650px] mt-1">{item.description}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl text-white">
                    Done
                  </button>
                  <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]">
                    Remind me Later
                  </button>
                </div>
              </div>
            ))}

            <hr />
          </div>
        </>
      )}
    </>
  );
};

export default TodoList;
