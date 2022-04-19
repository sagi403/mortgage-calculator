import express from "express";
import bodyParser from "body-parser";
import { newMortgageRouter } from "./routes/newMortgage.js";
import { errorHandler } from "./middleware/error-handler.js";

const app = express();
app.use(bodyParser.json());

app.use(newMortgageRouter);

app.use(errorHandler);

export { app };
