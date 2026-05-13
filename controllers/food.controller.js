import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import ErrorHandler from "../middlewares/error.middleware.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { cookieToken } from "../utils/cookie.utils.js";

import Food from "../models/food.model.js";

// =====================================
// CREATE FOOD
// =====================================
export const createFood = asyncHandler(async (req, res, next) => {

    const {
        name,
        description,
        price,
        category,
        image,
        stock
    } = req.body;

    // Validation
    if (
        !name ||
        !description ||
        !price ||
        !category
    ) {
        return next(
            new ErrorHandler(
                "Please provide all required food details",
                400
            )
        );
    }

    // Create Food
    const food = await Food.create({
        name,
        description,
        price,
        category,
        image,
        stock
    });

    res.status(201).json({
        success: true,
        message: "Food item created successfully",
        food
    });

});



// =====================================
// GET ALL FOODS
// =====================================
export const getAllFoods = asyncHandler(async (req, res, next) => {

    const foods = await Food.find()
        .sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        totalFoods: foods.length,
        foods
    });

});



// =====================================
// GET SINGLE FOOD
// =====================================
export const getSingleFood = asyncHandler(async (req, res, next) => {

    const food = await Food.findById(req.params.id);

    if (!food) {
        return next(
            new ErrorHandler(
                "Food item not found",
                404
            )
        );
    }

    res.status(200).json({
        success: true,
        food
    });

});



// =====================================
// UPDATE FOOD
// =====================================
export const updateFood = asyncHandler(async (req, res, next) => {

    const food = await Food.findById(req.params.id);

    if (!food) {
        return next(
            new ErrorHandler(
                "Food item not found",
                404
            )
        );
    }

    const updatedFood = await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    res.status(200).json({
        success: true,
        message: "Food updated successfully",
        updatedFood
    });

});



// =====================================
// DELETE FOOD
// =====================================
export const deleteFood = asyncHandler(async (req, res, next) => {

    const food = await Food.findById(req.params.id);

    if (!food) {
        return next(
            new ErrorHandler(
                "Food item not found",
                404
            )
        );
    }

    await food.deleteOne();

    res.status(200).json({
        success: true,
        message: "Food item deleted successfully"
    });

});



// =====================================
// TOGGLE FOOD AVAILABILITY
// =====================================
export const toggleFoodAvailability = asyncHandler(async (req, res, next) => {

    const food = await Food.findById(req.params.id);

    if (!food) {
        return next(
            new ErrorHandler(
                "Food item not found",
                404
            )
        );
    }

    // Toggle Boolean
    food.isAvailable = !food.isAvailable;

    await food.save();

    res.status(200).json({
        success: true,
        message: `Food is now ${
            food.isAvailable ? "Available" : "Unavailable"
        }`,
        food
    });

});



// =====================================
// GET AVAILABLE FOODS ONLY
// =====================================
export const getAvailableFoods = asyncHandler(async (req, res, next) => {

    const foods = await Food.find({
        isAvailable: true
    }).sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        totalFoods: foods.length,
        foods
    });

});



// =====================================
// SEARCH FOOD
// =====================================
export const searchFoods = asyncHandler(async (req, res, next) => {

    const keyword = req.query.keyword;

    const foods = await Food.find({
        name: {
            $regex: keyword,
            $options: "i"
        }
    });

    res.status(200).json({
        success: true,
        totalFoods: foods.length,
        foods
    });

});