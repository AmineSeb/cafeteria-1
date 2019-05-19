import React, { Component } from 'react'
import UserMain from '../UserMain';
import { Tabs, Tab } from '@material-ui/core';
import OrderList from '../../components/OdersList';

//Ask the Server about the orders that this user has!
export class User extends Component {
    state={
        value:'one'
    }
    handleChange=(event,value)=>{
        this.setState({value})
    }
  render() {
      const {value} = this.state
    return (
      <>
        <Tabs value={value} onChange={this.handleChange}>
            <Tab value='one' label='New Order'/>
            <Tab value='two' label='My Orders'/>
        </Tabs>
        {value==='one' && <UserMain/>}
        {value==='two' && <OrderList/>}

      </>
    )
  }
}

export default User
