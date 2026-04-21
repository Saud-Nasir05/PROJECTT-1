import { asyncHandler } from "../utilities/asyncHandlerUtility.js";
import { errorHandler } from "../utilities/errorHandlerUtility.js";
import jwt from "jsonwebtoken";

export const isAuth = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return next(new errorHandler("Token missing bhai! Login karo.", 401));
    }
    
    try {
        // Agar token valid hai toh verify chalega
        const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = tokenData;
        next();
    } catch (error) {
        // Agar expire ya galat hua toh app crash nahi hogi, yahan aayegi
        return next(new errorHandler("Invalid ya expired token!", 401));
    }
});