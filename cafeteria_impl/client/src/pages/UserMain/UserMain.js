import React, { Component } from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { Menu, Orders } from '../../components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
        this.makeOrder =this.makeOrder.bind(this);
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
            return obj;
        })
        if(!exist){
            this.setState({
                MyOrder:[...this.state.MyOrder,myItem]
            })        
        }
        console.log(this.state.MyOrder);
    }

    makeOrder(){
        const total = this.state.MyOrder.reduce((a, b) => a + b.num * b.price, 0)
        if(total !== 0){
            console.log("Sending your Order to the Cafeteria Staff");
        }
    }

  render() {
      const total = this.state.MyOrder.reduce((a,b)=>a+b.num*b.price,0)
    return (
      <>
        <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="baseline">
            <Grid item sm={6}>
                    <center><Typography variant="h6">Choose From the Menu</Typography></center>
                <Menu TheMenu={this.state.TheMenu} add={this.addItemToOrder}/>
            </Grid>
            <Grid item sm={6}>
                <center><Typography variant="h6">This is Your order</Typography></center>
                <Orders MyOrder={this.state.MyOrder}/>
            </Grid>
        </Grid>
        <center>
            <Button variant="contained" size="large" onClick={this.makeOrder}>
                PayCheck {total} Dh
                <AddShoppingCartIcon/>
            </Button>
        </center>
      </>
    )
  }
}

export default UserMain
