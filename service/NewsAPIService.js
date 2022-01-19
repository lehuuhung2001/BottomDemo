import axios from "axios";
import { BASE_URI, API_KEY } from "../constant";

function newsApiRequest({queryString, date}) {
    return axios.get(`${BASE_URI}/everything?q=${queryString}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`);
}

export default newsApiRequest;