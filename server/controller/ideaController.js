import { asyncHandler } from "../utilities/asyncHandlerUtility.js";
import { errorHandler } from "../utilities/errorHandlerUtility.js";
import Idea from "../models/Idea.js"; 

//get matching ideas 
//take budget and validate and covert it into nuber
//find ideas according to that budget
//send those ideas in response
export const getMatchingIdeas = asyncHandler(async (req, res, next) => {
    const { budget } = req.body;
    if (!budget) {
        return next(new errorHandler("kindly enter the budget!", 400));
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
            message: "no idea availabe in this budget." 
        });
    }
    res.status(200).json({
        success: true,
        responseData: matchedIdeas
    });
});

//save ideas
//get the id of ideas and user id
//check if idea is already saved by this user
//save that idea into var by searching it through its id
//convet that idea into object format and delete unncessary info
//define template false and store user id intat idea and send response
export const saveIdeaToProfile = asyncHandler(async (req, res, next) => {
    const { templateId } = req.body;
    const userId = req.user._id;

    if (!templateId) {
        return next(new errorHandler("Template ID is missing!", 400));
    }

    const originalTemplate = await Idea.findById(templateId);
    if (!originalTemplate) {
        return next(new errorHandler("couldnt find orignal idea!", 404));
    }

    const alreadySaved = await Idea.findOne({
        userId: userId,
        title: originalTemplate.title, 
        isTemplate: false
    });

    if (alreadySaved) {
        return next(new errorHandler("ideas was already saved", 400));
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
        message: "Idea successfully saved! ",
        responseData: newSavedIdea
    });
});


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


//remove saved idea
//get the idea id from params
//get user id to ensure security (taake koi aur kisi ka idea delete na kar de)
//find and delete the idea
export const removeSavedIdea = asyncHandler(async (req, res, next) => {
    const ideaId = req.params.id; 
    const userId = req.user._id;

    if (!ideaId) {
        return next(new errorHandler("Idea ID is missing !", 400));
    }

    const deletedIdea = await Idea.findOneAndDelete({
        _id: ideaId,
        userId: userId,
        isTemplate: false 
    });

    if (!deletedIdea) {
        return next(new errorHandler("Idea was already deleted!", 404));
    }

    res.status(200).json({
        success: true,
        message: "Idea successfully removed! 🗑️"
    });
});