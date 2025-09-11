import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "./models/user.js";
import express from "express";

dotenv.config();

const app = express();
const port = 3000;

await mongoose
  .connect(process.env.MONGO_DB_URI)
  .catch((err) => console.error(err));

app.use(express.json());

///...

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
