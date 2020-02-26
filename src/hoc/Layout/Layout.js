import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Block from '../Block/Block';
import Footer from '../../components/Navigation/Footer/Footer';
import ToTop from '../../components/UI/ToTop/ToTop';

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Block>
                    <Footer />
                </Block>
                <ToTop />
            </div>
        )
    }
}

export default Layout;