import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TestPackCard = (props) => {

    const cardData = props.card;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div><span>{cardData.description}</span></div>
          <div><span>Total Testcase :</span><strong>{cardData.count}</strong></div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go</Button>
        <Button size="small">Refresh</Button>
      </CardActions>
    </Card>
  );
}

export default TestPackCard;
