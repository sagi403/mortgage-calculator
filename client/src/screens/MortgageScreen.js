import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const MortgageScreen = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  // const [termYearly, setTermYearly] = useState("");
  // const [interestYearly, setInterestYearly] = useState("");
  // const [interestMonthly, setInterestMonthly] = useState("");
  // const [monthlyPayment, setMonthlyPayment] = useState("");
  // const [totalCost, setTotalCost] = useState("");
  // const [totalInterest, setTotalInterest] = useState("");

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="mortgageAmount" className="mb-3">
          <Form.Label>Mortgage Amount: </Form.Label>
          <Form.Control
            type="mortgageAmount"
            placeholder="$500,000"
            value={mortgageAmount}
            onChange={e => setMortgageAmount(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default MortgageScreen;
