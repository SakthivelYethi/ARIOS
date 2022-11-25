import { Table, Button, Stack } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"

const LearnDetailPage = () => {
  const navigate = useNavigate();
  const [functionData, setFunctionData] = useState([
    {
      id: 1,
      code: "STDCUSAC",
      name: "Customer Account Creation",
      navigation: "STDCUSAC",
      application: "Flexcube",
      description:"desc",
      status:"Complete"
    },
    {
      id: 2,
      code: "FTDTRONL",
      name: "Fund Transfer",
      navigation:"FTDTRONL",
      application: "OBDX",
      description:"desc",
      status:"Learning"
    },
    {
      id: 3,
      code: "CLRUSER",
      name: "Clear User",
      navigation:"CLRUSER",
      application: "Flexcube",
      description:"desc",
      status:"Complete"
    },
  ]);

  const clientData = [
    {
      id: 1,
      name: "Sakthi",
    },
    {
      id: 2,
      name: "localhost",
    },
  ];
  const [selectedClient, setSelectedClient] = useState("--Select--");

  const handleOnValueChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const learn = () => {
    window.confirm("Learning will be initiated..");
  }

  const locationFromListPage = useLocation();

  useEffect(() => {
    if(locationFromListPage.state !== null){
        setFunctionData(locationFromListPage.state);
    }
  }, [locationFromListPage])
  

  return (
    <div className="main-content">

    <span className="page-title">Learn Details</span>
    <div className="main-content-button">      
      <Stack direction="horizontal" gap={2}>
      <Button variant="success" onClick={() => { navigate("/admin/learn")}}>Back</Button>
        <Button variant="success" onClick={learn}>Learn</Button>
      </Stack>
    </div>

    <div className="main-content-wrapper" size="sm">
    <Table striped bordered hover responsive="sm" style={{ width: "40%"}}>
      <tbody>
        <tr>
          <td>Client</td>
          <td>
          <select name="selectedClient" onChange={ handleOnValueChange } value={selectedClient} >
          <option value="--Select--">--Select--</option>
            {clientData.map((client) => {return(
              <option value={client.name}>{client.name}</option>
            )})}
          </select>
          </td>
        </tr>
      </tbody>
      </Table>

      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Navigation</th>
              <th>Application</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {functionData.map((func) => {return(
              <tr key={func.id}>
                <td>{func.code}</td>
                <td>{func.name}</td>
                <td>{func.navigation}</td>
                <td>{func.application}</td>
                <td>{func.description}</td>
                <td>{func.status}</td>
              </tr>
            )})}
            
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default LearnDetailPage