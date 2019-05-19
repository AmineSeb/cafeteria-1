import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

export class Orders extends Component {
  
  render() {
    const {MyOrder} =this.props; 
    return (
      <>
      <List>
        {MyOrder.map((item,index)=> //TODO: Implement the ListHere!
          <ListItem button key={index}>
            <ListItemAvatar>
              <Avatar alt="avatar" src=""/>
            </ListItemAvatar>
              <ListItemText
                primary={`${item.text} x${item.num}`} 
                secondary={
                <>
                  <Typography color="textPrimary">
                    {`${item.price} DH each`}
                  </Typography>
                </>
                }
              />
          </ListItem>
          )
        }
      </List>
      </>
    )
  }
}

export default Orders
