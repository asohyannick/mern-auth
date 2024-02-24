import User from '../models/user.model.js';
import { StatusCodes } from 'http-status-codes';
import bcyptjs from 'bcryptjs';
export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcyptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(StatusCodes.OK).json('User created successfully')
    } catch(error) {
        res.status(500).json(error.message);
    }
}