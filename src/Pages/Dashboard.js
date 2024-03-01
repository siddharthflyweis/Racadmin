import userbase from "../Assests/userbase.svg";
import higher from "../Assests/higher.svg";
import partner from "../Assests/partner.svg";
import jobs from "../Assests/jobs.svg";
import products from "../Assests/products.svg";
import orders from "../Assests/orders.svg";
import service from "../Assests/service.svg";
import reffer from "../Assests/reffer.svg";

// import { getTotalUsers } from "../Utils/apiService";
// import { useEffect, useState } from "react";

const Dashboard = () => {
  // const [data, setData] = useState(null);

  // Fetch data when the component mounts
  // async function fetchData() {
  //   try {
  //     const result = await getTotalUsers();
  //     setData(result)
  //     console.log(result); // Make sure result is not undefined
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect block
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="shadow-2xl p-10 rounded">
        <div className="text-2xl mb-5 text-black font-semibold">Dashboard</div>
        <hr />

        <div className="grid grid-row-2 gap-5">
          <div className="mt-5 flex gap-5 ml-5 flex-wrap">
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300 ">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL USERS
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={userbase} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL PARTNERS
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={partner} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL JOBS
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={jobs} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL Products
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={products} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL ORDERS
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={orders} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL SERVICES
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={service} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
            <div className="w-[340px] h-[200px] shadow-lg rounded overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#0A4FB3] to-[#75D1A4] rounded flex justify-between p-2 hover:bg-gradient-to-l from-[#0A4FB3] to-[#75D1A4]">
                <span className="text-white font-semibold ">
                  TOTAL REFFERS
                  <br />
                  <span>click</span>&nbsp;
                  <span className="text-[#C2C2C1]">to view user list</span>
                </span>

                <img src={reffer} alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <div className="bg-[#B2B2B226] w-[280px] h-[70px] flex justify-center items-center rounded-3xl text-2xl">
                  <span className="text-[#6F6F6F]">12,23,450</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <img src={higher} alt="" />
                &nbsp;
                <span className="text-[#6F6F6F]">
                  70% Higher Than last moth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
