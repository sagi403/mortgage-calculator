const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const data = {};

app.get("/values", (req, res) => {
  res.send(data);
});

app.post("/total-cost", (req, res) => {
  const { mortgage } = req.body;

  data[`mortgage${Object.keys(data).length}`] = mortgage;

  res.status(201).send(data);
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
