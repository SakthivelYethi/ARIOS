import {TextField, Checkbox, Table, TableBody, TableCell, TableContainer, TableRow,
    Switch, Button, NativeSelect, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import AppService from '../../../service/AppService';
  
  type Props = {}
  
  const UserDetails = (props: Props) => {

    const handleOnChange = (event: SelectChangeEvent) => {
      setUserData({
        ...userData, [event.target.name]: event.target.value,
      });
    }

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
      id: "", firstName:"", lastName:"", userName:"", password:"", email:"", role:"--Select--", emailNotification:false,mobile:"",
      pushNotification:false, active:true, shareReportForMyRun:false, shareReportAllRun:false, shareReportForTestPack:false
    });
    const handleOnValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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


    function saveUser(event: React.MouseEvent<HTMLButtonElement>) {
      console.log(userData);
      AppService.saveUser(userData)
        .then((response) => {
          console.log( "User {} created successfully!!!", response.data.userName );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    return (
      <div>        
        <Box sx={{ position:"fixed", top:0, backgroundColor:"#dde4ff", width:"100%",paddingLeft:"24px"}}>
          <span style={ {fontWeight: "bold", marginRight:"5em", fontSize:"20px"}}>User Maintanence</span>
          <Button variant="contained" size="medium" startIcon={<ArrowBackIosOutlinedIcon />} color="secondary"
            sx={{ marginLeft:"2em", textTransform:"none" }} onClick={() => navigate("/administrator/users")} >Back</Button>
          <Button variant="contained" size="medium" startIcon={<SaveIcon />}
            sx={{ marginLeft:"2em", textTransform:"none" }} onClick={saveUser}  >Save</Button>
          <Button variant="contained" size="medium" startIcon={<CancelIcon />} color="secondary" sx={{marginLeft:"2em",textTransform:"none"}}>Cancel</Button>
          
        </Box>
        
        <Box sx={{ paddingTop: "20px",paddingLeft:"20px", paddingY:"40px"}}>

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} sx={{ fontWeight: "bold",fontSize:"1.1rem"}}>Personal Information</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: "none"}}><label>First Name</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <TextField size="small" name='firstName'
                    onChange={handleOnValueChange}
                    value={userData.firstName} />
                  </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Last Name</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <TextField size="small" name='lastName'
                      onChange={handleOnValueChange}
                      value={userData.lastName} />
                  </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Email</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <TextField size="small" name='email'
                      onChange={handleOnValueChange}
                      value={userData.email} />
                  </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: "none"}}><label>Mobile</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <TextField size="small" name='mobile'
                      onChange={handleOnValueChange}
                      value={userData.mobile} />
                  </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Username</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <TextField size="small" name='userName'
                        onChange={handleOnValueChange}
                        value={userData.userName} />
                  </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Password</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <TextField size="small" name='password'
                        onChange={handleOnValueChange}
                        value={userData.password} />
                  </TableCell>
              </TableRow>
              <TableRow>
              <TableCell sx={{ borderBottom: "none"}}><label>Role</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                <Select sx={{ width:"85%" }} name="role"
                  onChange={ handleOnChange}
                  value={userData.role}
                >
                <MenuItem value="--Select--">--Select--</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Tester">Tester</MenuItem>
                </Select>
                </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Profile picture</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <input type="file" />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={6} sx={{ fontWeight: "bold",fontSize:"1.1rem"}}>Notification</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: "none"}}><label>Email</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                <Switch color="secondary" name="emailNotification" checked={userData.emailNotification} 
                   onChange={handleOnValueChange} />
                </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Push Notification</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                <Switch color="secondary" name="pushNotification" checked={userData.pushNotification} 
                   onChange={handleOnValueChange} />
                </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>Active</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                <Switch color="secondary" name="active" checked={userData.active} 
                   onChange={handleOnValueChange} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={6} sx={{ fontWeight: "bold",fontSize:"1.1rem"}}>Report</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: "none"}}><label>My Run</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                  <Checkbox color="secondary" checked={userData.shareReportForMyRun}  name="shareReportForMyRun"
                     onChange={handleOnValueChange}
                    /></TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>All Run</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                <Checkbox color="secondary" checked={userData.shareReportAllRun}  name="shareReportAllRun"
                     onChange={handleOnValueChange} />
                </TableCell>
                <TableCell sx={{ borderBottom: "none"}}><label>TestPack Only</label></TableCell>
                <TableCell sx={{ borderBottom: "none"}}>
                <Checkbox color="secondary" checked={userData.shareReportForTestPack}  name="shareReportForTestPack"
                     onChange={handleOnValueChange} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
        </Box>       
      </div>
    )
  }
  
  export default UserDetails