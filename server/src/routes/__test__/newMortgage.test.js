import request from "supertest";
import { app } from "../../app.js";
import { Mortgage } from "../../models/mortgage.js";

it("has a route handler listening to /api/total-cost for post requests", async () => {
  const response = await request(app).post("/api/total-cost").send({
    mortgageAmount: 500000,
    termYearly: 20,
    interestYearly: 3.5,
  });

  expect(response.status).not.toEqual(404);
});

it("creates a mortgage with valid parameters", async () => {
  let mortgage = await Mortgage.find({});
  expect(mortgage.length).toEqual(0);

  await request(app)
    .post("/api/total-cost")
    .send({
      mortgageAmount: 500000,
      termYearly: 20,
      interestYearly: 3.5,
    })
    .expect(201);

  mortgage = await Mortgage.find({});

  expect(mortgage.length).toEqual(1);
  expect(mortgage[0].interestMonthly.toFixed(2)).toEqual("0.29");
  expect(mortgage[0].monthlyPayment.toFixed(2)).toEqual("2885.71");
  expect(mortgage[0].totalCost.toFixed(2)).toEqual("692569.80");
  expect(mortgage[0].totalInterest.toFixed(2)).toEqual("192569.80");
});
