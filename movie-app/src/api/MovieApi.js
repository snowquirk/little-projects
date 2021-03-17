import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

const api_key = process.env.REACT_APP_API_KEY;

export const getMovies = (url, params) => {
  return axios.get(`${baseURL}${url}`, {
    params: {
      ...params,

      api_key,
    },
  });
};
