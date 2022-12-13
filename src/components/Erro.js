import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const Erro = ({message, isErro}) => {

  return isErro ? (
    <Typography>
        {message}
    </Typography>
  ) : null;

}

export default Erro;