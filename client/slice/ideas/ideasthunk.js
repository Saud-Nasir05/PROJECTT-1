import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../instance/axiosInstance'; // Tera custom axios

// 1. Get Matching Ideas (Budget ki base par 3 ideas lana)
export const getMatchingIdeas = createAsyncThunk(
    'ideas/getMatchingIdeas',
    async ({ budget }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/api/v1/idea/getMatchingIdeas', { budget });
            return response.data; // Yeh seedha action.payload mein jayega
        } catch (error) {
            // Agar backend se koi error aaya (jaise 404), toh usko properly pakarna
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch ideas');
        }
    }
);

// 2. Save Idea To Profile (Photocopy logic ko hit marna)
export const saveIdeaToProfile = createAsyncThunk(
    'ideas/saveIdeaToProfile',
    async ({ templateId }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/api/v1/idea/saveIdeaToProfile', { templateId });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to save idea');
        }
    }
);

// 3. Get User Saved Ideas (Dashboard ke liye)
export const getUserSavedIdeas = createAsyncThunk(
    'ideas/getUserSavedIdeas',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/api/v1/idea/getUserSavedIdeas');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to load saved ideas');
        }
    }
);

// 4. Remove Saved Idea (Idea ko delete karne ke liye)
export const removeSavedIdea = createAsyncThunk(
    'ideas/removeSavedIdea',
    async (ideaId, { rejectWithValue }) => {
        try {
            // Note: Template string use kar rahe hain ID pass karne ke liye
            const response = await axiosInstance.delete(`/api/v1/idea/remove/${ideaId}`);
            
            // Hum ideaId ko bhi return kar rahe hain taake Redux Slice mein 
            // is id wale idea ko array se filter karke nikal sakein bina page refresh kiye
            return { data: response.data, ideaId }; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to remove idea');
        }
    }
);