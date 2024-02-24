import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
// security packages
app.use(cors());
// middleware packages
app.use(express.json());
app.use(cookieParser());
// routes
app.get('/test',(req, res) => {
    res.send('<h1>API is working successfully<h1>')
});
// db config
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB is connected successfully!')
}).catch((error) => {console.log(error.message)})
app.listen(PORT, function(req, res) {
    console.log(`Server is running on port ${PORT}...`);
});
