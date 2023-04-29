import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  rectangle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 80,
    backgroundColor: theme.palette.grey[200],
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius
  },
  recurringInvoices: {
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  recurringRevenue: {
    color: theme.palette.success.main,
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  recurringOverdue: {
    color: theme.palette.error.main,
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  search: {
    width: "50%",
    marginRight: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, id, endDate, interval, amount) {
  return { name, id, endDate, interval, amount };
}

const rows = [
  createData("Client A", "00001", "2023-06-30", "Monthly", "$100.00"),
  createData("Client B", "00002", "2023-06-30", "Quarterly", "$500.00"),
  createData("Client C", "00003", "2023-06-30", "Yearly", "$2,000.00")
];

function InvoiceTable() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <div className={classes.rectangle}>
          <div className={classes.recurringInvoices}>2</div>
          <div>Recurring Invoices</div>
        </div>
        <div className={classes.rectangle}>
          <div className={classes.recurringRevenue}>$1,600.00</div>
          <div>Recurring Revenue</div>
        </div>
        <div className={classes.rectangle}>
          <div className={classes.recurringOverdue}>1</div>
          <div>Recurring Overdue</div>
        </div>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          className={classes.search}
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="invoice table">
          <TableHead>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Interval</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.interval}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default InvoiceTable;
