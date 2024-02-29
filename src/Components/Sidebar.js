import dashboard from "../Assests/dashboard.svg";
import totaluser from "../Assests/totaluser.svg";
import totalpartner from "../Assests/totalpartner.svg";
import totalorder from "../Assests/totalorder.svg";
import refercopon from "../Assests/refercoupon.svg";
import totalbooking from "../Assests/totalbooking.svg";
import jobinfo from "../Assests/jobinfo.svg";
import setting from "../Assests/setting.svg";
import notification from "../Assests/notification.svg";
import allproduct from "../Assests/allproducts.svg";
import banner from "../Assests/banner.svg";
import todolist from "../Assests/todolist.svg";
import allfiles from "../Assests/allfiles.svg";
import allpermissions from "../Assests/allpermissions.svg";
import racrepair from "../Assests/racrepair.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-t  from-[#75D1A4] to-[#0A4FB3] h-[1000px]">
        <div className="text-center text-white text-2xl pt-10">Admin</div>
        <ul className="">
          <Link to="/dashboard">
            <li className="flex pl-[65px] pt-[12px] pb-[12px] mt-10 items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={dashboard} alt="" />

              <span className="text-white ml-2 font-semibold " >Dashboard</span>
            </li>
          </Link>
          <Link to="/TotalUsers">
            <li className="flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={totaluser} alt="" />

              <div className="text-white ml-2 font-semibold">Total Users</div>
            </li>
          </Link>
          <Link to="/TotalPartners">
            <li className="flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={totalpartner} alt="" />

              <span className="text-white ml-2 font-semibold">
                Total Partners
              </span>
            </li>
          </Link>
          <Link to="/TotalOrders">
            <li className="flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4] ">
              <img src={totalorder} alt="" />

              <span className="text-white ml-2 font-semibold">
                Total Orders
              </span>
            </li>
          </Link>
          <Link to="TotalRefer">
            <li className="flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={refercopon} alt="" />

              <span className="text-white ml-2 font-semibold">
                Refers/Coupon
              </span>
            </li>
          </Link>
          <Link to="/TotalBookings">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={totalbooking} alt="" />

              <span className="text-white ml-2 font-semibold">
                Total Bookings
              </span>
            </li>
          </Link>
          <Link to="/jobsinfo">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={jobinfo} alt="" />

              <span className="text-white ml-2 font-semibold">Jobs INfo</span>
            </li>{" "}
          </Link>
          <Link to="/Allservices">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={setting} alt="" />

              <span className="text-white ml-2 font-semibold">
                All Services
              </span>
            </li>
          </Link>
          <Link to="/Notification">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={notification} alt="" />

              <span className="text-white ml-2 font-semibold">
                Notification
              </span>
            </li>{" "}
          </Link>
          <Link to="/TotalProducts">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={allproduct} alt="" />

              <span className="text-white ml-2 font-semibold">
                All Products
              </span>
            </li>{" "}
          </Link>
          <Link to="/Banners">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4]">
              <img src={banner} alt="" />

              <span className="text-white ml-2 font-semibold">Banners</span>
            </li>{" "}
          </Link>
          <Link to="/Todolist">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4] ">
              <img src={todolist} alt="" />

              <span className="text-white ml-2 font-semibold">To-Do List</span>
            </li>
          </Link>
          <Link to="/Allfiles">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4] ">
              <img src={allfiles} alt="" />

              <span className="text-white ml-2 font-semibold">All Files</span>
            </li>
          </Link>
          <Link to="/Permissions">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer  hover:bg-[#75D1A4]">
              <img src={allpermissions} alt="" />

              <span className="text-white ml-2 font-semibold">Permissions</span>
            </li>
          </Link>
          <Link to="Racrepaircenter">
            <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#75D1A4] ">
              <img src={racrepair} alt="" />

              <span className="text-white ml-2 font-semibold">
                Rac Repair Center
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
