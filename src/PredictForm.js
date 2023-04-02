import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const PredictForm = ({ onSubmit }) => {
  const [patientData, setPatientData] = useState({});
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    const result = await onSubmit(patientData);
    if (result) {
      setPrediction(result);
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setPatientData({ ...patientData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name="age" onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="sex">
        <Form.Label>Sex</Form.Label>
        <Form.Control as="select" name="sex" onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="cp">
        <Form.Label>Chest Pain Type</Form.Label>
        <Form.Control as="select" name="cp" onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal Pain</option>
          <option value="3">Asymptomatic</option>
        </Form.Control>
      </Form.Group>

      <Button type="submit">Submit</Button>

      {error && <Alert variant="danger">Error occurred. Please try again later.</Alert>}
      {prediction && <Alert variant="success">Prediction: {prediction}</Alert>}
    </Form>
  );
};

export default PredictForm;

