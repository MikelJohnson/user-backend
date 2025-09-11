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

// Get user
app.get("/user/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.send(users);
  } catch (err) {
    res.status(404).send({"error":"User not found"});
  }
});

app.all('/{*any}', async (req, res) => {
    res.status(400).send({"error": `Cannot ${req.method} /${req.params.any??''}`})
})

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
