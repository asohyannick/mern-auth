import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { updateUser, deleteUser } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/");
router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
export default router;
