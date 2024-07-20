import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()
const NEXT_PUBLIC_BACKEND_ADDRESS = process.env.NEXT_PUBLIC_BACKEND_ADDRESS
export const axiosInstance = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_ADDRESS,
});



 


