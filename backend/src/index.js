import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import categoryRouter from "./routers/categoryRouters.js";

dotenv.config();

const app = express();

// Database connect
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api/category", categoryRouter);

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "Server is running successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
