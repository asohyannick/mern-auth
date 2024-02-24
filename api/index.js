import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js';
import { StatusCodes } from 'http-status-codes';
import { signup } from './controllers/auth.controller.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
// security packages
app.use(cors());
// middleware packages
app.use(express.json());
app.use(cookieParser());
// routes
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
// db config
// custom middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode ||  StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal  Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB is connected successfully!')
}).catch((error) => {console.log(error.message)})
app.listen(PORT, function(req, res) {
    console.log(`Server is running on port ${PORT}...`);signup
});
