import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import home from "../Assests/Allservices/home.svg";
import btn from "../Assests/deletebtn.svg";
import edit from "../Assests/editbtn.svg";
import truck from "../Assests/truck.svg";
import warranty from "../Assests/warranty.svg";
import replacement from "../Assests/replacement.svg";
import rac from "../Assests/rac.svg";
import axios from "axios";
import { Baseurl } from "../Utils/apiService";
const TotalProducts = () => {
  const [Visible, setVisible] = useState(false);
  const [addProduct, setAddproduct] = useState(false);
  const [data, setData] = useState([]);

  function fetchAllproduct() {
    axios
      .get(`${Baseurl}/api/v1/cartAndOrder/api/v1/order/allOrders`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchAllproduct();
  }, []);
  return (
    <>
      {addProduct ? (
        <>
          <div className="shadow-2xl rounded h-[1000px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 text-[#525252]">
                Total Products
                <br />
                <span className="text-[15px]">
                  View & edit User List of app..
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button
                  className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]"
                  onClick={() => {
                    setAddproduct(false);
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>
            <hr />
            <div className="ml-10 mt-5 text-2xl font-semibold">
              Home Appliances
            </div>
            <hr />
            <div className="flex justify-between m-5">
              <div className="flex flex-col gap-5  w-[400px]">
                <div className="p-2 bg-[#F8FAFC] rounded-lg w-[200px] flex justify-center font-semibold">
                  LG Air Conditioner
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg w-[400px]">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit.Borem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button className="bg-[#0B50B3] w-[150px] p-2 rounded text-white flex justify-center items-center gap-2">
                  Special Off 34%
                </button>
                <img src={home} alt="home applliance" />

                <div className="text-2xl font-semibold  mt-5">
                  More Product Details
                </div>
                <div className="bg-[#F8FAFC] mr-10 p-5 rounded-lg w-[400px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vulputate turpis elit, quis pellentesque ante
                  bibendum nec. In posuere finibus risus auctor auctor.
                </div>
              </div>
              <div className="w-[600px] bg-[#F1F1F1] rounded-xl">
                <div className="flex justify-between items-center m-5">
                  <div className="font-semibold text-xl">
                    Product Description
                  </div>
                  <div className="flex gap -2">
                    <img src={btn} alt="" />
                    <img src={edit} alt="" />
                  </div>
                </div>
                <hr />
                <div className="flex justify-around mt-5">
                  <div>
                    <label>Brand</label>
                    <br />
                    <input
                      placeholder="Brand"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Stock</label>
                    <br />
                    <input
                      placeholder="Stock"
                      className="placeholder: block w-[200px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex justify-around mt-5">
                  <div>
                    <label>Capacity</label>
                    <br />
                    <input
                      placeholder="Brand"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Stock</label>
                    <br />
                    <input
                      placeholder="Stock"
                      className="placeholder: block w-[200px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex justify-left ml-7 mt-5">
                  <div>
                    <label>Features</label>
                    <br />
                    <input
                      placeholder="Features"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex justify-left ml-7 mt-5 gap-2">
                  <div>
                    <label>Price</label>
                    <br />
                    <input
                      placeholder="Price"
                      className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Offered Price</label>
                    <br />
                    <input
                      placeholder="Offered Price"
                      className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-5 ml-7 font-semibold">Special Service</div>
                <div className="flex gap-2 ml-7 mt-5">
                  <button className="bg-[white] p-5 flex gap-2 rounded-xl">
                    {" "}
                    <img src={truck} alt="" />
                    Free delivery
                  </button>
                  <button className="bg-[white] p-5  flex gap-2  rounded-xl">
                    <img src={warranty} alt="" />6 month warranty{" "}
                  </button>
                </div>
                <div className="flex gap-2 ml-7 mt-5">
                  <button className="bg-[white] p-5 flex gap-2 rounded-xl">
                    {" "}
                    <img src={replacement} alt="" />7 days Replacement
                  </button>
                  <button className="bg-[white] p-5 flex gap-2 rounded-xl">
                    {" "}
                    <img src={rac} alt="" />
                    Get RAC Repair Maintenance Service{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5 mr-5 mt-5">
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
              <div className="text-2xl mb-5 text-[black] font-semibold">
                Total Products
                <br />
                <span className="text-[15px] text-[#525252]">
                  View & edit User List of app..
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
                    className="placeholder: ml-2.5 block w-[350px] rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search in Users"
                  />
                </div>

                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => {
                    setAddproduct(true);
                  }}
                >
                  Add Product
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
                Home Appliance
              </span>
              <span
                onClick={() => setVisible(true)}
                className={`cursor-pointer ${
                  Visible && "underline text-[#165DB2] underline-offset-8"
                }`}
              >
                Domestic Products
              </span>
              <span>Other Products</span>
            </div>
            <hr />
            {Visible ? (
              <>
                {" "}
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-[200px] text-[#6D6D6D]">Product</th>
                      <th className="text-center text-[#6D6D6D] w-[150px]">
                        Brand
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Capacity
                      </th>
                      <th className=" w-[150px] text-center text-[#6D6D6D]">
                        Features
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Stock
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Price
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Offer Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#F5F9FF]">
                      <td className="text-center p-5">LG AIR Conditioner</td>
                      <td className="text-center">LG</td>
                      <td className="text-center">lerem iprum</td>
                      <td className=" text-center">lerem iprum</td>
                      <td className="text-center">45</td>
                      <td className="text-center">Rs.65000</td>
                      <td className="text-center text-[#094DB3]">
                        Rs.65000
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
                      <th className="w-[200px] text-[#6D6D6D]">Product</th>
                      <th className="text-center text-[#6D6D6D] w-[150px]">
                        Brand
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Capacity
                      </th>
                      <th className=" w-[150px] text-center text-[#6D6D6D]">
                        Features
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Stock
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Price
                      </th>
                      <th className="w-[150px] text-center text-[#6D6D6D]">
                        Offer Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.map((products)=>(
                          <tr className="bg-[#F5F9FF]" key={products._id}>
                          <td className="text-center p-5">{products.orderId}</td>
                          <td className=" text-center">LG</td>
                          <td className="text-center">lerem iprum</td>
                          <td className=" text-center">lerem iprum</td>
                          <td className=" text-center">45</td>
                          <td className="text-center">Rs.65000</td>
                          <td className=" text-center text-[#094DB3]">
                            Rs.65000
                          </td>
                        </tr>

                    ))}
                
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

export default TotalProducts;
