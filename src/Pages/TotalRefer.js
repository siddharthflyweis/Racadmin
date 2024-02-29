import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const TotalRefer = () => {
  const [Visible, setVisible] = useState(false);
  const [generatecoupon, setGeneratecoupon] = useState(false);

  return (
    <>
      {generatecoupon ? (
        <>
          <div className="shadow-2xl rounded h-[750px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-[#525252]">
                Total Refers/Coupons
                <br />
                <span className="text-[15px]">Refer Details</span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button
                  className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]"
                  onClick={() => setGeneratecoupon(false)}
                >
                  Go Back
                </button>
              </div>
            </div>
            <hr />
            <div className="m-10">#Rac-3083498</div>
            <div className="flex justify-between mr-10 ml-10">
              <div>
                <label>Name</label>
                <br />
                <input
                  placeholder="Name"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Description</label>
                <br />
                <input
                  placeholder="Description"
                  className="placeholder: block w-[720px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-between mr-10 ml-10 mt-5">
              <div>
                <label>Discount</label>
                <br />
                <input
                  placeholder="Discount"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Redemption Limit</label>
                <br />
                <input
                  placeholder="Redemption Limit"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Redemption Before</label>
                <br />
                <input
                  placeholder="Redemption Before"
                  className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-5 m-10">
              <div className="flex flex-col gap-2">
                <span>Free Delivery</span>
                <div className="flex gap-2">
                  <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">Yes</button>
                  <button className="bg-[grey] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">No</button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>Actions</span>
                <div className="flex gap-2">
                  <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">Edit Coupon</button>
                  <button className="bg-[red] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">Delete Coupon</button>
                </div>
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
          <div className="shadow-2xl rounded">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-[#525252]">
                Total Refers/Coupons
                <br />
                <span className="text-[15px]">Refer Details</span>
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
                    placeholder="Search in Users"
                  />
                </div>

                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => setGeneratecoupon(true)}
                >
                  Generate Coupon
                </button>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 mt-5 mb-5 ml-10">
              <span
                onClick={() => setVisible(false)}
                className={`cursor-pointer ${
                  !Visible && "underline text-[#165DB2] underline-offset-8"
                }`}
              >
                All Refers
              </span>
              <span
                onClick={() => setVisible(true)}
                className={`cursor-pointer ${
                  Visible && "underline text-[#165DB2] underline-offset-8"
                }`}
              >
                All Coupons
              </span>
            </div>
            <hr />
            {Visible ? (
              <>
                {" "}
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-[200px] text-[#6D6D6D]">Refer ID</th>
                      <th className="text-center text-[#6D6D6D] w-[300px]">
                        Refer To
                      </th>
                      <th className="w-[300px] text-center text-[#6D6D6D]">
                        Refer By
                      </th>
                      <th className=" w-[150px] text-center text-[#6D6D6D]">
                        Refer Points
                      </th>

                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Date
                      </th>

                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="text-center p-5">#RAC-039292</td>
                      <td className="w-[200px] text-center">Lorem impum</td>
                      <td className="w-[200px] text-center">Lorem impum</td>
                      <td className="w-[150px] text-center">30 Rac Points</td>
                      <td className="w-[50px] text-center">2nd Feb 2023</td>

                      <td className="w-[50px] text-center text-[#094DB3]">
                        Received
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                {" "}
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-[200px] text-[#6D6D6D]">Refer ID</th>
                      <th className="text-center text-[#6D6D6D] w-[300px]">
                        Refer To
                      </th>
                      <th className="w-[300px] text-center text-[#6D6D6D]">
                        Refer By
                      </th>
                      <th className=" w-[150px] text-left text-[#6D6D6D]">
                        Refer Points
                      </th>

                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Date
                      </th>

                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="text-center p-5">#RAC-039292</td>
                      <td className="w-[200px] text-center">Lorem impum</td>
                      <td className="w-[200px] text-center">Lorem impum</td>
                      <td className="w-[150px] text-center">30 Rac Points</td>
                      <td className="w-[50px] text-center">2nd Feb 2023</td>

                      <td className="w-[50px] text-center text-[#094DB3]">
                        Received
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TotalRefer;
