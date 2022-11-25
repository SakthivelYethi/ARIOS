import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material/";
import { useState } from "react"

type Props = {}

const User = (props: Props) => {

  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage : number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event:React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const userDataTableHeader = [
    { id: "firstName",
      label: "First Name",
      type: "string",
      width: 150,
      align: "center",
      headerClassName: "appDataGridHeader",
    },
    {
      id: "email",
      label: "Email",
      width: 405,
      maxWidth: 407,
      align: "center",
      headerClassName: "appDataGridHeader",
    },
    {
      id: "userName",
      label: "Username",
      width: 75,
      align: "center",
      headerClassName: "appDataGridHeader",
    },
    {
      id: "active",
      label: "Active",
      width: 75,
      align: "center",
      headerClassName: "appDataGridHeader",
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 75,
      align: "center",
      type: "delete",
    },
  ];


  const userData = [
    { "id": "1q", "firstName":"S1", "lastName":"L1", "userName":"U1", "password":"PA1", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":true, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "2q", "firstName":"S2", "lastName":"L2", "userName":"U2", "password":"PA2", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":false, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },{ "id": "1q", "firstName":"S1", "lastName":"L1", "userName":"U1", "password":"PA1", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":true, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "2q", "firstName":"S2", "lastName":"L2", "userName":"U2", "password":"PA2", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":false, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "1q", "firstName":"S1", "lastName":"L1", "userName":"U1", "password":"PA1", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":true, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "2q", "firstName":"S2", "lastName":"L2", "userName":"U2", "password":"PA2", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":false, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },{ "id": "1q", "firstName":"S1", "lastName":"L1", "userName":"U1", "password":"PA1", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":true, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "2q", "firstName":"S2", "lastName":"L2", "userName":"U2", "password":"PA2", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":false, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "1q", "firstName":"S1", "lastName":"L1", "userName":"U1", "password":"PA1", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":true, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "2q", "firstName":"S2", "lastName":"L2", "userName":"U2", "password":"PA2", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":false, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },{ "id": "1q", "firstName":"S1", "lastName":"L1", "userName":"U1", "password":"PA1", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":true, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    },
    { "id": "2q", "firstName":"S2", "lastName":"L2", "userName":"U2", "password":"PA2", "email":"s@email.com", "role":"--Select--", 
    "emailNotification":false,"mobile":"", "pushNotification":false, "active":false, 
    "shareReportForMyRun":false, "shareReportAllRun":false, "shareReportForTestPack":false
    }
  ];

  const editUser = (userId : string) => {
    console.log(userId + " edit");
  };
  const deleteUser = (userId : string) => {
    console.log(userId + " delete");
  };

  return (
    <div>
      <span style={ {fontWeight: "bold", marginRight:"5em"}}>User Maintanence</span>
      <Button variant="contained" size="medium" startIcon={<AddIcon />} color="secondary"
        onClick={ () => navigate("/administrator/userDetails") }>Add New User</Button>
      
      <Box sx={{ paddingTop: "20px",paddingLeft:"20px", paddingY:"40px"}}>

      <Paper sx={{ width: "75%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 370 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {userDataTableHeader.map((header) => (
                    <TableCell
                      key={header.id}
                      style={{
                        minWidth: header.minWidth,
                        fontWeight: "bold",
                        background:
                          "linear-gradient(180deg, #00a9ff, transparent)",
                        textAlign: "left"
                      }}
                    >
                      {header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => {
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={user.id}
                      >
                        {userDataTableHeader.map((header) => {
                          const a = [header.id] + "";
                          const value = user[a as keyof typeof user] + "";;
                          return (
                            <TableCell key={header.id}>
                              {header.type == "delete" ? (
                                <div>
                                  <Edit
                                    onClick={() => editUser(user.id)}
                                    style={{ cursor: "pointer" }}
                                  />{" "}
                                  <Delete
                                    onClick={() => deleteUser(user.id)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </div>
                              ) : value }
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component='div'
            count={userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

    </div>
  )
}

export default User