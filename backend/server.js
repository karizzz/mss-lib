import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";  // Ensure correct file extension for ES modules

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON from client
app.use("/api/books", router);

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});

