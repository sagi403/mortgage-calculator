import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import useRequest from "../hooks/use-request";
import FormContainer from "../components/FormContainer";

const MortgageScreen = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [termYearly, setTermYearly] = useState("");
  const [interestYearly, setInterestYearly] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("$");
  const [totalCost, setTotalCost] = useState("$");
  const [totalInterest, setTotalInterest] = useState("$");

  const { doRequest, errors } = useRequest({
    url: "/api/total-cost",
    method: "post",
    body: { mortgageAmount, termYearly, interestYearly },
    // onSuccess: mortgage => console.log(mortgage),
  });

  const submitHandler = async e => {
    e.preventDefault();

    const mortgage = await doRequest();
    setMonthlyPayment(mortgage.monthlyPayment);
    setTotalCost(mortgage.totalCost);
    setTotalInterest(mortgage.totalInterest);
  };

  const onBlurMortgage = () => {
    const value = parseFloat(mortgageAmount);

    if (isNaN(value)) {
      return;
    }

    setMortgageAmount(value.toFixed(0));
  };

  const onBlurTerm = () => {
    const value = parseFloat(termYearly);

    if (isNaN(value)) {
      return;
    }

    setTermYearly(value.toFixed(0));
  };

  const onBlurInterest = () => {
    const value = parseFloat(interestYearly);

    if (isNaN(value)) {
      return;
    }

    setInterestYearly(value.toFixed(2));
  };

  return (
    <>
      <FormContainer>
        <h1>Mortgage Calculator</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="mortgageAmount" className="mb-3">
            <Form.Label>Mortgage Amount:</Form.Label>
            <Form.Control
              type="mortgageAmount"
              placeholder="$500,000"
              value={mortgageAmount}
              onBlur={onBlurMortgage}
              onChange={e => setMortgageAmount(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="termYearly" className="mb-3">
            <Form.Label>For how many years is the mortgage?</Form.Label>
            <Form.Control
              type="termYearly"
              placeholder="20"
              value={termYearly}
              onBlur={onBlurTerm}
              onChange={e => setTermYearly(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="interestYearly" className="mb-3">
            <Form.Label>Interest Yearly:</Form.Label>
            <Form.Control
              type="interestYearly"
              placeholder="3.50%"
              value={interestYearly}
              onBlur={onBlurInterest}
              onChange={e => setInterestYearly(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {errors}
          <Button type="submit" variant="primary">
            Check
          </Button>
        </Form>
      </FormContainer>

      <Container className="py-5">
        <Row>
          <Col xs={12} md={4}>
            <center>
              <h3>Monthly Payment</h3>
              <Alert variant="success">
                {monthlyPayment === "$" ? "$" : "$" + monthlyPayment}
              </Alert>
            </center>
          </Col>
          <Col xs={12} md={4}>
            <center>
              <h3>Total Cost</h3>
              <Alert variant="success">
                {totalCost === "$" ? "$" : "$" + totalCost}
              </Alert>
            </center>
          </Col>
          <Col xs={12} md={4}>
            <center>
              <h3>Total Interest</h3>
              <Alert variant="success">
                {totalInterest === "$" ? "$" : "$" + totalInterest}
              </Alert>
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MortgageScreen;
