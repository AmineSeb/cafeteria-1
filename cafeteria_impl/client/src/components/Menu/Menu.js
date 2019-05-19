import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar } from '@material-ui/core';

export class Menu extends Component {

    render() {
        const { TheMenu } = this.props;
        return (
            <>
                <List>
                    {TheMenu.map(item => //TODO: Implement the ListHere!
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="avatar" src="" />
                            </ListItemAvatar>
                        </ListItem>
                    )
                    }
                </List>
            </>
        )
    }
}

export default Menu
