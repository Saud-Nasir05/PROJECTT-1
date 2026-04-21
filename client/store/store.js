import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/user/userSlice';
import ideasReducer from '../slice/ideas/ideasSlice'; // Yeh import laazmi hai

 const store = configureStore({
    reducer: {
        user: userReducer,
        ideas: ideasReducer, // Aur yeh yahan add karna hai
    },
});
export default store