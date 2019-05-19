import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import { Menu, Orders } from '../../components';

export class UserMain extends Component {
    //This is the Right place for the State!!!!!!!
    constructor(props){
        super(props);
        this.state={
            TheMenu:[
                {text:"pancakes",price:"10"},
                {text:"orther pancakes",price:"8"},
                {text:"Juice",price:"6"},
                {text:"Lemon",price:"5"},
                {text:"Burger",price:"18"}
                ],
            MyOrder:[]
        }
        this.addItemToOrder = this.addItemToOrder.bind(this);
    }
    addItemToOrder(e){
        this.setState({
            MyOrder:[...this.state.MyOrder,e.target.value]
        })
        console.log(`Item ${e.target.value} Added to Order`);
    }

  render() {
    return (
      <>
        <Grid container spacing={24}>
            <Grid item sm={12}>
                <Menu TheMenu={this.state.TheMenu} add={this.addItemToOrder}/>
            </Grid>
            <Grid item sm={12}>
                <Orders MyOrder={this.state.MyOrder}/>
            </Grid>
        </Grid> 
      </>
    )
  }
}

export default UserMain
