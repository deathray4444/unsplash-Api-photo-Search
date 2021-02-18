import axios from "axios";
import { BASE_API_URL } from "../constants/Consts";

const Api = {
  getPhotos: (data) =>
    axios({
      url: BASE_API_URL + "/photos",
      method: "get",
      params: data,
    }),
  searchPhotos: (data) =>
    axios({
      url: BASE_API_URL + "/search/photos",
      method: "get",
      params: data,
    }),
};

export default Api;
