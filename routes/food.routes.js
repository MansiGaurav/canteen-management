import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import passport from '../config/passport.js';

import {
  createFood,
  getAllFoods,
  getSingleFood,
  updateFood,
  deleteFood,
  toggleFoodAvailability,
} from "../controllers/food.controller.js";

import { adminOnly } from "../middlewares/admin.middleware.js";
const router = express.Router();

// GET ALL FOODS
//router.get("/", getAllFoods);
router.route("/").get(getAllFoods)    //CHECKED


// GET SINGLE FOOD
router.route("/:id").get(getSingleFood)    //CHECKED
//router.get("/:id", getSingleFood);

// ================================
// ADMIN ROUTES
// ================================

// CREATE FOOD
router.route("/").post(verifyJWT,createFood)

// UPDATE FOOD
router.route("/:id").put(verifyJWT, updateFood);

// DELETE FOOD
router.route(
  "/:id").delete(
  verifyJWT,
  deleteFood
);

// TOGGLE AVAILABILITY
router.route(
  "/availability/:id").put(
  verifyJWT,
  toggleFoodAvailability
);

export default router;