import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import aircontioner from "../Assests/Allservices/airconditioner.svg";
import refridgerator from "../Assests/Allservices/refridgerator.svg";
import washgingmachine from "../Assests/Allservices/washingmachine.svg";
import television from "../Assests/Allservices/Television.svg";
import microwave from "../Assests/Allservices/microwave.svg";
import waterpurifier from "../Assests/Allservices/waterpurifier.svg";
import geyser from "../Assests/Allservices/geyser.svg";
import electrician from "../Assests/Allservices/electician.svg";
import painter from "../Assests/Allservices/painter.svg";
import carpanter from "../Assests/Allservices/carpanter.svg";
import plumber from "../Assests/Allservices/plumber.svg";
import aircondioner from "../Assests/Allservices/aircondioner.svg";
import refidgecomerical from "../Assests/Allservices/refridgecommercal.svg";
import kitchen from "../Assests/Allservices/kitchencommerical.svg";
import racinstitude from "../Assests/Allservices/Racrepairinsitude.svg";
import bike from "../Assests/Allservices/bike.svg";
import car from "../Assests/Allservices/car.svg";
import amc from "../Assests/Allservices/Amc.svg";
import acrent from "../Assests/Allservices/acrent.svg";

const Allservices = () => {
  const [selectedService, setSelectedService] = useState("Domestic Repair");
  const [showModal, setShowModal] = useState(false);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Service
                    <br />
                    <span className="text-[15px] text-[#525252]">
                      View, edit or add new services to your app
                    </span>
                  </h3>
                </div>
                <hr />
                <div className="ml-10 mt-10 text-2xl font-semibold">
                  {" "}
                  Service Category
                </div>
                <div className="flex gap-10 mt-5 mb-5 ml-10">
                  <span className="cursor-pointer">Domestic Repair</span>
                  <span className="cursor-pointer">Home maintenance</span>
                  <span className="cursor-pointer">Commercial</span>
                  <span className="cursor-pointer">Educational</span>
                  <span className="cursor-pointer">Mechanic</span>
                  <span className="cursor-pointer">Other Services</span>
                </div>

                <div className="flex justify-around flex-wrap gap-5 mt-10">
                  <div>
                    <label>Service Type</label>
                    <br />
                    <input
                      placeholder="Service Type"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Service Name</label>
                    <br />
                    <input
                      placeholder="Service Name"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div>
                    <label>Serviceable Product</label>
                    <br />
                    <input
                      placeholder="Serviceable Product"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Price Range</label>
                    <br />
                    <input
                      placeholder="Price Range"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Location</label>
                    <br />
                    <input
                      placeholder="Location"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Owner</label>
                    <br />
                    <input
                      placeholder="Owner"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>First Line Address</label>
                    <br />
                    <input
                      placeholder="First Line Address"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div>
                    <label>Second Line Address</label>
                    <br />
                    <input
                      placeholder="Second Line Address"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label>Pin Code</label>
                    <br />
                    <input
                      placeholder="Pin Code"
                      className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="text-2xl font-semibold ml-10 mt-5">
                  Service Details:
                </div>
                <div className="bg-[#F8FAFC] ml-10 mr-10 p-5 rounded-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vulputate turpis elit, quis pellentesque ante
                  bibendum nec. In posuere finibus risus auctor auctor.
                </div>

                <div className="flex justify-end gap-5 m-5">
                  <button
                    className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]"
                    onClick={() => setShowModal(false)}
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
        <div className="shadow-2xl rounded h-[800px]">
          <div className="flex justify-between ml-10 mr-10 items-center pt-5">
            <div className="text-2xl mb-5 text-[#525252]">
              All Services
              <br />
              <span className="text-[15px]">
                View, edit or add new services to your app
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
                onClick={() => setShowModal(true)}
              >
                Add Service
              </button>
            </div>
          </div>
          <hr />
          <div className="flex gap-20 mt-5 mb-5 ml-10">
            <span
              onClick={() => handleServiceClick("Domestic Repair")}
              className="cursor-pointer"
            >
              Domestic Repair
            </span>
            <span
              onClick={() => handleServiceClick("Home maintenance")}
              className="cursor-pointer"
            >
              Home maintenance
            </span>
            <span
              onClick={() => handleServiceClick("Commercial")}
              className="cursor-pointer"
            >
              Commercial
            </span>
            <span
              onClick={() => handleServiceClick("Educational")}
              className="cursor-pointer"
            >
              Educational
            </span>
            <span
              onClick={() => handleServiceClick("Mechanic")}
              className="cursor-pointer"
            >
              Mechanic
            </span>
            <span
              onClick={() => handleServiceClick("Other Services")}
              className="cursor-pointer"
            >
              Other Services
            </span>
          </div>
          <hr />

          <div>
            {selectedService === "Domestic Repair" && (
              <>
                <div className="flex gap-10 ml-10 mt-10 flex-wrap ">
                  <div className="cursor-pointer">
                    <div className="shadow-lg w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img
                        src={aircontioner}
                        className="animate-bounce"
                        alt=""
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Air Conditioner
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img
                        src={refridgerator}
                        className="animate-bounce"
                        alt=""
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Refrigerator Repair
                    </span>
                  </div>

                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img
                        src={washgingmachine}
                        alt=""
                        className="animate-bounce"
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Washing Machine
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img src={television} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Television Repair
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img src={microwave} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Television Repair
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img
                        src={waterpurifier}
                        alt=""
                        className="animate-bounce"
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Television Repair
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg w-[150px] h-[150px] rounded flex justify-center items-center">
                      <img src={geyser} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Geyser Repair
                    </span>
                  </div>
                </div>
              </>
            )}
            {selectedService === "Home maintenance" && (
              <>
                <div className="flex gap-10 ml-10 mt-10 flex-wrap ">
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img
                        src={electrician}
                        alt=""
                        className="animate-bounce"
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Electrician
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img src={painter} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Painter
                    </span>
                  </div>

                  <div className="cursor-pointer">
                    <div className="shadow-lg w-[150px] h-[150px] rounded flex justify-center items-center  ">
                      <img src={carpanter} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Carpenter
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center  ">
                      <img src={plumber} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Plumber
                    </span>
                  </div>
                </div>
              </>
            )}
            {selectedService === "Commercial" && (
              <>
                <div className="flex gap-10 ml-10 mt-10 flex-wrap ">
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img
                        src={aircondioner}
                        alt=""
                        className="animate-bounce"
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      AC Commercial
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img
                        src={refidgecomerical}
                        alt=""
                        className="animate-bounce"
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Refrigerator Commercial
                    </span>
                  </div>

                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center  ">
                      <img src={kitchen} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Kitchen Commercial
                    </span>
                  </div>
                </div>
              </>
            )}

            {selectedService === "Educational" && (
              <>
                <div className="flex gap-10 ml-10 mt-10 flex-wrap ">
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center  ">
                      <img
                        src={racinstitude}
                        alt=""
                        className="animate-bounce"
                      />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      RAC Repair Institute
                    </span>
                  </div>
                </div>
              </>
            )}
            {selectedService === "Mechanic" && (
              <>
                <div className="flex gap-10 ml-10 mt-10 flex-wrap ">
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img src={bike} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Bike Services
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img src={car} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      Car Services
                    </span>
                  </div>
                </div>
              </>
            )}
            {selectedService === "Other Services" && (
              <>
                <div className="flex gap-10 ml-10 mt-10 flex-wrap ">
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img src={amc} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      AMC Services
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <div className="shadow-lg  w-[150px] h-[150px] rounded flex justify-center items-center ">
                      <img src={acrent} alt="" className="animate-bounce" />
                    </div>
                    <span className="flex justify-center mt-5 text-[#8C8C8C] font-extrabold">
                      AC Rent Service
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default Allservices;
