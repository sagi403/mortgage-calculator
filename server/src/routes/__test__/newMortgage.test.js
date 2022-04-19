import request from "supertest";
import { app } from "../../app.js";
import { Mortgage } from "../../models/mortgage.js";

it("has a route handler listening to /api/total-cost for post requests", async () => {
  // const response = await request(app).post("/api/total-cost").send({});
  // expect(response.status).not.toEqual(404);
});
