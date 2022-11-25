import { Button,Dialog,DialogActions,DialogContent,DialogContentText, DialogTitle,useMediaQuery,
  Box, Table, TableBody, TableCell, TableContainer, TextField,Checkbox,
  FormGroup, FormControlLabel, TableHead, TableRow, Paper, IconButton   } from '@mui/material'
import { Add, Clear} from '@mui/icons-material';
import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { useTheme } from '@mui/material/styles';

const UserContainer = () => {

  const [openAddUser, setOpenAddUser] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpenAddUser(true);
  };

  const handleClose = () => {
    setOpenAddUser(false);
  };

  
  const userData = [
    {
      "id":1,
      "firstName":"Sakthivel",
      "lastName":"Subramaniyam",
      "emailId":"Sakthi@gmail.com",
      "mobileNumber":"23423434234",
      "userName":"Sakthi",
      "enabled":"true"
    },
    {
      "id":2,
      "firstName":"Sakthivel1",
      "lastName":"Subramaniyam1",
      "emailId":"Sakthi@gmail.com",
      "mobileNumber":"23423434234",
      "userName":"Sakthi",
      "enabled":"true"
    },
  ];

  return (
    <div className="AppContainer">
      <h1 className="screenTitle">User Maintainence</h1>
      <div className="sceenButtons">
        <Button variant="contained" size="small" sx={"margin-right:1rem"} color="success" endIcon={<Add />} onClick={handleClickOpen} >Add User</Button>
        <Button variant="contained" size="small" color="error" endIcon={<Clear />}>Delete</Button>
      </div>

    <div className="app-screen-content">
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Enabled</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row,index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.emailId}</TableCell>
                <TableCell align="left">{row.userName}</TableCell>
                <TableCell align="left">{row.mobileNumber}</TableCell>
                <TableCell align="left">{row.enabled}</TableCell>
                <TableCell align="left">
                <IconButton color="secondary" aria-label="Edit">
                  <ModeEditIcon />
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      
      <Dialog
        fullScreen={fullScreen}
        open={openAddUser}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="text-bold">
          Add New User
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Box>
          <TextField sx={"margin-right:1rem"} id="standard-basic" label="First Name" variant="standard" />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <TextField sx={"margin-right:1rem"} id="standard-basic" label="Email ID" variant="standard" />
          <TextField id="standard-basic" label="Mobile" variant="standard" />
          <TextField sx={"margin-right:1rem"} id="standard-basic" label="UserName" variant="standard" />
          <TextField sx={"margin-right:1rem"} label="Password" variant="standard" />
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Send Report" color="secondary" />
          <FormControlLabel control={<Checkbox />} label="Push Notification" color="secondary" />
        </FormGroup>
          </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="popupFooter">
            <Button variant="contained" size="small" sx={"margin-right:1rem"} color="success" onClick={handleClickOpen} >Save</Button>
            <Button variant="contained" size="small" color="error" onClick={handleClose}>Cancel</Button>
          </div>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default UserContainer