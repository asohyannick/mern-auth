import { StatusCodes } from "http-status-codes";
import {errorHandler} from '../utils/error.js';
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(StatusCodes.UNAUTHORIZED, 'Access denied'))
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return next(errorHandler(errorHandler(StatusCodes.UNAUTHORIZED, 'Token is valid')));
    req.user = user;
    next();
  });
};
