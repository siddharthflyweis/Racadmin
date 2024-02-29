import axios from "axios";
export const Baseurl = process.env.REACT_APP_API_BASE_URL;
// console.log(Baseurl);

/////// Total Users Api Starts Here /////////////////
export const getTotalUsers = () => {
  return axios
    .get(`${Baseurl}api/v1/jobportall`)
    .then((res) => {
      return res.data; // Return the data from the response
    })
    .catch((error) => {
      throw error; // Throw the error for handling in the calling code
    });
};

/////////// Banner Api Sections ///////////////////////

export const getBanner = () => {
  return axios
    .get(`${Baseurl}api/v1/images`)
    .then((res) => {
      return res.data; // Return the data from the response
    })
    .catch((error) => {
      throw error; // Throw the error for handling in the calling code
    });
};

export const deleteBanner = (id) => {
  return axios
    .delete(`${Baseurl}api/v1/images/${id}`)
    .then((res) => {
      return res.data; // Return data from the response if necessary
    })
    .catch((error) => {
      throw error; // Throw the error for handling in the calling code
    });
};
