import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session'; // Add this import
import passport from 'passport'; // Add this import

import connectDB from './db/index.db.js'; // Import the database connection
import './config/passport.js'; // Import the passport configuration

import authRoutes from './routes/authRoutes.js';
import externalAuthRoutes from './routes/externalAuth.routes.js';
import otpRoutes from './routes/otpRoutes.js'; // Import OTP routes

dotenv.config({
    path: './.env'
});

connectDB();

const app = express();

// Middleware
app.use(bodyParser.json()); // Uncomment if you need JSON body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.TOKEN_SECRET, resave: false, saveUninitialized: true })); // Use TOKEN_SECRET from .env

const allowedOrigins = ['http://127.0.0.1:5500', 'http://localhost:5500', 'http://127.0.0.1:5501', 'http://localhost:5501', 'http://localhost:8000', 'http://127.0.0.1:8000'];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', authRoutes);
app.use('/api/auth', externalAuthRoutes); // Use the new external authentication routes
app.use('/api/otp', otpRoutes); // Use the OTP routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
