import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Baseurl } from "../Utils/apiService";
const TotalOrders = () => {
  const [Visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  function fetchOrders() {
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
    fetchOrders();
  }, []);
  return (
    <div className="shadow-2xl rounded">
      <div className="flex justify-between items-center pt-5 ml-10 mr-10">
        <div className="text-2xl mb-5 text-black font-semibold">
          Total Orders
          <br />
          <span className="text-[15px] text-[#525252]">
            View total service/ Shopping orders
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
      <hr />
      <div className="flex gap-4 mt-5 mb-5 ml-10">
        <span
          onClick={() => setVisible(false)}
          className={`cursor-pointer ${
            !Visible && "underline text-[#165DB2] underline-offset-8"
          }`}
        >
          Service Order
        </span>
        <span
          onClick={() => setVisible(true)}
          className={`cursor-pointer ${
            Visible && "underline text-[#165DB2] underline-offset-8"
          }`}
        >
          Shopping Order
        </span>
      </div>
      <hr />
      {Visible ? (
        <>
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[200px] text-[#6D6D6D]">Order ID</th>
                <th className="text-center text-[#6D6D6D] w-[300px]">
                  Order Type
                </th>
                <th className="w-[300px] text-center text-[#6D6D6D]">
                  Address
                </th>
                <th className=" w-[150px] text-left text-[#6D6D6D]">
                  Ordered On
                </th>
                <th className="w-[150px] text-center text-[#6D6D6D]">
                  Delivered On
                </th>
                <th className="w-[150px] text-center text-[#6D6D6D]">Price</th>
                <th className="w-[150px] text-center text-[#6D6D6D]">
                  Order Detail
                </th>
                <th className="w-[150px] text-center text-[#6D6D6D]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F5F9FF]">
                <td className="text-center">#RAC-039292</td>
                <td className="w-[200px] text-center">AC Repair Service</td>
                <td className="w-[200px] text-center">
                  45, Noida Sector <br />
                  55, Noida, UP
                </td>
                <td className="w-[150px] text-center">
                  2nd Feb 2023
                  <br />
                  <span className="text-[#094DB3]">10:30 am</span>
                </td>
                <td className="w-[50px] text-center">
                  2nd Feb 2023
                  <br />
                  <span className="text-[#094DB3]">10:30 am</span>
                </td>
                <td className="w-[50px] text-center">Rs.650</td>
                <td className="w-[50px] text-center">Loreum Ipsum</td>
                <td className="w-[50px] text-center text-[#094DB3]">
                  Confirmed
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
                <th className="w-[200px] text-[#6D6D6D]">Order ID</th>
                <th className="text-center text-[#6D6D6D] w-[300px]">
                  Order Type
                </th>
                <th className="w-[300px] text-center text-[#6D6D6D]">
                  Address
                </th>
                <th className=" w-[150px] text-left text-[#6D6D6D]">
                  Ordered On
                </th>
                <th className="w-[150px] text-center text-[#6D6D6D]">
                  Completed On
                </th>
                <th className="w-[150px] text-center text-[#6D6D6D]">Price</th>
                <th className="w-[150px] text-center text-[#6D6D6D]">
                  Order Detail
                </th>
                <th className="w-[150px] text-center text-[#6D6D6D]">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((order) => (
                <tr className="bg-[#F5F9FF]" key={order._id}>
                  <td className="text-center">{order.orderId}</td>
                  <td className="w-[200px] text-center">{order.orderType}</td>
                  <td className="w-[200px] text-center">
                    45, Noida Sector <br />
                    55, Noida, UP
                  </td>
                  <td className="w-[150px] text-center">
                    2nd Feb 2023
                    <br />
                    <span className="text-[#094DB3]">10:30 am</span>
                  </td>
                  <td className="w-[50px] text-center">
                    2nd Feb 2023
                    <br />
                    <span className="text-[#094DB3]">10:30 am</span>
                  </td>
                  <td className="w-[50px] text-center">Rs.650</td>
                  <td className="w-[50px] text-center">Loreum Ipsum</td>
                  <td className="w-[50px] text-center text-[#094DB3]">
                    {order.orderStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TotalOrders;
