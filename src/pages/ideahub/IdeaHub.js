import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import Widget from "../../components/Widget/Widget";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const fcards = [1, 2, 3, 4];
const tcards = [4, 5, 6, 7];
const gcards = [7, 8, 9, 1];

export default function IdeaHubPage() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="xl" >
      <Grid container spacing={4} >
        <Grid item xs={12}>
        <Widget title="Functional Ideas" disableWidgetMenu>
          <Grid container spacing={4}>
            {fcards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1627325071486-0b1e3083294a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODY1NDQ1NA&ixlib=rb-1.2.1&q=80&w=1080"
                    title="Functional Image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                    <CardActions>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
                <Grid item>
                  <Button 
                  color="primary" 
                  component={Link}
                  to="./idealist">more</Button>
                </Grid>
              </Grid>

            </Widget>
            </Grid>
            <Grid item xs={12}>
            <Widget title="Technology Ideas" disableWidgetMenu>
              <Grid container spacing={4}>
                {tcards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1626614431317-9f6430ae7492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODYwOTY0NA&ixlib=rb-1.2.1&q=80&w=1080"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
               </Grid>
            </Widget> 
            </Grid>
            <Grid item xs={12}>
            <Widget title="General Ideas" disableWidgetMenu>
              <Grid container spacing={4}>
                {gcards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://images.unsplash.com/photo-1628317886759-518a36aa99ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODY1Mzc4Nw&ixlib=rb-1.2.1&q=80&w=1080"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
               </Grid>
            </Widget> 
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
