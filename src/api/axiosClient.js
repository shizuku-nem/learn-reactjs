import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://api.ezfrontend.com/',
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors: config request/ response
// Add a request interceptor (token,...)
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor (format data...)
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export default axiosClient;
