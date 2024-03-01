import React, { useState } from "react";
import downloadbtn from "../Assests/downloadbtn.svg";
import deletebtn from "../Assests/deletebtn.svg";
import editbtn from "../Assests/editbtn.svg";
import upload from "../Assests/upload.svg";
import { X } from "lucide-react";
const Allfiles = () => {
  const [uploadfile, setUploadfile] = useState(false);

  return (
    <>
      {uploadfile ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[500px] h-[500px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <span className="text-2xl font-semibold">
                    Upload / Edit Files
                  </span>
                  <span
                    onClick={() => setUploadfile(false)}
                    className="cursor-pointer"
                  >
                    <X />
                  </span>
                </div>
                <hr />
                <div className="flex flex-col gap-2 ml-[4.5rem]">
                  <div>
                    <label>File Title</label>
                    <br />
                    <input
                      placeholder="File Title"
                      className="placeholder: block w-[350px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <label>File Status</label>
                      <br />
                      <input
                        placeholder="File Status"
                        className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>File Type</label>
                      <br />
                      <input
                        placeholder="File Type"
                        className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <label>Send To</label>
                      <br />
                      <input
                        placeholder="Send To"
                        className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <label>File Title</label>
                      <br />
                      <input
                        placeholder="File Title"
                        className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#E6EEFD] h-[150px] w-[350px]">
                      <div className="relative rounded-lg">
                        <div className="flex flex-col justify-center text-center pt-6 ">
                          <label>
                            <input
                              className="text-sm cursor-pointer w-36 hidden"
                              type="file"
                              multiple
                            />
                            <div className="flex justify-center">
                              <img src={upload} alt="" className="w-[50px]" />
                            </div>
                          </label>

                          <div className="title text-[#0B50B3]">
                            upload Image From Device /Browser
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-5 m-5">
                  <button
                    className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]"
                    onClick={() => setUploadfile(false)}
                  >
                    Cancel
                  </button>
                  <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <>
        <div className="shadow-2xl rounded h-[600px]">
          <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
            <div className="text-2xl mb-5  text-[black] font-semibold">
              Upload Files
              <br />
              <span className="text-[15px] text-[#525252]">
                Upload and view files
              </span>
            </div>
            <div>
              <button
                className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                onClick={() => setUploadfile(true)}
              >
                Upload a New File
              </button>
            </div>
          </div>

          <div className="mt-10 ml-1 mr-1">
            <table className="w-full border-collapse border border-slate-400 ... ">
              <thead>
                <tr>
                  <th className="w-[200px] text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                    File Title
                  </th>
                  <th className="text-center text-[#6D6D6D] w-[300px] border border-slate-300 ... bg-[#F6F9FF]">
                    File Type
                  </th>
                  <th className="w-[300px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                    File Status
                  </th>

                  <th className="w-[200px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                    Uploaded on
                  </th>

                  <th className="w-[150px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                    Uploaded to
                  </th>
                  <th className="w-[150px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="text-center p-5 border border-slate-300 ... bg-[#F6F9FF]"></td>
                  <td className="w-[200px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>
                  <td className="w-[200px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>

                  <td className="w-[50px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>

                  <td className="w-[50px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>
                  <td className="w-[50px] text-center border border-slate-300 ... bg-[#F6F9FF]">
                    <span className="flex gap-2 justify-center">
                      <img src={downloadbtn} alt="" />
                      <img src={deletebtn} alt="" />
                      <img src={editbtn} alt="" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
};

export default Allfiles;
