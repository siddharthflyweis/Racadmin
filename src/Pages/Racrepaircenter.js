import userprofiles from "../Assests/userprofiles.svg";
import deletebtn from "../Assests/deletebtn.svg";
import editbtn from "../Assests/editbtn.svg";
import dwld from "../Assests/dwnld.svg";
import { useState } from "react";

const Racrepaircenter = () => {
  const [addShop, setAddshop] = useState(false);
  return (
    <>
      {addShop ? (
        <>
          {" "}
          <div className="shadow-2xl rounded h-[800px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5  text-black font-semibold">
                Rac Repair Center
                <br />
                <span className="text-[15px] text-[#525252]">
                  Edit , Delete or push notification
                </span>
              </div>
              <div className="">
                <button
                  className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]"
                  onClick={() => {
                    setAddshop(false);
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>

            <hr />
            <div className="flex justify-around flex-wrap gap-5 mt-10">
              <div>
                <label className="required">Company Name</label>
                <br />
                <input
                  placeholder="Company Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Owner Name</label>
                <br />
                <input
                  placeholder="Owner Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="required">Owner Mobile Number</label>
                <br />
                <input
                  placeholder="Owner Mobile Number"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Email</label>
                <br />
                <input
                  placeholder="Email"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Customer Support No.</label>
                <br />
                <input
                  placeholder="Customer Support No."
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Company Reg No.</label>
                <br />
                <input
                  placeholder="Company Reg No."
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">GST No.</label>
                <br />
                <input
                  placeholder="GST No."
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="required">Type Of Products</label>
                <br />
                <input
                  placeholder="Type Of Products"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Address</label>
                <br />
                <input
                  placeholder="Address"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-3xl ml-10 mt-10">Bank Details</div>

            <div className="flex justify-around flex-wrap gap-5 mt-10">
              <div>
                <label className="required">PAN Card No.</label>
                <br />
                <input
                  placeholder="PAN Card No."
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                {" "}
                <label className="required">Bank Name</label>
                <br />
                <input
                  placeholder="Bank Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="required">Branch Name</label>
                <br />
                <input
                  placeholder="Branch Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Account Holder Name</label>
                <br />
                <input
                  placeholder="Account Holder Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">Account Number</label>
                <br />
                <input
                  placeholder="Account Number"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required"> Confirm Account Number</label>
                <br />
                <input
                  placeholder="Confirm Account Number"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="required">IFSC Code</label>
                <br />
                <input
                  placeholder="IFSC Code"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
          <div className="shadow-2xl rounded h-[600px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-black font-semibold">
                Rac Repair Center
                <br />
                <span className="text-[15px] text-[#525252]">
                  Edit , Delete or push notification
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => {
                    setAddshop(true);
                  }}
                >
                  Add Shop
                </button>
              </div>
            </div>

            <div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-6 "></th>
                    <th className="text-left text-[#6D6D6D] w-[300px] p-2">
                      Partner name
                    </th>
                    <th className="w-[300px] text-left text-[#6D6D6D] p-2">
                      Service Offer
                    </th>
                    <th className=" w-[150px] text-left text-[#6D6D6D] p-2">
                      Phone no.
                    </th>
                    <th className="w-[200px] text-center text-[#6D6D6D] p-2">
                      Total Services Provided
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="shadow-lg">
                    <td className="text-center p-2">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        New
                      </span>
                    </td>
                    <td className="w-[200px] flex items-center p-2">
                      <img src={userprofiles} alt="" />
                      siddharth
                    </td>
                    <td className="w-[300px] p-2">AC Repair,ELECTRICIAN</td>
                    <td className="w-[150px] text-left p-2">299999999</td>
                    <td className="w-[50px] text-center p-2">29</td>

                    <td className="w-[50px]">
                      <img src={dwld} alt="" />
                    </td>
                    <td className="w-[50px]">
                      <img src={deletebtn} alt="" />
                    </td>
                    <td className="w-[50px]">
                      <img src={editbtn} alt="" />
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Racrepaircenter;
