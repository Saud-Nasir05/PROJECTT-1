import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './userThunk'; // Yahan logoutUser import kiya hai

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null, 
        isLoading: false,
        error: null,
        successMessage: null,
    },
    reducers: {
        clearUserErrors: (state) => {
            state.error = null;
            state.successMessage = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // ==========================================
            // 1. REGISTER CASES
            // ==========================================
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfo = action.payload.responseData.newUser; 
                state.successMessage = "Account successful ban gaya bhai! 🎉";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ==========================================
            // 2. LOGIN CASES
            // ==========================================
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfo = action.payload.responseData.user; 
                state.successMessage = "Login successful! 🚀";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ==========================================
            // 3. LOGOUT CASES (Naya Jadoo 🪄)
            // ==========================================
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                // Logout hotay hi saara data ura do (null kar do)
                state.userInfo = null; 
                state.error = null;
                state.successMessage = "Logged out successfully!";
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                // Agar backend par koi issue bhi ho, hum UI se user ko hata denge security ke liye
                state.userInfo = null; 
                state.error = action.payload;
            });
    }
});

// Yahan se static logout hata diya kyunke ab hum Thunk use kar rahe hain
export const { clearUserErrors } = userSlice.actions; 
export default userSlice.reducer;