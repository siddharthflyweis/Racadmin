import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import deletebtn from "../Assests/deletebtn.svg";
import editbtn from "../Assests/editbtn.svg";
import bellicon from "../Assests/bellicon.svg";
import upload from "../Assests/upload.svg";
import { useNavigate } from "react-router-dom";
import { Baseurl } from "../Utils/apiService";

const Banners = () => {
  const [addbanner, setAddbanner] = useState(false);
  const [data, setData] = useState([]);

  const [bannertitle, setBannerTitle] = useState();
  const [url, setUrl] = useState();
  const [bannercontent, setbannercontent] = useState();
  const [date, setDate] = useState();
  const [image, setimage] = useState("");

  function fetchbanner() {
    axios
      .get(`${Baseurl}/api/v1/images`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchbanner();
  }, []);

  const navigate = useNavigate();
  function handlesubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("e_bannertitle", bannertitle);
    formData.append("e_url", url);
    formData.append("e_bannercontent", bannercontent);
    formData.append("e_date", date);
    formData.append("e_image", image);
    axios
      .post(`${Baseurl}/api/v1/images`, { Body: formData })
      .then((res) => {
        alert("data added successfully");
        window.location.reload();
        navigate("/Banners");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function handledelete(_id) {
    const confirm = window.confirm("do you want to delete ?");
    if (confirm) {
      axios
        .delete(`${Baseurl}/api/v1/images/${_id}`)
        .then((res) => {
          alert("record had deleted");
          window.location.reload();
          navigate("/Banners");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/Banners");
    }
  }
  return (
    <>
      {addbanner ? (
        <>
          <div className="shadow-2xl rounded h-[700px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5  text-black font-semibold">
                Banners
                <br />
                <span className="text-[15px] text-[#525252]">
                  View, edit or add new product to your app
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button
                  className="text-[#0B50B3] p-2 pl-5 pr-5 rounded-3xl bg-white border border-[#0B50B3]"
                  onClick={() => {
                    setAddbanner(false);
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>
            <hr />
            <form onSubmit={handlesubmit}>
              <div className="flex justify-between gap-5 m-10">
                <div>
                  <label>Banner Title</label>
                  <br />
                  <input
                    value={bannertitle}
                    placeholder="Banner Title"
                    className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setBannerTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label>Date Added</label>
                  <br />
                  <input
                    value={date}
                    type="date"
                    className="placeholder: block w-[150px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label>Url Link</label>
                  <br />
                  <input
                    value={url}
                    placeholder="Url"
                    className="placeholder: block w-[300px] rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="m-10">
                <label>Banner Content</label>
                <br />
                <input
                  value={bannercontent}
                  className="placeholder: block w-full rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setbannercontent(e.target.value)}
                />
              </div>
              <div className="m-10">
                <label>Upload Banner Cover</label>

                <div className="bg-[#E6EEFD] h-[200px] w-[450px]">
                  <div className="p-5 relative rounded-lg h-[200px]">
                    <div className="flex flex-col justify-center text-center mt-10">
                      <label>
                        <input
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          multiple
                          onChange={(e) => setimage(e.target.files[0])}
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

              <div className="flex justify-end gap-5 mr-5">
                <button className="text-[#0B50B3] p-2 pl-5 pr-5 rounded bg-white border border-[#0B50B3]">
                  Cancel
                </button>
                <button className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white flex justify-center items-center gap-2">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="shadow-2xl rounded h-[1000px]">
            <div className="flex  justify-between items-center pt-5 ml-10 mr-10">
              <div className="text-2xl mb-5 font-semibold text-black">
                Banners
                <br />
                <span className="text-[15px] text-[#525252]">
                  View, edit or add new product to your app
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
                    placeholder="Search in Service"
                  />
                </div>

                <button
                  className="bg-[#0B50B3] p-2 pl-5 pr-5 rounded text-white"
                  onClick={() => {
                    setAddbanner(true);
                  }}
                >
                  Add Banner
                </button>
              </div>
            </div>
            <div className="ml-5 mr-5">
              <table className="w-full border-collapse border border-slate-400 ...">
                <thead>
                  <tr className="border-collapse border border-slate-400 ...">
                    <th className="text-center text-[#6D6D6D] w-[100px]">
                      Banner
                    </th>
                    <th className="w-[100px] text-center text-[#6D6D6D]">
                      Title
                    </th>
                    <th className="w-[150px] text-center text-[#6D6D6D]">
                      Url Link
                    </th>
                    <th className="w-[150px] text-center text-[#6D6D6D]">
                      Banner
                    </th>
                  </tr>
                </thead>
                <tbody className="mt-4">
                  {data?.Data?.map((item) => (
                    <tr key={item._id} className="border-t-2 border-b-2 m-5">
                      <td className="w-[100px] h-[100px] text-center p-4">
                        <img src={item.image} alt="" />
                      </td>
                      <td className="w-[100px]  text-center p-4">
                        {item.desc}
                      </td>
                      <td className="w-[150px] text-center p-4">
                        Loreum Ipsum
                      </td>
                      <td className="w-[200px] text-center p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ut suscipit eros.
                      </td>
                      <td className="w-[150px]">
                        <span className="flex ml-20 gap-5">
                          <img
                            src={bellicon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <img
                            src={deletebtn}
                            alt=""
                            className="cursor-pointer"
                            onClick={(e) => handledelete(item._id)}
                          />
                          <img
                            src={editbtn}
                            alt=""
                            className="cursor-pointer"
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Banners;
