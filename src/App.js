import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InvoiceTable from './components/InvioceTable'; 
import ReactDOM from 'react-dom/client';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <InvoiceTable />
      </Container>
    </div>
  );
}

export default App; 
