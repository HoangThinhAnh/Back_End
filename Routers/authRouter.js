import express from "express";
import { register, login } from "../Controllers/authController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes example
router.get("/user-profile", auth, (req, res) => {
  res.json({ message: "User profile accessed", userId: req.user.userId });
});

router.get("/admin-dashboard", auth, isAdmin, (req, res) => {
  res.json({ message: "Admin dashboard accessed" });
});

export default router;
