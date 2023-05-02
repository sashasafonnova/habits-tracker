import axios from "axios";


const instance = axios.create({
   baseURL: process.env.REACT_APP_DB_URL
})



const token = window.localStorage.getItem('token')

if (token) {
   const parsedToken = JSON.parse(token)

   instance.interceptors.request.use((config) => {
      config.headers.Authorization = parsedToken;
      return config
   })
}
   
   

export default instance;