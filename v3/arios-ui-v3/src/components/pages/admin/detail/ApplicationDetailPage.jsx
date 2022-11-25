import { useState, useEffect } from 'react'
import { Button, Stack, Table } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import AppModel from '../../common/AppModel';

const ApplicationDetailPage = () => {
  

  const [modalShow, setModalShow] = useState(false);
  
    const navigate = useNavigate();
    const [applicationData, setApplicationData] = useState({
        id: "", name:"", description:"", adapter:"", type:""});

      const handleOnValueChange = (event) => {
        if (event.target.type === "checkbox") {
          setApplicationData({
            ...applicationData,
            [event.target.name]: event.target.checked,
          });
        } else {
          setApplicationData({
            ...applicationData,
            [event.target.name]: event.target.value,
          });
        }
      };

      const applicationFromListpage = useLocation();
      
      const [appAlert, setAppAlert] = useState({ type:"", message:""});

      function saveApplication(event) {
        console.log(applicationData);
        setModalShow(true);
        setAppAlert({
          ...appAlert, type : "success", message: "Application" + applicationData.name + " created successfully!!!"
        });
      }


      useEffect(() => {
        if(applicationFromListpage.state != null) {
          console.log("Edit the application...");
          setApplicationData(applicationFromListpage.state);
        }        
      }, [applicationFromListpage])
      
    return (
        <div className="main-content">
            <span className="page-title">Add/Update Application</span>
            <div className="main-content-button">      
                <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" onClick={() => { navigate("/admin/applications")}}>Back</Button>
                    <Button variant="success" onClick={saveApplication}>Save</Button>
                    <Button variant="danger">Cancel</Button>
                </Stack>
            </div>

            <div className="main-content-wrapper">
                <Table borderless size="sm">
                  <tbody>
                  <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" name='name' onChange={handleOnValueChange} value={applicationData.name}/></td>
                    <td><label>Description</label></td>
                    <td><textarea type="text" name='description' onChange={handleOnValueChange} value={applicationData.description}/></td>
                    <td><label>Adapter</label></td>
                    <td>
                    <select name="adapter" onChange={ handleOnValueChange} value={applicationData.adapter} >
                        <option value="--Select--">--Select--</option>
                        <option value="Flexcube">Flexcube</option>
                        <option value="OBDX">OBDX</option>
                    </select>
                    </td>
                    </tr>
                  </tbody>
                </Table>

                <AppModel show={modalShow} appAlert={appAlert} onHide={() => setModalShow(false)} />         
            </div>
        </div>    
    )
}

export default ApplicationDetailPage