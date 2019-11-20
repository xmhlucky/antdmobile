import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';
class Banner extends Component {
    render () {
        let { data } = this.props;
        return (
            <Carousel
                autoplay
                infinite
            >
                {
                    data && data.map((item) =>(<div> <img src={item.img} alt=''/></div>))
                }
            </Carousel>
        )
    }

}
export default Banner;