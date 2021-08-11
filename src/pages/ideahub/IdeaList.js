import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CardList from '../../components/cardlist/cardlist'

const useStyles = makeStyles((theme) => ({

}));

const ideaList = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

export default function IdeaListPage() {
  const classes = useStyles();
    return (
        <>
        <CssBaseline />
        <Container maxWidth="xl">
            <Grid container spacing={4}>
            {ideaList.map((post) => (
                <CardList key={post.title} post={post} />
            ))}
            </Grid>
        </Container>
        </>
        );
}
  