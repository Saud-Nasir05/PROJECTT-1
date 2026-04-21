import express from "express";
// Yahan removeSavedIdea ko import mein add kar liya hai 👇
import { getMatchingIdeas, getUserSavedIdeas, saveIdeaToProfile, removeSavedIdea } from "../controller/ideaController.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 1. PUBLIC ROUTE (Isme isAuth nahi hoga taake aam log ideas dekh sakein)
router.post("/getMatchingIdeas", getMatchingIdeas);

// 2. PROTECTED ROUTES (Inme isAuth laazmi hai, kyunke user account mein save ho raha hai)
router.post("/saveIdeaToProfile", isAuth, saveIdeaToProfile);

router.get("/getUserSavedIdeas", isAuth, getUserSavedIdeas);

// 🔥 NAYA ROUTE: DELETE IDEA YAHAN HAI 👇
// Frontend se axiosInstance.delete(`/api/v1/idea/remove/${ideaId}`) hit hoga
router.delete("/remove/:id", isAuth, removeSavedIdea);

export default router;