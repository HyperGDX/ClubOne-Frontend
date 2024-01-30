import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 这里可以添加一些请求前的处理
    return config;
  },
  (error) => {
    // 请求错误的处理
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // 这里可以添加一些响应的处理
    return response.data;
  },
  (error) => {
    // 响应错误的处理
    return Promise.reject(error);
  }
);

export default service;
