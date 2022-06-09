import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const SendDataToApi = () => {
    axios.post(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud`, {
      firstName,
      lastName
    });
  };
  return (
    <Form className="container">
      <Form.Field>
        <label>First Name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </Form.Field>
      <Button onClick={SendDataToApi} type="submit">
        Submit
      </Button>
    </Form>
  );
}
