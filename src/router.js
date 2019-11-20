import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AppIndex from './main';
import LoginForm from './login/login';
class MobileRouter extends Component {
    render () {
        console.log(LoginForm)
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={AppIndex} />
                    <Route path="/login" component={LoginForm} />
                </BrowserRouter>
            </div>
            
        )
    }

}
export default MobileRouter;