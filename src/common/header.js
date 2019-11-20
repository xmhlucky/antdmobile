import React, { Component } from 'react';
import { Menu, SearchBar, NavBar } from 'antd-mobile';
import { Router, Route, Link } from 'react-router';
class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
        this.toLogon = this.toLogon.bind(this);
    }
    toLogon () {

    }
    render () {
        return (
            <div>
                {/* <Menu />                 */}
                <NavBar 
                    leftContent='首页'
                    rightContent={<span onClick={this.toLogon}>登录</span>}
                    mode='dark'
                >
                    快乐读书网
                </NavBar>
            </div>
        )
    }

}
export default Header;
