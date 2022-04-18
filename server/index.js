import express from "express";
import bodyParser from "body-parser";
import { newMortgageRouter } from "./routes/newMortgage.js";

const app = express();
app.use(bodyParser.json());

app.use(newMortgageRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
