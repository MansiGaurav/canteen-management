import { config } from "dotenv";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import session from "express-session";
import passport from './config/passport.js';
import { errorMiddleware } from "./middlewares/error.middleware.js";
import userRouter from "./routes/user.route.js"
import foodRoutes from "./routes/food.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/order.routes.js"
const app = express();
config({ path: "./.env" })
app.use(express.json({ limit: "256kb" }));
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ================ CORS Configuration ===================
const allowedOrigins = process.env.CORS_ORIGIN.split(",");
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// ================= Health Check Route ===================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "✅ CVRU CMS is successfully running.",
    version: "1.0.0",
    author: "Akriti Sharma (backend)",
    timestamp: new Date().toISOString(),
  });
});

// ================= Routes ===================
app.use("/api/v1/users", userRouter);
app.use("/api/v1/foods", foodRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/orders" , orderRoutes);

app.use(errorMiddleware)
// *End-Of-Neccessary-Middlewares
// *===================================

export { app };