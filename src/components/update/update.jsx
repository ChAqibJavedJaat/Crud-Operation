import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState("");

  useEffect(() => {
    axios
      .get(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${ID}`)
      .then((getData) => {
        setID(getData.data);
      });
  });

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);
  const SendDataToApi = () => {
    axios.put(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${ID}`, {
      firstName,
      lastName
    });
  };
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>

        <button onClick={SendDataToApi} className="ui button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
