import { Table, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppService from '../../../service/AppService';
import { useState, useEffect } from "react"

const UserPage = () => {

  const navigate = useNavigate();
//   const userData = [
//     {
//       id: 1,
//       firstName: "Sakthivel",
//       lastName: "Subramaniyam",
//       userName: "sak",
//       password: "SakthivelPass",
//       email: "sakthivel11.subramaniyam@oracle.com",
//       role: "Admin",
//       emailNotification: true,
//       mobile: "8892313436",
//       pushNotification: false,
//       active: true,
//       shareReportForMyRun: true,
//       shareReportAllRun: true,
//       shareReportForTestPack: false
//   },
//   {
//     id: 2,
//     firstName: "Sakthivel",
//     lastName: "Subramaniyam",
//     userName: "sak",
//     password: "SakthivelPass",
//     email: "sakthivel.subramaniyam@oracle.com",
//     role: "Admin",
//     emailNotification: true,
//     mobile: "8892313436",
//     pushNotification: false,
//     active: true,
//     shareReportForMyRun: true,
//     shareReportAllRun: true,
//     shareReportForTestPack: false
// }
//   ];

const [userData, setUserData] = useState([]);

  const editUser = (user) => {
    console.log(user + " Edit");
    //navigate("/admin/newuser");
    navigate("/admin/newuser", {state: user});
  };
  const deleteUser = (userId) => {
    console.log(userId + " delete");
  };

  useEffect(() => {
    document.title = "A R I O S | Users";
    const fetchData = async () => {
      try {
        const response = await AppService.getUsers();
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])
  

  return (
    <div className="main-content">

    <span className="page-title">User Maintenance</span>
    <div className="main-content-button">      
      <Stack direction="horizontal" gap={2}>
        <Button variant="success" onClick={() => { navigate("/admin/newuser")}}>Add New User</Button>
      </Stack>
    </div>

    <div className="main-content-wrapper">
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Active</th>
              <th style={{textAlign:"center"}}>Operation</th>
            </tr>
          </thead>
          <tbody>
            {userData.map( (user, index) => {
              return(
               <tr key={user.id}>
               <td>{user.firstName}</td>
               <td>{user.email}</td>
               <td>{user.userName}</td>
               <td>{user.active ? "Yes": "No"}</td>
               <td style={{textAlign:"center"}}> <i className="bi bi-pencil-fill" onClick={() => editUser(user)} style={{cursor:"pointer", marginRight:"2rem"}}></i> 
                  <i className="bi bi-x-circle" onClick={() => deleteUser(user.id)} style={{cursor:"pointer"}}></i> </td>
             </tr>
            )})}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UserPage