import { Add, Clear } from "@mui/icons-material";
import {
  Alert,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material/";
import AppService from "../../APIService/AppService";

const ApplicationContainer = () => {
  const [openAddUser, setOpenAddUser] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpenAddUser(true);
  };

  const handleClose = () => {
    setOpenAddUser(false);
  };

  const appListTableHeader = React.useMemo(() => [
    {
      id: "applicationName",
      label: "Application Name",
      type: "string",
      width: 150,
      headerClassName: "appDataGridHeader",
    },
    {
      id: "applicationUrl",
      label: "Application URL",
      width: 405,
      maxWidth: 407,
      headerClassName: "appDataGridHeader",
    },
    {
      id: "adapter",
      label: "Adapter",
      width: 75,
      headerClassName: "appDataGridHeader",
    },
    {
      id: "browser",
      label: "Browser",
      width: 75,
      headerClassName: "appDataGridHeader",
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 75,
      align: "center",
      type: "delete",
    },
  ]);

  // const rows = [
  //   { id: 1, applicationName: 'Flexcube', applicationUrl: 'http://localhost:3000/application',description:"", adapter: "flexcube", browser:"Chrome",action:"Edit",pushNotification:true },
  //   { id: 2, applicationName: 'OBDX', applicationUrl: 'http://localhost:3000/application', adapter: "obdx", browser:"Edge",action:"Edit" },
  //   { id: 3, applicationName: 'Finacle', applicationUrl: 'http://localhost:3000/application', adapter: "finacle", browser:"Firefox",action:"Edit"  },
  //   { id: 4, applicationName: 'T24', applicationUrl: 'http://localhost:3000/application', adapter: "t24", browser:"Chrome",action:"Edit"  },
  //   { id: 5, applicationName: 'ICICI-IB', applicationUrl: 'http://localhost:3000/application', adapter: "icici-ib", browser:"Chrome",action:"Edit"  },
  //   { id: 6, applicationName: 'FCR', applicationUrl: "http://localhost:3000/application", adapter: "fcr", browser:"Chrome",action:"Edit"  },
  //   { id: 7, applicationName: 'FCUBS', applicationUrl: 'http://localhost:3000/application', adapter: "fcubs", browser:"Chrome",action:"Edit"  },
  //   { id: 8, applicationName: 'ARIOS', applicationUrl: 'http://localhost:3000/application', adapter: "arios", browser:"Chrome",action:"Edit"  },
  //   { id: 9, applicationName: 'OIPA', applicationUrl: 'http://localhost:3000/application', adapter: "oipa", browser:"Chrome",action:"Edit"  },
  // ];

  const [applicationData, setApplicationData] = React.useState([]);

  const [application, setApplication] = React.useState({
    id: "",
    applicationName: "",
    applicationUrl: "",
    adapter: "",
    browser: "",
    action: "",
    description: "",
    pushNotification: true,
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOnChangeText = (event) => {
    if (event.target.type === "checkbox") {
      setApplication({
        ...application,
        [event.target.name]: event.target.checked,
      });
    } else {
      setApplication({
        ...application,
        [event.target.name]: event.target.value,
      });
    }
  };

  function saveApplication(e) {
    console.log(application);
    AppService.saveApplication(application)
      .then((response) => {
        console.log(
          "App {} created successfully!!!",
          response.data.applicationName
        );
        applicationData.push(response.data);
        setOpenAddUser(false);
      })
      .catch((error) => {
        console.log(error);
        setServiceDownAlert(true);
      });
  }

  React.useEffect(() => {
    document.title = "ARIOS | Application";
    const fetchData = async () => {
      try {
        const response = await AppService.getApplications();
        setApplicationData(response.data);
      } catch (error) {
        console.log(error);
        setServiceDownAlert(true);
      }
    };
    fetchData();
  }, []);

  const [selectedApplicationName, setSelectedApplicationName] =
    React.useState("");

  const vertical = "top";
  const horizontal = "right";
  const [serviceDownAlert, setServiceDownAlert] = React.useState(false);
  const closeServiceDownAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setServiceDownAlert(false);
  };

  const editApplication = (appId) => {
    console.log(appId + " downloaded");
  };
  const deleteApplication = (appId) => {
    console.log(appId + " downloaded");
  };

  return (
    <div className='AppContainer'>
      <h1 className='screenTitle'>Application Under Test</h1>
      <div className='sceenButtons'>
        <Button
          variant='contained'
          size='small'
          sx={"margin-right:1rem"}
          color='success'
          onClick={handleClickOpen}
          endIcon={<Add />}
        >
          Add Application
        </Button>
        <Button
          variant='contained'
          size='small'
          color='error'
          endIcon={<Clear />}
        >
          Delete
        </Button>
      </div>

      <div className='app-screen-content'>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Application
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={selectedApplicationName}
            onChange={(e) => {
              setSelectedApplicationName(e.target.value);
            }}
            label='Application'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant='contained'
          size='small'
          sx={"margin: 1.4rem 0px 0px 3rem;"}
          color='success'
        >
          Fetch
        </Button>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 370 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {appListTableHeader.map((header) => (
                    <TableCell
                      key={header.id}
                      align={header.align}
                      style={{
                        minWidth: header.minWidth,
                        fontWeight: "bold",
                        background:
                          "linear-gradient(180deg, #00a9ff, transparent)",
                        textAlign: "center",
                      }}
                    >
                      {header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {applicationData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((app) => {
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={app.id}
                      >
                        {appListTableHeader.map((header) => {
                          const value = app[header.id];
                          return (
                            <TableCell key={header.id} align={header.align}>
                              {header.type == "delete" ? (
                                <div>
                                  <Edit
                                    onClick={() => editApplication(app.id)}
                                    style={{ cursor: "pointer" }}
                                  />{" "}
                                  <Delete
                                    onClick={() => deleteApplication(app.id)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </div>
                              ) : header.format && typeof value === "number" ? (
                                header.format(value)
                              ) : (
                                value
                              )}
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
            count={applicationData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={openAddUser}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          id='responsive-dialog-title'
          sx={{ "font-weight": "bold" }}
        >
          Add New Application
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box>
              <TextField
                sx={"margin-right:1rem"}
                id='standard-basic'
                name='applicationName'
                onChange={(e) => {
                  handleOnChangeText(e);
                }}
                value={application.applicationName}
                label='Application Name'
                variant='standard'
              />
              <TextField
                id='standard-basic'
                label='Application URL'
                onChange={(e) => {
                  handleOnChangeText(e);
                }}
                name='applicationUrl'
                value={application.applicationUrl}
                variant='standard'
              />
              <TextField
                sx={"margin-right:1rem"}
                id='standard-basic'
                name='description'
                onChange={(e) => {
                  handleOnChangeText(e);
                }}
                value={application.description}
                label='Application Description'
                variant='standard'
              />

              <FormControl variant='standard'>
                <InputLabel id='demo-simple-select-standard-label'>
                  Browser
                </InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={application.browser}
                  onChange={handleOnChangeText}
                  label='Browser'
                  name='browser'
                >
                  <MenuItem value='Default'>Default</MenuItem>
                  <MenuItem value='Chrome'>Chrome</MenuItem>
                  <MenuItem value='Edge'>Edge</MenuItem>
                  <MenuItem value='Firefox'>Firefox</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant='standard'>
                <InputLabel id='demo-simple-select-standard-label'>
                  Adapter
                </InputLabel>
                <Select
                  labelId='Adapter'
                  id='adapter'
                  name='adapter'
                  value={application.adapter}
                  onChange={handleOnChangeText}
                  label='Adapter'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='flexcube'>Flexcube</MenuItem>
                  <MenuItem value='fcr'>FCR</MenuItem>
                  <MenuItem value='obdx'>OBDX</MenuItem>
                </Select>
              </FormControl>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label='Defalut Application'
                  color='secondary'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={application.pushNotification}
                      onChange={(e) => {
                        handleOnChangeText(e);
                      }}
                      name='pushNotification'
                    />
                  }
                  label='Push Notification'
                  color='secondary'
                />
              </FormGroup>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='popupFooter'>
            <Button
              variant='contained'
              size='small'
              sx={"margin-right:1rem"}
              color='success'
              onClick={saveApplication}
            >
              Save
            </Button>
            <Button
              variant='contained'
              size='small'
              color='error'
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        open={serviceDownAlert}
        onClose={closeServiceDownAlert}
        key={vertical + horizontal}
      >
        <Alert onClose={closeServiceDownAlert} severity='error'>
          application service is down!!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ApplicationContainer;
