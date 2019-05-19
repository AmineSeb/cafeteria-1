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

    addItemToOrder(item){
        let myItem = {...item,num:"1"};
        let exist = false;
        //lets add the 
        this.state.MyOrder.map(obj=>{
            if(obj.text===myItem.text){
                obj.num++;
                exist=true;
                this.setState({MyOrder:[...this.state.MyOrder]});
            }
        })
        if(!exist){
            this.setState({
                MyOrder:[...this.state.MyOrder,myItem]
            })        
        }
        console.log(this.state.MyOrder);
    }

  render() {
    return (
      <>
        <Grid container spacing={8}>
            <Grid item sm={6}>
                <Menu TheMenu={this.state.TheMenu} add={this.addItemToOrder}/>
            </Grid>
            <Grid item sm={6}>
                <Orders MyOrder={this.state.MyOrder}/>
            </Grid>
        </Grid> 
      </>
    )
  }
}

export default UserMain
