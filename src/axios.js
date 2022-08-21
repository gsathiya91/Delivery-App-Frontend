import axios from "axios";

const instance = axios.create({
    baseURL: "https://delivery-app-mern-backend.herokuapp.com",
});

export default instance;