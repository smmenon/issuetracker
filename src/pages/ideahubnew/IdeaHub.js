import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["1234", "Example Inc.", "Joe James", "4/4/2021", "New"],
  ["1234", "Example Inc.", "John Walsh", "4/4/2021", "New"],
  ["1234", "Example Inc.", "Bob Herm", "4/4/2021", "New"],
  ["1234", "Example Inc.", "James Houston", "4/4/2021", "New"],
  ["1234", "Example Inc.", "Prabhakar Linwood", "4/4/2021", "New"],  
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function IdeaHubPage() {
  const classes = useStyles();
  return (
    <>
        <Grid item xs={12}>
          <MUIDataTable
            title="Ideas List"
            data={datatableData}
            columns={["ID", "Summary", "Owner", "Date", "Status"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
      </Grid>
    </>
  );
}
