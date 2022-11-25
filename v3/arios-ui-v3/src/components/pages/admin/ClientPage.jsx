import { Table, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ClientPage = () => {
  const navigate = useNavigate();
  const clientData = [
    {
      id: 1,
      name: "Sakthi",
      address: "10.10.25.135",
      port: "8085",
      userName: "admin",
      password: "admin",
      status: "Idle"
  },
  {
    id: 2,
    name: "Siva",
    address: "192.168.1.160",
    port: "9096",
    userName: "admin",
    password: "admin",
    status: "In Use"
  }
  ];

  const editClient = (client) => {
    console.log(client + " Edit");
    //navigate("/admin/newuser");
    navigate("/admin/newclient", {state: client});
  };
  const deleteClient = (clientId) => {
    console.log(clientId + " delete");
  };

  return (
    <div className="main-content">

    <span className="page-title">Client Maintenance</span>
    <div className="main-content-button">      
      <Stack direction="horizontal" gap={2}>
        <Button variant="success" onClick={() => { navigate("/admin/newclient")}}>Add New Client</Button>
      </Stack>
    </div>

    <div className="main-content-wrapper">
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Port</th>
              <th>Status</th>
              <th style={{textAlign:"center"}}>Operation</th>
            </tr>
          </thead>
          <tbody>
            {clientData.map( (client, index) => {
              return(
               <tr key={client.id}>
               <td>{client.name}</td>
               <td>{client.address}</td>
               <td>{client.port}</td>
               <td>{client.status}</td>
               <td style={{textAlign:"center"}}> <i className="bi bi-pencil-fill" onClick={() => editClient(client)} style={{cursor:"pointer", marginRight:"2rem"}}></i> 
                  <i className="bi bi-x-circle" onClick={() => deleteClient(client.id)} style={{cursor:"pointer"}}></i> </td>
             </tr>
            )})}
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default ClientPage