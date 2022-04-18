import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { newMortgageRouter } from "./routes/newMortgage.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

const app = express();
app.use(bodyParser.json());

app.use(newMortgageRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
