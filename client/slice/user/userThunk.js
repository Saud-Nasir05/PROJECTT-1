import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../instance/axiosInstance'; // Apna custom axios import karo

// 1. Register User Thunk
export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            // userData mein { name, email, password } aayega frontend se
            const response = await axiosInstance.post('/api/v1/user/register', userData);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Registration failed bhai!');
        }
    }
);

// 2. Login User Thunk
export const loginUser = createAsyncThunk(
    'user/login',
    async (userData, { rejectWithValue }) => {
        try {
            // userData mein { email, password } aayega
            const response = await axiosInstance.post('/api/v1/user/login', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Login failed! Email ya password ghalat hai.');
        }
    }
);

// 3. Logout User Thunk
export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            // Backend ke logout route ko hit karo taake cookie clear ho jaye
            // Note: Agar backend route POST hai toh .post() lagana, agar GET hai toh .get()
            const response = await axiosInstance.get('/api/v1/user/logout'); 
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Logout failed bhai!');
        }
    }
);