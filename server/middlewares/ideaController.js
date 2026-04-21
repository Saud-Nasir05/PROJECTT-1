import { asyncHandler } from "../utilities/asyncHandlerUtility.js";


import { errorHandler } from "../utilities/errorHandlerUtility.js";
import Idea from "../models/Idea.js"; // Apne Idea model ka path check kar lena

//get matching ideas 
//take budget and validate and covert it into nuber
//find ideas according to that budget
//send those ideas in response
export const getMatchingIdeas = asyncHandler(async (req, res, next) => {
    const { budget } = req.body;
    if (!budget) {
        return next(new errorHandler("Budget batana zaroori hai bhai!", 400));
    }
    const numericBudget = Number(budget);
    const matchedIdeas = await Idea.find({
        isTemplate: true,
        minBudget: { $lte: numericBudget },
        maxBudget: { $gte: numericBudget }
    }).limit(3); 
    if (matchedIdeas.length === 0) {
        return res.status(404).json({ 
            success: false, 
            message: "Is budget mein filhal koi idea nahi mila." 
        });
    }
    res.status(200).json({
        success: true,
        responseData: matchedIdeas
    });
});

//save ideas
//get the id of ideas and user id
//save that idea into var by searching it through its id
//convet that idea into object format and delete unncessary info
//
export const saveIdeaToProfile = asyncHandler(async (req, res, next) => {
    const { templateId } = req.body;
    const userId = req.user._id;
    if (!templateId) {
        return next(new errorHandler("Template ID missing hai!", 400));
    }
    const originalTemplate = await Idea.findById(templateId);
    if (!originalTemplate) {
        return next(new errorHandler("Original Idea nahi mila!", 404));
    }
    const ideaData = originalTemplate.toObject();
    delete ideaData._id;
    delete ideaData.createdAt;
    delete ideaData.updatedAt;
    const newSavedIdea = await Idea.create({
        ...ideaData,
        isTemplate: false, 
        userId: userId,
        status: 'saved' 
    });
    res.status(201).json({
        success: true,
        message: "Idea successfully saved! ❤️",
        responseData: newSavedIdea
    });
});

//get saved ideas
export const getUserSavedIdeas = asyncHandler(async (req, res, next) => {
    const userId = req.user._id; 
    const savedIdeas = await Idea.find({
        userId: userId,
        isTemplate: false 
    });
    res.status(200).json({
        success: true,
        responseData: savedIdeas
    });
});
