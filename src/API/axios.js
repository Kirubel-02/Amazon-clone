import axios from "axios";

// Set up the axios instance with baseURL for local development
const axiosInstance = axios.create({
  // Make sure this URL matches the deployed or local Firebase function URL
  // baseURL: "http://127.0.0.1:5001/clone-bb050/us-central1/api",
  // Alternatively, if deploying, set this to your live API URL by render:
  baseURL: "https://amazon-api-hwai.onrender.com",

  // Optional timeout and headers can be adjusted based on requirements
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // If there is a CORS error or server issue, log it for debugging
    if (error.response) {
      console.error("Response Error:", error.response.data);
    } else if (error.request) {
      console.error("Request Error:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }
    // Return the error to handle it in the catch block of the request
    return Promise.reject(error);
  }
);

export { axiosInstance };
