import React, { useEffect } from 'react';

import {Container,AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import myPosts from './images/Batman.jpg'

import { getPosts } from './actions/posts';

import useStyles from './styles';


const App=()=>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      },[dispatch]);
    return(
        <Container maxwidth="lg">
            <AppBar  className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">POSTS</Typography>
                <img className={classes.image} src={myPosts} alt="posts" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
                </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App