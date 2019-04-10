import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import { Logo } from './styles';
 

export class Nav extends Component {
  render() {           
    return (
        <Fragment>
            <div className='navbar navbar-expand-lg navbar-light sticky bg-light'>
                <Link to="/">
                    <Logo alt='logo' src={require('../../assets/logo.png')}/>
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'> 
                        <li className='nav-item'>
                            <Link to='/' >HOME</Link>
                        </li>
                        <Link to='/login' className='nav-item'>Login</Link>
                    </ul>

                </div>
            </div>
        </Fragment>
    )
  }
}

export default Nav
