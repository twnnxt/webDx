import React, { Component } from 'react';

import Block from '../../hoc/Block/Block';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import Banner5 from './Banner5';
import Banner6 from './Banner6';
// import Footer from '../Banners/Footer';

class Home extends Component {

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    render() {
        return (
            <div>
                <Banner1 />
                <Block bg="bg-light">
                    <Banner2 />
                </Block>
                <Block bg="bg-white">
                    <Banner3 />
                </Block>
                <Block bg="bg-light">
                    <Banner4 />
                </Block>
                <Block bg="bg-white">
                    <Banner5 />
                </Block>
                <Block bg="bg-white">
                    <Banner6 />
                </Block>
            </div>
        );
    };
};

export default Home;