import { useState, useEffect } from 'react'
import { Button, Stack, Table } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import AppModel from '../../common/AppModel';

const ClientDetailPage = () => {
  

  const [modalShow, setModalShow] = useState(false);
  
    const navigate = useNavigate();
    const [clientData, setClientData] = useState({
        id: "", name:"", address:"", port:"", status:""});

      const handleOnValueChange = (event) => {
        if (event.target.type === "checkbox") {
            setClientData({
            ...clientData,
            [event.target.name]: event.target.checked,
          });
        } else {
            setClientData({
            ...clientData,
            [event.target.name]: event.target.value,
          });
        }
      };

      const clientFromListpage = useLocation();
      
      const [appAlert, setAppAlert] = useState({ type:"", message:""});

      function saveClient(event) {
        console.log(clientData);
        setModalShow(true);
        setAppAlert({
          ...appAlert, type : "success", message: "Client" + clientData.name + " created successfully!!!"
        });
      }


      useEffect(() => {
        if(clientFromListpage.state != null) {
          console.log("Edit the application...");
          setClientData(clientFromListpage.state);
        }        
      }, [clientFromListpage])
      
    return (
        <div className="main-content">
            <span className="page-title">Add/Update Client</span>
            <div className="main-content-button">      
                <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" onClick={() => { navigate("/admin/clients")}}>Back</Button>
                    <Button variant="success" onClick={saveClient}>Save</Button>
                    <Button variant="danger">Cancel</Button>
                </Stack>
            </div>

            <div className="main-content-wrapper">
                <Table borderless size="sm">
                  <tbody>
                  <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" name='name' onChange={handleOnValueChange} value={clientData.name}/></td>
                    <td><label>Description</label></td>
                    <td><input type="text" name='address' onChange={handleOnValueChange} value={clientData.address}/></td>
                    <td><label>Adapter</label></td>
                    <td><input type="text" name='port' onChange={handleOnValueChange} value={clientData.port}/></td>
                    <td><label>Status</label></td>
                    <td><input type="text" name='port' onChange={handleOnValueChange} value={clientData.status}/></td>
                    </tr>
                  </tbody>
                </Table>

                <AppModel show={modalShow} appAlert={appAlert} onHide={() => setModalShow(false)} />         
            </div>
        </div>    
    )
}

export default ClientDetailPage