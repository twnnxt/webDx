import React, { Component } from 'react';

import Carousel from '../../components/UI/Carousel/Carousel';
import Pic1 from '../../assets/images/1-1.jpg';
import Pic2 from '../../assets/images/1-2.jpg';
import Pic3 from '../../assets/images/1-3.jpg';
import Pic4 from '../../assets/images/1-4.jpg';

class Banner1 extends Component {
    state = {
        type: 'image',
        imgs: [Pic1, Pic2, Pic3, Pic4]
    }

    render() {
        return (
            <Carousel type={this.state.type} imgUrls={this.state.imgs} hasArrow />
        );
    };
};

export default Banner1;