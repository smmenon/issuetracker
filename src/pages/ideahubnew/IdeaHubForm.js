import React from "react";
import { Grid, TextField, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { Typography } from "../../components/Wrappers";
import Widget from "../../components/Widget";

import { useHistory, Link } from "react-router-dom";

import ChipInput from 'material-ui-chip-input';
import { DropzoneArea } from "material-ui-dropzone";

export default function IdeaHubPage() {

  const history = useHistory();
  
    function handleSubmit(event) {
      history.push("./ideaHubNew");
    }
  
    // render() {
      return (
        <Widget disableWidgetMenu>
          <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Idea!!!
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                required
                id="summary"
                name="summary"
                label="Summary"
                fullWidth
                autoComplete="summary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                minRows={3}
                multiline variant="outlined" 
                style={{ margin: 8 }} 
                margin="normal"
                fullWidth
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="uniqueness"
                name="uniqueness"
                label="What makes the Idea different from others?"
                minRows={3}
                multiline variant="outlined" 
                style={{ margin: 8 }} 
                margin="normal"
                fullWidth
                autoComplete="uniqueness"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="owner"
                name="owner"
                label="Owner"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="date" label="Date" type="date" defaultValue="2017-05-24" variant="outlined" style={{ margin: 8 }} margin="normal" fullWidth/>
            </Grid>
            <Grid item xs={12}>
            <ChipInput
              label="Tag your ideas"
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
              <DropzoneArea />
            </Grid>
            <Grid item xs={12}>
              <Grid container item xs={12} spacing={1}>
                  <Grid item xs={6}>
                    <Button onClick={handleSubmit} variant="contained" color="primary" component={Link} size="large" fullWidth>Create Ideas</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" component={Link} size="large" to="./ideaHubNew" fullWidth>Cancel</Button>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </Widget>
      );
    // }
//  }
}