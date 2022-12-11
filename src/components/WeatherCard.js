import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  textWind: {
    fontSize: 13,
  }
}));

const WeatherCard = ({
  text,
  temp,
  icon,
  wind
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`Hoje o clima está ${text}`}
        subheader={`Temperatura ${temp}`}
        avatar={
          <Avatar aria-label="recipe" src={icon}/>
        }
      />
      <CardContent>
       <p className={classes.textWind}>A velocidade do vento está em {wind}</p>
      </CardContent>

    </Card>
  );
}

export default WeatherCard;