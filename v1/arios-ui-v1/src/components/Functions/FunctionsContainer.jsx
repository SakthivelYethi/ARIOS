import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  useMediaQuery,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CachedIcon from "@mui/icons-material/Cached";
import { Add, Clear, Delete, Edit, Download } from "@mui/icons-material";
import AppService from "../../APIService/AppService";

const functionDataHeader = [
  {
    id: "functionCode",
    label: "Code",
    minWidth: 75,
    align: "center",
    type: "",
  },
  {
    id: "functionName",
    label: "Name",
    minWidth: 100,
    align: "center",
    type: "",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 75,
    align: "center",
    type: "",
  },
  {
    id: "download",
    label: "Download",
    minWidth: 75,
    align: "center",
    type: "download",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 75,
    align: "center",
    type: "delete",
  },
];

function createData(functionCode, functionName, status, download1, actions1) {
  return { functionCode, functionName, status, download1, actions1 };
}

const functionsData = [
  createData("IN", "India", "Complete", "Download", "Edit"),
  createData("CH", "China", "Complete", "Download", "Edit"),
  createData("IT", "Italy", "Complete", "Download", "Edit"),
  createData("CA", "Canada", "Complete", "Download", "Edit"),
  createData("AU", "Australia", "Complete", "Download", "Edit"),
  createData("DE", "Germany", "Complete", "Download", "Edit"),
  createData("IE", "Ireland", "Complete", "Download", "Edit"),
  createData("MX", "Mexico", "Complete", "Download", "Edit"),
  createData("JP", "Japan", "Complete", "Download", "Edit"),
  createData("FR", "France", "Complete", "Download", "Edit"),
  createData("RU", "Russia", "Complete", "Download", "Edit"),
  createData("BR", "Brazil", "Complete", "Download", "Edit"),
];

const FunctionsContainer = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [openAddFunction, setOpenAddFunction] = React.useState(false);
  const openAddFunctionPopup = () => {
    setOpenAddFunction(true);
  };
  const closeAddFunctionPopup = () => {
    setOpenAddFunction(false);
  };

  const [functionPopupData, setFunctionPopupData] = React.useState({
    id: "",
    application: "",
    functionCode: "",
    functionName: "",
    description: "",
    status: "Not Learnt",
    download: "",
    actions: "Edit",
  });

  function saveFunction(e) {
    console.log(functionPopupData);
    closeAddFunctionPopup();
    functionsData.push(functionPopupData);
    setFunctionPopupData(functionPopupData);
  }

  const [selectedApplicationName, setSelectedApplicationName] =
    React.useState("");

  const setValueToInputField = (event) => {
    if (event.target.type === "checkbox") {
      setFunctionPopupData({
        ...functionPopupData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFunctionPopupData({
        ...functionPopupData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const [loadFunctions, setLoadFunctions] = React.useState(false);
  const [appListValues, setAppListValues] = React.useState([]);

  const fetchFunctionsByAppId = () => {
    if (!loadFunctions) {
      setLoadFunctions(true);
      const fetchData = async () => {
        try {
          const response = await AppService.getApplicationsDTO();
          const optArray = [];
          response.data.forEach((value) => {
            optArray.push({ key: value.id, value: value.applicationName });
            setLoadFunctions(false);
          });
        } catch (error) {
          console.log(error);
          setServiceDownAlert(true);
          setLoadFunctions(false);
        }
      };
      fetchData();
    }
  };

  React.useEffect(() => {
    document.title = "ARIOS | Function";
    const fetchData = async () => {
      try {
        const response = await AppService.getApplicationsDTO();
        const optArray = [];
        response.data.forEach((value) => {
          optArray.push({
            key: value.id,
            applicationName: value.applicationName,
          });
        });
        setAppListValues(optArray);
        setLoadFunctions(false);
      } catch (error) {
        console.log(error);
        setServiceDownAlert(true);
      }
    };
    fetchData();
  }, []);

  const onApplicationChange = (e) => {
    setSelectedApplicationName(e.target.value);
  };

  const vertical = "top";
  const horizontal = "right";
  const [serviceDownAlert, setServiceDownAlert] = React.useState(false);
  const closeServiceDownAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setServiceDownAlert(false);
  };

  const deleteFunction = (functionCode) => {
    console.log(functionCode + " deleted");
  };
  const editFunction = (functionCode) => {
    console.log(functionCode + " edited");
  };
  const downloadFunction = (functionCode) => {
    console.log(functionCode + " downloaded");
  };
  return (
    <div className='AppContainer'>
      <h1>Functions Maintainence</h1>
      <div className='sceenButtons'>
        <Button
          variant='contained'
          size='small'
          sx={"margin-right:1rem"}
          color='success'
          onClick={openAddFunctionPopup}
          endIcon={<Add />}
        >
          Add Function
        </Button>
        <Button
          variant='contained'
          size='small'
          sx={"margin-right:1rem"}
          color='success'
          onClick={closeAddFunctionPopup}
          endIcon={<CachedIcon />}
        >
          Refresh
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
            onChange={onApplicationChange}
            label='Application'
            MenuProps={{ PaperProps: { sx: { maxHeight: 160 } } }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {appListValues.map((option) => {
              return (
                <MenuItem
                  key={option.applicationName}
                  value={option.applicationName}
                >
                  {option.applicationName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          variant='contained'
          size='small'
          sx={"margin: 1.4rem 0px 0px 3rem;"}
          onClick={fetchFunctionsByAppId}
          disabled={loadFunctions}
          color='success'
        >
          Fetch
        </Button>
        {loadFunctions && (
          <CircularProgress
            size={24}
            color='secondary'
            sx={{
              position: "absolute",
              top: "27%",
              left: "40.5%",
            }}
          />
        )}

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 370 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {functionDataHeader.map((header) => (
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
                {functionsData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((functionData) => {
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={functionData.code}
                      >
                        {functionDataHeader.map((header) => {
                          const value = functionData[header.id];
                          return (
                            <TableCell key={header.id} align={header.align}>
                              {header.type == "delete" ? (
                                <div>
                                  <Edit
                                    onClick={() =>
                                      editFunction(functionData.functionCode)
                                    }
                                    style={{ cursor: "pointer" }}
                                  />{" "}
                                  <Delete
                                    onClick={() =>
                                      deleteFunction(functionData.functionCode)
                                    }
                                    style={{ cursor: "pointer" }}
                                  />
                                </div>
                              ) : header.type == "download" ? (
                                <Download
                                  onClick={() =>
                                    downloadFunction(functionData.functionCode)
                                  }
                                  style={{ cursor: "pointer" }}
                                />
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
            count={functionsData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={openAddFunction}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          id='responsive-dialog-title'
          sx={{ "font-weight": "bold" }}
        >
          Add New Function
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box>
              <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id='demo-simple-select-standard-label'>
                  Application
                </InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={selectedApplicationName}
                  onChange={onApplicationChange}
                  label='Application'
                  MenuProps={{ PaperProps: { sx: { maxHeight: 160 } } }}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  {appListValues.map((option) => {
                    return (
                      <MenuItem
                        key={option.applicationName}
                        value={option.applicationName}
                      >
                        {option.applicationName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <TextField
                id='standard-basic'
                name='functionCode'
                onChange={(e) => {
                  setValueToInputField(e);
                }}
                value={functionPopupData.functionCode}
                label='Function Code'
                variant='standard'
              />
              <TextField
                id='standard-basic'
                label='Function Name'
                onChange={(e) => {
                  setValueToInputField(e);
                }}
                sx={"margin-right:1rem;margin-top:1.2rem"}
                name='functionName'
                value={functionPopupData.functionName}
                variant='standard'
              />
              <TextField
                id='standard-basic'
                name='description'
                onChange={(e) => {
                  setValueToInputField(e);
                }}
                sx={"margin-top:1.2rem"}
                value={functionPopupData.description}
                label='Function Description'
                variant='standard'
              />
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
              onClick={saveFunction}
            >
              Save
            </Button>
            <Button
              variant='contained'
              size='small'
              color='error'
              onClick={closeAddFunctionPopup}
            >
              Cancel
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        open={serviceDownAlert}
        onClose={closeServiceDownAlert}
        key={vertical + horizontal}
      >
        <Alert onClose={closeServiceDownAlert} severity='error'>
          function service is down!!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FunctionsContainer;
