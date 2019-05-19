import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import { Menu } from '../../components';

export class UserMain extends Component {
  render() {
    return (
      <>
        <Grid container spacing={24}>
            <Grid item sm={12}>
                <Menu/>
            </Grid>
            <Grid item sm={12}>

            </Grid>
        </Grid> 
      </>
    )
  }
}

export default UserMain
