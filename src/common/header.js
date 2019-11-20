import React, { Component, Fragment } from 'react';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    render () {
        return (
            <Fragment>
                <NavBar 
                    leftContent='首页'
                    rightContent={<Link to='/login'>登录</Link>}
                    mode='dark'
                >
                    快乐读书网
                </NavBar>
            </Fragment>
        )
    }

}
export default Header;
