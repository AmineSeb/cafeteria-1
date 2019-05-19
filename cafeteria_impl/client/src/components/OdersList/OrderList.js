import React, { Component } from 'react'
import { List, ListItem, Typography, Paper, ListItemText } from '@material-ui/core';

export class OrderList extends Component {
    //TODO: Make the Fetching of my Orders Right here!
    constructor(props){
        super(props);
        this.state={
            MyOrders:[
                {
                    id:"1",
                    total:"12",
                    status:"pending"
                },
                {
                    id:"2",
                    total:"15",
                    status:"accepted"
                },
                {
                    id: "3",
                    total: "20",
                    status: "ready"
                }
            ]
        }
    }
  render() {
    return (
      <>
        <List>
            {
                this.state.MyOrders.map((item)=>
                    <ListItem key={item.id}>
                        <Paper>
                                <ListItemText
                                primary={`Order ${item.id} Of Total ${item.total}`}
                                secondary={
                                    <>
                                        <Typography color="textPrimary">
                                            {`Status :${item.status} `}
                                        </Typography>
                                    </>
                                }
                            />
                        </Paper>
                    </ListItem>
                )
            }

        </List>
      </>
    )
  }
}

export default OrderList
