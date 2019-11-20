import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import AppIndex from './main';
import Login from './login/login';
class MobileRouter extends Component {
    render () {
        return (
            <div>
                <Router path="" component={AppIndex} />
            </div>
            
        )
    }

}
export default MobileRouter;