import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import { Login, Register } from '../../components';

export class Home extends Component {
  render() {
    return (
      <>
        <Grid container spacing={8}>
            <Grid item sm={6}>
                <Login/>
            </Grid>
            <Grid item sm={6}>
                <Register/>
            </Grid>
        </Grid>
      </>
    )
  }
}

export default Home
