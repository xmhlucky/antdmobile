import React, {Component} from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
class Login extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { getFieldProps } = this.props.form;
        return (
            <List>
                <InputItem {...getFieldProps('normal')}/>
                <InputItem {...getFieldProps('required', {
                    onChange(){}, // have to write original onChange here if you need
                    rules: [{required: true}],
                })}/>
                <Button>submit</Button>
            </List>
            
        )
    }
}
let LoginForm = createForm()(Login);
export default LoginForm;