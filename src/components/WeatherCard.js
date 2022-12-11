import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  }
}));

const WeatherCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Hoje o dia está Limpo!"
        subheader="Temp: 25C"
      />
      <CardContent>
       <p>Min: 17C</p>
       <p>Max: 25C</p>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;