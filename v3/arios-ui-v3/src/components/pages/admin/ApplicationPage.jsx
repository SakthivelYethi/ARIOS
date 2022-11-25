import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ApplicationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">

    <span className="page-title">Application Maintenance</span>
    <div className="main-content-button">      
      <Stack direction="horizontal" gap={2}>
        <Button variant="success" onClick={() => { navigate("/admin/newapplication")}}>Add New Application</Button>
      </Stack>
    </div>

    <div className="main-content-wrapper">
      TEST
      </div>
    </div>
  )
}

export default ApplicationPage