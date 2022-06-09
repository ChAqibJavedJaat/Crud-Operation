import React, { useEffect, useState} from "react";
import { Form, Button } from "semantic-ui-react";
import {useNavigate,  useParams} from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
const params = useParams();

const getDataById = async () => {
  const getData =  await axios
    .get(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${params.id}`) 
      setFirstName(getData
        .data.firstName)
        setLastName(getData
            .data.lastName)
}
useEffect (() =>{
    getDataById()
},[])

  const SendDataToApi = async() => {
      if(params.id){
        await axios.put(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${params.id}`, {
            firstName,
            lastName
          });
      }else{
       await  axios.post(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud`, {
            firstName,
            lastName
          });
      }
       navigate("/")
      };
  return (
      <>
    <Form className="container">
      <Form.Field>
        <label>First Name</label>
        <input
        value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
                value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </Form.Field>
      <Button onClick={SendDataToApi} className="btn btn-dark" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}
