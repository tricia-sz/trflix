import axios from "axios";
//BASE DA URL: https://api.themoviedb.org/3
//BASE DA URL: https://api.themoviedb.org/3/discover/movie


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api