const totalMortgage = (mortgageAmount, termYearly, interestYearly) => {
  const interestMonthly = (1 + interestYearly) ** (1 / 12) - 1;
  const monthlyPayment =
    (mortgageAmount * interestMonthly) /
    (1 - (1 + interestMonthly) ** (-termYearly * 12));
  const totalCost = monthlyPayment * termYearly * 12;
  const totalInterest = totalCost - mortgageAmount;

  return { interestMonthly, monthlyPayment, totalCost, totalInterest };
};
