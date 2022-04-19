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
