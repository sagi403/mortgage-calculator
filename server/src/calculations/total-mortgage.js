const totalMortgage = (mortgageAmount, termYearly, interestYearly) => {
  const interestMonthly = (
    ((1 + interestYearly / 100) ** (1 / 12) - 1) *
    100
  ).toFixed(2);
  const monthlyPayment = (
    (mortgageAmount * interestMonthly) /
    100 /
    (1 - (1 + interestMonthly / 100) ** (-termYearly * 12))
  ).toFixed(2);
  const totalCost = (monthlyPayment * termYearly * 12).toFixed(0);
  const totalInterest = (totalCost - mortgageAmount).toFixed(0);

  return { interestMonthly, monthlyPayment, totalCost, totalInterest };
};

export default totalMortgage;
