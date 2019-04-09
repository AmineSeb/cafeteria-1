import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Header, NavSection, NavItem,Content } from './styles';
 
export class Nav extends Component {
    state = { authenticated:true }
    
    //TODO: Let's Leave the Authentication for later

  render() {
      const {authenticated} = this.state;
      const authenticationControl = authenticated ? (
          <button>Logout</button>
      ):(
          <Link to="/login">Login</Link>
      )
            
    return (
      <div>
        <Header>
            <Content>
                <NavSection>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        {authenticated?<Link to="/orders">My Order</Link>:null}
                    </NavItem>
                    <NavItem>
                        authenticationControl
                    </NavItem>
                </NavSection>
            </Content>
        </Header>
      </div>
    )
  }
}

export default Nav
