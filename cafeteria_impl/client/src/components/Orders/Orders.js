import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar } from '@material-ui/core';

export class Orders extends Component {
  
  render() {
    const {MyOrder} =this.props; 
    return (
      <>
      <List>
        {MyOrder.map(item=> //TODO: Implement the ListHere!
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="avatar" src=""/>
            </ListItemAvatar>
          </ListItem>
          )
        }
      </List>
      </>
    )
  }
}

export default Orders
