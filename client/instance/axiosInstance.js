import axios from 'axios';

const axiosInstance = axios.create({
    // Tera backend 8000 port par chal raha hai
    baseURL: 'http://localhost:8000', 
    
    // YEH BOHT ZAROORI HAI 👇
    // Iske bina tera browser cookies (JWT Token) backend ko nahi bhejega, 
    // aur tera "isAuth" middleware bar bar fail ho jayega.
    withCredentials: true, 
});

export default axiosInstance;