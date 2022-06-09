import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
    const [loading, setLoading] = useState(true)
  const [apiData, setApiData] = useState([]);

const getData = () => {
    axios
    .get(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud`)
    .then((getData) => {
      setApiData(getData.data);
      setLoading(false)
    });
}

  useEffect(() => {
    getData();

  },[]);

  const onDelete = async ( id) => {
    setLoading(true)

    await axios.delete(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${id}`);
    getData();
  };

 
  return (
    <div>
      <Table className="container">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>
        {loading && "Loading..."}
        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to={`/edit/${data.id}`}  >
                    <Button
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </Button>
                  </Link>
               
                  <Button className="btn btn-danger" onClick={()=>onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
