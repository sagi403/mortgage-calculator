import mongoose from "mongoose";

const mortgageSchema = new mongoose.Schema({
  mortgageAmount: {
    type: Number,
    required: true,
  },
  termYearly: {
    type: Number,
    required: true,
  },
  interestYearly: {
    type: Number,
    required: true,
  },
  interestMonthly: {
    type: Number,
  },
  monthlyPayment: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  totalInterest: {
    type: Number,
  },
});

const Mortgage = mongoose.model("Mortgage", mortgageSchema);

export { Mortgage };
