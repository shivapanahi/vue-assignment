import axios from "axios";

/**
 * Create an Axios instance with base configurations
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://dummyjson.com", 
  timeout: 5000, 
  headers: {
    "Content-Type": "application/json", 
  },
});

/**
 * Request Interceptor
 * - Add Authorization tokens or other headers if required
 */
api.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);
    // Example: Adding Authorization header
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * - Handle global errors or responses
 */
api.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response; 
  },
  (error) => {
    console.error("Response error:", error.response || error);
    if (error.response) {
      if (error.response.status === 401) {
        alert("Unauthorized access. Redirecting to login.");
      }
      if (error.response.status === 500) {
        alert("Server error. Please try again later.");
      }
    }

    return Promise.reject(error); 
  }
);

export default api;

  