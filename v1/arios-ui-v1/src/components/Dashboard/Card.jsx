import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DashboardCard = (props) => {

    const cardData = props.card;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div><span>Total testcases executed by all the ARIOS users.</span></div>
          <div><span>Total Testcase :</span><strong>{cardData.testcaseCount}</strong></div>
          <div><span>Total Teststep :</span><strong>{cardData.testStepCount}</strong></div>

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Refresh</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

export default DashboardCard;
