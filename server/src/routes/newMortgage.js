import express from "express";
import { body } from "express-validator";
import totalMortgage from "../calculations/total-mortgage.js";
import { Mortgage } from "../models/mortgage.js";

const router = express.Router();

router.post("/api/total-cost", async (req, res) => {
  const { mortgageAmount, termYearly, interestYearly } = req.body;
  const { interestMonthly, monthlyPayment, totalCost, totalInterest } =
    totalMortgage(mortgageAmount, termYearly, interestYearly);

  const mortgage = new Mortgage({
    mortgageAmount,
    termYearly,
    interestYearly,
    interestMonthly,
    monthlyPayment,
    totalCost,
    totalInterest,
  });
  await mortgage.save();

  res.status(201).send(mortgage);
});

export { router as newMortgageRouter };
