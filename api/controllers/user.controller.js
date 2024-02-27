import { StatusCodes } from "http-status-codes";
import { errorHandler } from "../utils/error.js";
import bcyptjs from "bcryptjs";
import User from "../models/user.model.js";
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(
      errorHandler(StatusCodes.UNAUTHORIZED, "You can update only your account")
    );
  }
  try {
    if (req.body.password) {
      req.body.password = bcyptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(StatusCodes.OK).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(
      errorHandler(
        StatusCodes.UNAUTHORIZED,
        "You can delete only your account!"
      )
    );
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json("User has been deleted....");
  } catch (error) {
    next(error);
  }
};
