import React, {Component} from 'react';

import Header from '../common/header';
import Banner from '../common/banner';
import axios from 'axios';
import '../mock/main/index';
class AppIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerData: []
        }
    }
    componentDidMount() {
        axios.get('/index')
        .then((result)=>{
            if (result.data) {
                this.setState({
                    bannerData: result.data.banner
                })
            }
            
        })
    }
    render () {
        let {bannerData} = this.state;
        return (
            <div>
                <Header />
                <Banner 
                    data={bannerData}
                />
            </div>
        )
    }
}
export default AppIndex;