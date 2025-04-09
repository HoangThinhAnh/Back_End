import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./Config/db.js";
import authRouter from "./Routers/authRouter.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRouter);

// Connect to MongoDB
const startServer = async () => {
  try {
    await connectMongoDB(process.env.MONGODB_URI);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
