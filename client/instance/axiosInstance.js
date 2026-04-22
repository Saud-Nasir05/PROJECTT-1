import axios from 'axios';

const axiosInstance = axios.create({
    // Ab tera backend Vercel par zinda hai! 🚀
    baseURL: 'https://projectt-1.vercel.app', 
    
    // YEH BOHT ZAROORI HAI 👇
    // Iske bina tera browser cookies (JWT Token) backend ko nahi bhejega, 
    // aur tera "isAuth" middleware bar bar fail ho jayega.
    withCredentials: true, 
});

export default axiosInstance;