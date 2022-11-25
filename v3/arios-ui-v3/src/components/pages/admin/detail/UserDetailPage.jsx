import { useState, useEffect } from 'react'
import { Button, FormCheck, Stack, Table } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import AppService from '../../../../service/AppService';
import AppModel from '../../common/AppModel';


const UserDetailPage = (props) => {

  const [modalShow, setModalShow] = useState(false);
  
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: "", firstName:"", lastName:"", userName:"", password:"", email:"", role:"--Select--", emailNotification:false,mobile:"",
        pushNotification:false, active:true, shareReportForMyRun:false, shareReportAllRun:false, shareReportForTestPack:false
      });
      const handleOnValueChange = (event) => {
        if (event.target.type === "checkbox") {
          setUserData({
            ...userData,
            [event.target.name]: event.target.checked,
          });
        } else {
          setUserData({
            ...userData,
            [event.target.name]: event.target.value,
          });
        }
      };

      const userFromListpage = useLocation();
      
      const [appAlert, setAppAlert] = useState({ type:"", message:""});

      function saveUser(event) {
        console.log(userData);
        AppService.saveUser(userData)
        .then((response) =>{
          setModalShow(true);
          setAppAlert({
            ...appAlert, type : "success", message: "User " + response.data.userName + " created successfully!!!"
          });
        }).catch((error) => {console.log("Could not save the data" + error);});
      }


      useEffect(() => {
        if(userFromListpage.state != null) {
          console.log("Edit the user...");
          setUserData(userFromListpage.state);
        }        
      }, [userFromListpage])
      
    return (
        <div className="main-content">
            <span className="page-title">Add/Update User</span>
            <div className="main-content-button">      
                <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" onClick={() => { navigate("/admin/users")}}>Back</Button>
                    <Button variant="success" onClick={saveUser}>Save</Button>
                    <Button variant="danger">Cancel</Button>
                </Stack>
            </div>

            <div className="main-content-wrapper">
                <Table borderless size="sm">
                <tbody>
                    <tr>
                        <td colSpan={6} style={{ fontWeight:"bold", fontSize:"1.1em"}}><span>Personal Information</span></td>
                    </tr>
                    <tr>
                    <td><label>First Name</label></td>
                    <td><input type="text" name='firstName' onChange={handleOnValueChange} value={userData.firstName}/></td>
                    <td><label>Last Name</label></td>
                    <td><input type="text" name='lastName' onChange={handleOnValueChange} value={userData.lastName}/></td>
                    <td><label>Email</label></td>
                    <td><input type="text" name='email' onChange={handleOnValueChange} value={userData.email} /></td>
                    </tr>
                    <tr>
                    <td><label>Mobile</label></td>
                    <td><input type="text" name='mobile' onChange={handleOnValueChange} value={userData.mobile}/></td>
                    <td><label>Username</label></td>
                    <td><input type="text" name='userName' onChange={handleOnValueChange} value={userData.userName}/></td>
                    <td><label>Password</label></td>
                    <td><input type="password" name='password' onChange={handleOnValueChange} value={userData.password}/></td>
                    </tr>
                    <tr style={{ height:"4em"}}>
                    <td><label>Role</label></td>
                    <td>
                    <select name="role" onChange={ handleOnValueChange} value={userData.role} >
                        <option value="--Select--">--Select--</option>
                        <option value="Admin">Admin</option>
                        <option value="Tester">Tester</option>
                    </select>
                    </td>
                    <td><label>Profile picture</label></td>
                    <td><input type="file" /></td>
                    </tr>
                    <tr>
                        <td colSpan={6} style={{ fontWeight:"bold", fontSize:"1.1em"}}><span>Notification</span></td>
                    </tr>
                    <tr style={{ height:"4em"}}>
                        <td><label>Email Notification</label></td>
                        <td><FormCheck type="switch" name="emailNotification" checked={userData.emailNotification}  onChange={handleOnValueChange}/></td>
                        <td><label>Push Notification</label></td>
                        <td><FormCheck type="switch" name="pushNotification" checked={userData.pushNotification} onChange={handleOnValueChange}/></td>
                        <td><label>Active</label></td>
                        <td><FormCheck type="switch" name="active" checked={userData.active} onChange={handleOnValueChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan={6} style={{ fontWeight:"bold", fontSize:"1.1em"}}><span>Report</span></td>
                    </tr>
                    <tr>
                        <td><label>My Run</label></td>
                        <td><FormCheck checked={userData.shareReportForMyRun} name="shareReportForMyRun" onChange={handleOnValueChange} /></td>
                        <td><label>All Run</label></td>
                        <td><FormCheck checked={userData.shareReportAllRun}  name="shareReportAllRun" onChange={handleOnValueChange}/></td>
                        <td><label>TestPack Only</label></td>
                        <td><FormCheck checked={userData.shareReportForTestPack}  name="shareReportForTestPack" onChange={handleOnValueChange}/></td>
                    </tr>
                </tbody>
                </Table>

                <AppModel show={modalShow} appAlert={appAlert} onHide={() => setModalShow(false)} />         
            </div>
        </div>    
    )

}

export default UserDetailPage