import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./backend/config/db.js";
import colors from "colors";
import userRoutes from "./backend/routes/userRoutes.js";

import  cors from 'cors'; 



dotenv.config();
ConnectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/users",userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
