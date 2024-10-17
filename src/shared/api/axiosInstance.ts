import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://grabbme.store/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
