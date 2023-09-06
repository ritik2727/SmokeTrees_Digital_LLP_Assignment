import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./backend/config/db.js";
import colors from "colors";

dotenv.config();
ConnectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
