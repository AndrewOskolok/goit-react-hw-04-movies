import axios from "axios";

export const baseImgUrl = "https://image.tmdb.org/t/p/w200/";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`;

export const requestApi = (request, query = "") => {
  return axios.get(request + "?" + apiKey + "&query=" + query);
};
