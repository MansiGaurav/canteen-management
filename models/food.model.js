import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Food name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be greater than 0"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snacks",
        "Drinks",
        "Desserts",
      ],
    },

    image: {
      type: String,
      default:
        "https://via.placeholder.com/300x300.png?text=Food+Image",
    },

    stock: {
      type: Number,
      default: 100,
    },

    rating: {
      type: Number,
      default: 4.5,
      min: 1,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

export default Food;