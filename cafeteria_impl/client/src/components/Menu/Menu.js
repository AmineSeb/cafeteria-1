import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

export class Menu extends Component {

    render() {
        const { TheMenu } = this.props;
        console.log(TheMenu);
        return (
            <>
                <List>
                    {TheMenu.map((item,index) => //TODO: Implement the ListHere!
                        <ListItem button key={index} onClick={this.props.add}>
                            <ListItemAvatar>
                                <Avatar alt="avatar" src="" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.text}
                                secondary={item.price}
                            />
                        </ListItem>
                    )
                    }
                </List>
            </>
        )
    }
}

export default Menu
