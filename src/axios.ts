import axios from "axios";


const instance = axios.create({
   baseURL: process.env.REACT_APP_DB_URL
})   



const token = window.localStorage.getItem('token')

if (token) {

   instance.interceptors.request.use((config) => {
      config.headers.Authorization = token;
      return config
   })
}

   

export default instance;