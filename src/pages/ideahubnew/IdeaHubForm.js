import React from "react";
import { Grid, Button, TextField, FormControl, MenuItem, Select, InputLabel, Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import PageTitle from '../../components/PageTitle';
import Widget from '../../components/Widget';

import { useHistory } from "react-router-dom";

export default function IdeaHubPage() {
  const history = useHistory();
// class IdeaForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
    // function handleChange(event) {
    //   // this.setState({value: event.target.value});
    // }
  
    function handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.value);
      // event.preventDefault();

      history.push("./ideaHubNew");
    }
  
    // render() {
      return (
        <form>
          <React.Fragment>
            <PageTitle title="IdeaHubForm" />
            <Grid item spacing={1} xs={6} container direction="column">
              <Widget disableWidgetMenu>
                <Grid item spacing={1} container direction="column">
                  <Grid container item xs={12} spacing={1}>
                    <Grid container item xs={1} spacing={1} style={{ margin: 8 }}>
                      ID:
                    </Grid>
                    <Grid container item xs={5} spacing={1} style={{ margin: 8 }}>
                      1234
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <TextField id="summary" label="Summary" variant="outlined" style={{ margin: 8 }} margin="normal" fullWidth/>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <TextField id="description" label="Description" variant="outlined" style={{ margin: 8 }} margin="normal" fullWidth/>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <TextField id="owner" label="Owner" variant="outlined" style={{ margin: 8 }} margin="normal" fullWidth/>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <Grid container item xs={6} spacing={1}>
                      <TextField id="date" label="Date" type="date" defaultValue="2017-05-24" variant="outlined" style={{ margin: 8 }} margin="normal" fullWidth/>
                    </Grid>
                    <Grid container item xs={6} spacing={1}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="statusLabel">Status</InputLabel>
                        <Select
                          labelId="statusLabel"
                          id="status"
                          // value={age}
                          // onChange={handleChange}
                          label="Status"
                          fullWidth
                          style={{ margin: 8 }} 
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>                  
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={6}>
                      <Button onClick={handleSubmit} variant="contained" color="primary" component={Link} size="large" fullWidth>Create Ideas</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" component={Link} size="large" to="./ideaHubNew" fullWidth>Cancel</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Widget>
            </Grid>
          </React.Fragment>
        </form>
      );
    // }
//  }
}