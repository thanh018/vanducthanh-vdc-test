import axios from 'axios';
import clone from 'lodash/clone';

import { BASE_API_URL } from 'constants/apiUrl';
import { API_TIMEOUT } from '../constants/common';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  axiosConfig => {
    const config = clone(axiosConfig);
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default apiClient;
