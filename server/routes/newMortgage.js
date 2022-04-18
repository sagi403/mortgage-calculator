import express from "express";
import { body } from "express-validator";
import totalMortgage from "../calculations/total-mortgage.js";

const router = express.Router();

router.post("/api/total-cost", async (req, res) => {
  const { mortgageAmount, termYearly, interestYearly } = req.body;
  const { interestMonthly, monthlyPayment, totalCost, totalInterest } =
    totalMortgage(mortgageAmount, termYearly, interestYearly);

  res.send({ interestMonthly, monthlyPayment, totalCost, totalInterest });
});

export { router as newMortgageRouter };
