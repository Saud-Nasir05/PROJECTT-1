import { createSlice } from '@reduxjs/toolkit';
// Yahan removeSavedIdea ko import karna zaroori hai 👇
import { getMatchingIdeas, saveIdeaToProfile, getUserSavedIdeas, removeSavedIdea } from './ideasthunk';

const ideasSlice = createSlice({
    name: 'ideas',
    initialState: {
        matchingIdeas: [], // Jo 3 naye ideas popup honge
        savedIdeas: [],    // Jo user ke dashboard mein show honge
        isLoading: false,
        error: null,
        saveMessage: null,
    },
    reducers: {
        // Agar popups ya errors manually hatane hon
        clearIdeaErrors: (state) => {
            state.error = null;
            state.saveMessage = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // ==========================================
            // 1. GET MATCHING IDEAS (Budget wale 3 ideas)
            // ==========================================
            .addCase(getMatchingIdeas.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getMatchingIdeas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.matchingIdeas = action.payload.responseData; 
            })
            .addCase(getMatchingIdeas.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            
            // ==========================================
            // 2. SAVE IDEA TO PROFILE 
            // ==========================================
            .addCase(saveIdeaToProfile.pending, (state) => {
                state.isLoading = true;
                state.saveMessage = null;
            })
            .addCase(saveIdeaToProfile.fulfilled, (state) => {
                state.isLoading = false;
                state.saveMessage = "Idea successfully saved to your profile! ❤️";
            })
            .addCase(saveIdeaToProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ==========================================
            // 3. GET USER SAVED IDEAS (Dashboard)
            // ==========================================
            .addCase(getUserSavedIdeas.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserSavedIdeas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.savedIdeas = action.payload.responseData;
            })
            .addCase(getUserSavedIdeas.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ==========================================
            // 4. REMOVE SAVED IDEA (Kachra Saaf 🗑️)
            // ==========================================
            .addCase(removeSavedIdea.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(removeSavedIdea.fulfilled, (state, action) => {
                state.isLoading = false;
                // Asli jadoo yahan hai: Jo idea delete hua, usko existing array se bahar nikal do
                state.savedIdeas = state.savedIdeas.filter((idea) => idea._id !== action.payload.ideaId);
                state.saveMessage = "Idea successfully removed! 🗑️";
            })
            .addCase(removeSavedIdea.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { clearIdeaErrors } = ideasSlice.actions;
export default ideasSlice.reducer;