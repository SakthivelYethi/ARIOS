import { Table, Button, Stack, FormCheck } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

const LearnPage = () => {
  const navigate = useNavigate();
  const applicationData = [
    {
      id: 1,
      name: "Flexcube",
      description: "test desc"
    },
    {
      id: 2,
      name: "OBDX",
      description: "test desc"
    },
  ];

  const functionData = [
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
  ];

  const [selectedApplication, setSelectedApplication] = useState("--Select--");

  const handleOnValueChange = (event) => {
    setSelectedApplication(event.target.value);
  };

  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const selectedFunctionOnChange = (event, func) => {
    console.log("log");
    if(event.target.checked) {
      selectedFunctions.push(func);
    } else {
      const updatedFunctions = selectedFunctions.filter(
        (item) =>  item.id !== func.id
      );
      setSelectedFunctions(updatedFunctions);
    }
  };

  const learn = () => {
    navigate("/admin/learndetails", {state: selectedFunctions})
  }

  return (
    <div className="main-content">

    <span className="page-title">Learn Details</span>
    <div className="main-content-button">      
      <Stack direction="horizontal" gap={2}>
      <Button variant="success" onClick={() => { navigate("/admin/newclient")}}>Add New Function</Button>
        <Button variant="success" onClick={learn}>Learn</Button>
        <Button variant="danger" onClick={() => { navigate("/admin/newclient")}}>Abort</Button>
      </Stack>
    </div>

    <div className="main-content-wrapper" size="sm">

    <Table striped bordered hover responsive="sm" style={{ width: "65%"}}>
      <tbody>
        <tr>
          <td>Application Name</td>
          <td>
          <select name="selectedApplication" onChange={ handleOnValueChange} value={selectedApplication} >
          <option value="--Select--">--Select--</option>
            {applicationData.map((app) => {return(
              <option value={app.name}>{app.name}</option>
            )})}
          </select>
          </td>
          <td>Search string</td>
          <td>
          <input type="text" name='name'/>
          </td>
        </tr>
      </tbody>
      </Table>
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Select</th>
              <th>Code</th>
              <th>Name</th>
              <th>Navigation</th>
              <th>Application</th>
              <th>Description</th>
              <th>Status</th>
              <th style={{textAlign:"center"}}>Download</th>
            </tr>
          </thead>
          <tbody>
            {functionData.map((func) => {return(
              <tr key={func.id}>
                <td><FormCheck name={func.id} onChange={(e) => selectedFunctionOnChange(e, func)} /></td>
                <td>{func.code}</td>
                <td>{func.name}</td>
                <td>{func.navigation}</td>
                <td>{func.application}</td>
                <td>{func.desc}</td>
                <td>{func.status}</td>
                <td>{func.status === "Complete" ? <span style={{ cursor:"pointer", color:"green"}}><i className="bi bi-cloud-arrow-down"></i>  Download</span>: "NA" }</td>
              </tr>
            )})}
            
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default LearnPage