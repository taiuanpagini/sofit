import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sofit-mobile-challenge.herokuapp.com/',
  timeout: 20000,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default api;
