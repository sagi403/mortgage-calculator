const totalMortgage = (mortgageAmount, termYearly, interestYearly) => {
  const interestMonthly = ((1 + interestYearly / 100) ** (1 / 12) - 1) * 100;
  const monthlyPayment =
    (mortgageAmount * interestMonthly) /
    100 /
    (1 - (1 + interestMonthly / 100) ** (-termYearly * 12));
  const totalCost = monthlyPayment * termYearly * 12;
  const totalInterest = totalCost - mortgageAmount;

  return { interestMonthly, monthlyPayment, totalCost, totalInterest };
};

export default totalMortgage;
